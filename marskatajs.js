// Rover Object Goes Here
// ======================
let roverMars = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["x:0 y:0"]
};
let roverMars2 = {
  direction: "W",
  x: 0,
  y: 5,
  travelLog: ["x:0 y:5"]
};

let testBoard = [ 
  [null,"Rock2",null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,"Bottle",null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,"Rock",null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,"Statue",null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null]
];
let obstaclesList = [];

for(let i = 0; i < testBoard.length; i++){
  for(let j = 0; j < testBoard[i].length; j++) {
    if(testBoard[i][j] !== null) {
      obstaclesList.push({x: j, y: i});
    }
  }
}

//console.log(obstaclesList);

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N": rover.direction = "W";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "W": rover.direction = "S";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "S": rover.direction = "E";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "E": rover.direction = "N";
      console.log("Rover is now facing " + rover.direction);
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N": rover.direction = "E";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "W": rover.direction = "N";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "S": rover.direction = "W";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "E": rover.direction = "S";
      console.log("Rover is now facing " + rover.direction);
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  
  switch(rover.direction) {
    case "N": if(rover.y <= 0) { 
      console.log("You can't place the rover outside of the 10x10 grid!");
      } else {
      rover.y--;
      console.log("Rover moved up. The position is now " + rover.x + ", " + rover.y);                           
  }
      break;
    case "W": if(rover.x <= 0) { 
      console.log("You can't place the rover outside of the 10x10 grid!");
      } else {
      rover.x--;
      console.log("Rover moved left. The position is now " + rover.x + ", " + rover.y);
  }
      break;
    case "S": if(rover.y >= 10) { 
      console.log("You can't place the rover outside of the 10x10 grid!");
      } else {
      rover.y++;
      console.log("Rover moved down. The position is now " + rover.x + ", " + rover.y);
  }
      break;
    case "E": if(rover.x >= 10) { 
      console.log("You can't place the rover outside of the 10x10 grid!");
      } else {
      rover.x++;
      console.log("Rover moved right. The position is now " + rover.x + ", " + rover.y);         
  }
      break;
  }
  
 for(let k = 0; k < obstaclesList.length; k++){
    if(rover.x === obstaclesList[k].x && rover.y === obstaclesList[k].y) {
      console.log("Obstacle was found! Stopping now!");
      throw Error("TEST");
      } 
  }
  
  roverMars.travelLog.push("x:" + rover.x + " y:" + rover.y);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  
  switch(rover.direction) {
    case "N": if(rover.y >= 10) { 
      console.log("You can't place the rover outside of the 10x10 grid!");
      } else {
      rover.y++;
      console.log("Rover moved down. The position is now " + rover.x + ", " + rover.y);                           
  }
      break;
    case "W": if(rover.x >= 10) { 
      console.log("You can't place the rover outside of the 10x10 grid!");
      } else {
      rover.x++;
      console.log("Rover moved right. The position is now " + rover.x + ", " + rover.y);
  }
      break;
    case "S": if(rover.y <= 0) { 
      console.log("You can't place the rover outside of the 10x10 grid!");
      } else {
      rover.y--;
      console.log("Rover moved up. The position is now " + rover.x + ", " + rover.y);
  }
      break;
    case "E": if(rover.x <= 0) { 
      console.log("You can't place the rover outside of the 10x10 grid!");
      } else {
      rover.x--;
      console.log("Rover moved left. The position is now " + rover.x + ", " + rover.y);         
  }
      break;
  }
  roverMars.travelLog.push("x:" + rover.x + " y:" + rover.y);
}

function commandments(roverlist) {
  let passRegex = /[lrfb]/g;
  var passResult = roverlist.match(passRegex);
  for(let i = 0; i < passResult.length; i++) {
    switch(roverlist[i]) {
      case "l": turnLeft(roverMars);
        break;
      case "r": turnRight(roverMars);
        break;
      case "f": moveForward(roverMars);
        break;
      case "b": moveBackward(roverMars);
        break;
    }
  }
  //console.log("passResult: " + passResult);
}
//commandments("rffl");
//turnLeft(roverMars);
//turnRight(roverMars);
//moveForward(roverMars);
//console.log(roverMars.travelLog);
