import Board from './Board.js'
import Robot from './Robot.js'


let board = new Board(5, 5);
let robot = new Robot(0, 0, "NORTH");

var text_display = document.querySelector('.text-display span');
var robot_box = document.querySelector('.robot-box');
var arrow = document.querySelector('.robot-box i');



/**
 * functionality on button move
 */
document.querySelector('.move').addEventListener('click', function (e) {

    var x_moved = Number(document.querySelector('.x-cord').value);
    var y_moved = Number(document.querySelector('.y-cord').value);
    var direction_input = document.querySelector('.direction').value;

    robot.move(x_moved, y_moved, direction_input);

    showDirectionFacing(direction_input);

    var limit = board.withinTheLimits(x_moved, y_moved);
    displayText(limit, '', "Move");
    drawRobot(x_moved, y_moved);

});


/**
 * functionality on button report
 */
document.querySelector('.report').addEventListener('click', function (e) {

    var limit = board.withinTheLimits(robot.getX_pos(), robot.getY_pos());
    var robot_pos = robot.report();

    displayText(limit, robot_pos, "Report");

});


/**
 * functionality on button turn left
 */
document.querySelector('.turnLeft').addEventListener('click', function (e) {

    var dir = robot.getFacing();
    var facing = robot.turnLeft();
    showDirectionFacing(facing);

});


/**
 * functionality on button turn right
 */
document.querySelector('.turnRight').addEventListener('click', function (e) {

    var dir = robot.getFacing();
    var facing = robot.turnRight();
    showDirectionFacing(facing);

});



/**
 * display text about the robots movements
 * @param {*} limit 
 * @param {*} robot_pos 
 */
function displayText(limit, robot_pos, func) {
    var txt = '';
    var type = " ";

    if (limit == true) {
        txt = "Robot is within the board limits ";
        type = "text-success";
    } else {
        txt = "Robot beyond the board limits, x & y should be less than 5 & more than 0";
        type = "text-danger";

    }


    text_display.innerHTML += "</br><span class='" + type + "'><strong class='text-dark'> " + func + " : </strong>" + txt + robot_pos + "</span>";


}


/**
 * render robot square with x y  coordinates
 * @param {*} x 
 * @param {*} y 
 */
function drawRobot(x, y) {
    var cssHeight = 100 * y;
    var cssWidth = 100 * x;
    robot_box.setAttribute("style", "bottom: " + cssHeight + "px; left:" + cssWidth + "px;");

}


/**
 * draw the arrow to show the direction
 * @param {*} dir 
 */
function showDirectionFacing(dir) {
    switch (dir) {
        case 'NORTH': {
            arrow.setAttribute('class', 'fa fa-arrow-up')
            break;
        }
        case 'SOUTH': {
            arrow.setAttribute('class', 'fa fa-arrow-down')
            break;
        }
        case 'EAST': {
            arrow.setAttribute('class', 'fa fa-arrow-right')
            break;
        }
        case 'WEST': {
            arrow.setAttribute('class', 'fa fa-arrow-left')
            break;
        }
    }


}