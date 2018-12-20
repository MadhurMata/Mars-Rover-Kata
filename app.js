
// Iteration 1 | The Rover Object
var rover = {
direction: "N",
x: 0,
y: 0,
travelLog: [],
}
// Iteration 2 | Turning the Rover
function turnLeft(rover){
  switch(rover.direction){
  case "N":
  rover.direction = "W"
  break;
  case "W":
  rover.direction = "S"
  break;

  case "S":
  rover.direction = "E"
  break;

  case "E":
  rover.direction = "N"
  break;

  }
  console.log("turnLeft was called!" + " Now, rover is facing " + rover.direction);  
}

function turnRight(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "E"
    break;
    case "E":
    rover.direction = "S"
    break;
    case "S":
    rover.direction = "W"
    break;
    case "W":
    rover.direction = "N"
    break;
    }
  console.log("turnRight was called!" + " Now, rover is facing " + rover.direction);
}

//Iteration 3 | Moving the Rover
function moveForward(rover){
  switch(rover.direction){
  case "N":
  rover.y++;
  break;
  case "W":
  rover.x--
  break;
    case "S":
    rover.y--
    break;
      case "E":
      rover.x++
      break;
      }
  console.log("moveForward was called [" + rover.x + "," + rover.y + "]")
}

/** 
turnLeft(rover);
turnLeft(rover);
console.log(moveForward(rover))
turnLeft(rover);

console.log(moveForward(rover))
*/

//Iteration 4 | Commands & Iteration 5 | Tracking

var rute = "rffrfflfrff"
rute = "ffrrgxbblfv"

var record =[] 
function programedRute(){
for(var i = 0; i < rute.length; i++){
if(rute[i] === "r" || rute[i] === "f" || rute[i] === "l" || rute[i] === "b"){
  switch (rute[i]){
  case "r":
  turnRight(rover);
  break;
  case "l":
  turnLeft(rover);
  break;
  case "f":
  moveForward(rover)
  record.push([rover.x, rover.y])
  break;
  case "b":
  moveBackward(rover);
  record.push([rover.x, rover.y]);
  break;
}
}else{
  console.log( "Invalid imput")
}
}
}
/*
console.log(programedRute(rute));
console.log(record)
*/
console.log(programedRute(rute));

//Bonus | Enforce Boundaries
var grid = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
];

//Bonus | Other Suggested Features

//Iteration 3 | Moving the Rover
function moveBackward(rover){
  switch(rover.direction){
  case "N":
  rover.y--;
  break;
  case "W":
  rover.x++
  break;
    case "S":
    rover.y++
    break;
      case "E":
      rover.x--
      break;
      }
  console.log("moveBackward was called [" + rover.x + "," + rover.y + "]")
}

