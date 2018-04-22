import Board from './Board.js'
import Robot from './Robot.js'


let board = new Board(5, 5);
let robot = new Robot(0, 0, "NORTH");

//display components
var text_display = document.querySelector('.text-display span');
var robot_box = document.querySelector('.robot-box');
var arrow = document.querySelector('.robot-box i');

//initial values
var init_x = 0;
var init_y = 0;
var init_dir = 'NORTH';

/**
 * functionality on page load
 */
function init() {
    document.querySelector('.x-cord').value = init_x;
    document.querySelector('.y-cord').value = init_y;
    document.querySelector('.direction').value = init_dir;

}


window.onload = init;

/**
 * functionality on button move
 */
document.querySelector('.move').addEventListener('click', function (e) {

    var x_moved = Number(document.querySelector('.x-cord').value);
    var y_moved = Number(document.querySelector('.y-cord').value);
    var direction_input = document.querySelector('.direction').value;

    robot.move(x_moved, y_moved, direction_input);

    board.showDirectionFacing(direction_input, arrow);

    var limit = board.withinTheLimits(x_moved, y_moved);
    displayText(limit, '', "Move");
    board.drawRobot(x_moved, y_moved, limit, robot_box);

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
    board.showDirectionFacing(facing, arrow);

});


/**
 * functionality on button turn right
 */
document.querySelector('.turnRight').addEventListener('click', function (e) {

    var dir = robot.getFacing();
    var facing = robot.turnRight();
    board.showDirectionFacing(facing, arrow);

});


/**
 * functionality on button report
 */
document.querySelector('.reset').addEventListener('click', function (e) {

    document.querySelector('.x-cord').value = init_x;
    document.querySelector('.y-cord').value = init_y;
    document.querySelector('.direction').value = init_dir;

    robot.setX_pos(init_x);
    robot.setY_pos(init_y);
    robot.setFacing(init_dir);

    board.showDirectionFacing(init_dir, arrow);
    board.drawRobot(init_x, init_y, true, robot_box);
    displayText(true, robot.report(), "Reset")


    console.log(init_dir + ' ' + init_x + ' ' + init_y + ' ' + robot.getFacing() + ' ' + robot.getX_pos() + ' ' + robot.getY_pos());

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
        txt = "Coordinates are within the board limits ";
        type = "text-success";
    } else {
        txt = "Coordinates beyond the board limits, x & y should be between 0 and 5";
        type = "text-danger";

    }


    text_display.innerHTML += "</br><span class='" + type + "'><strong class='text-dark'> " + func + " : </strong>" + txt + robot_pos + "</span>";

    

}





