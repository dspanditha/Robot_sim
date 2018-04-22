/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
    function Board(width, height) {
        _classCallCheck(this, Board);

        this.width = width;
        this.height = height;
    }

    /**
     * get width of the board
     */


    _createClass(Board, [{
        key: "getWidth",
        value: function getWidth() {
            return this.width;
        }

        /**
         * set width of the board
         * @param {*} width 
         */

    }, {
        key: "setWidth",
        value: function setWidth(width) {
            this.width = width;
        }

        /**
         * get height of the board
         */

    }, {
        key: "getHeight",
        value: function getHeight() {
            return this.height;
        }

        /**
         * set height of the board
         * @param {*} height 
         */

    }, {
        key: "setHeight",
        value: function setHeight(height) {
            this.height = height;
        }

        /**
         * check validity of x cordinate input
         * @param {*} units 
         */

    }, {
        key: "withinTheWidth",
        value: function withinTheWidth(units) {
            var valid = false;

            if (0 <= units && units < this.width) {
                valid = true;
            } else if (units < 0 || units > this.width) {
                valid = false;
            }

            return valid;
        }

        /**
         * check validity of y cordinate input
         * @param {*} units 
         */

    }, {
        key: "withinTheHeight",
        value: function withinTheHeight(units) {
            var valid = false;

            if (0 <= units && units < this.height) {
                valid = true;
            } else if (units < 0 || units > this.height) {
                valid = false;
            }

            return valid;
        }

        /**
         * check if robot is within the board limit
         * @param {*} x_val 
         * @param {*} y_val 
         */

    }, {
        key: "withinTheLimits",
        value: function withinTheLimits(x_val, y_val) {
            var valid_x = this.withinTheWidth(x_val);
            var valid_y = this.withinTheHeight(y_val);
            var valid = false;

            if (valid_x == true && valid_y == true) {
                valid = true;
            } else if (valid_x == false || valid_y == false) {
                valid = false;
            }

            return valid;
        }

        /**
         * render robot square with x y  coordinates
         * @param {*} x 
         * @param {*} y 
         */

    }, {
        key: "drawRobot",
        value: function drawRobot(x, y, limit, robot_box) {
            if (limit) {
                var cssHeight = 100 * y;
                var cssWidth = 100 * x;
                robot_box.setAttribute("style", "bottom: " + cssHeight + "px; left:" + cssWidth + "px;");
            }
        }

        /**
         * draw the arrow to show the direction
         * @param {*} dir 
         * @param {*} arrow 
         */

    }, {
        key: "showDirectionFacing",
        value: function showDirectionFacing(dir, arrow) {
            switch (dir) {
                case 'NORTH':
                    {
                        arrow.setAttribute('class', 'fa fa-arrow-up');
                        break;
                    }
                case 'SOUTH':
                    {
                        arrow.setAttribute('class', 'fa fa-arrow-down');
                        break;
                    }
                case 'EAST':
                    {
                        arrow.setAttribute('class', 'fa fa-arrow-right');
                        break;
                    }
                case 'WEST':
                    {
                        arrow.setAttribute('class', 'fa fa-arrow-left');
                        break;
                    }
            }
        }
    }]);

    return Board;
}();

;

exports.default = Board;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Robot = function () {
    function Robot(x_pos, y_pos, facing) {
        _classCallCheck(this, Robot);

        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.facing = facing;
    }

    /**
     * get x position
     */


    _createClass(Robot, [{
        key: "getX_pos",
        value: function getX_pos() {
            return this.x_pos;
        }

        /**
         * set x position
         * @param {*} x_pos 
         */

    }, {
        key: "setX_pos",
        value: function setX_pos(x_pos) {
            this.x_pos = x_pos;
        }

        /**
         * get y position
         */

    }, {
        key: "getY_pos",
        value: function getY_pos() {
            return this.y_pos;
        }

        /**
         * set y position
         * @param {*} y_pos 
         */

    }, {
        key: "setY_pos",
        value: function setY_pos(y_pos) {
            this.y_pos = y_pos;
        }

        /**
         * get direction facing
         */

    }, {
        key: "getFacing",
        value: function getFacing() {
            return this.facing;
        }

        /**
         * set  direction facing
         * @param {*} facing 
         */

    }, {
        key: "setFacing",
        value: function setFacing(facing) {
            this.facing = facing;
        }

        /**
         * move robot to x & y positions
         * @param {*} x 
         * @param {*} y 
         */

    }, {
        key: "move",
        value: function move(x, y, dir) {
            this.setX_pos(x);
            this.setY_pos(y);
            this.setFacing(dir);
        }

        /**
         * return x, y, direction details
         */

    }, {
        key: "report",
        value: function report() {
            var x = this.getX_pos();
            var y = this.getY_pos();
            var dir = this.getFacing();

            return " <br/> <strong class='text-dark'>Position : " + x + " " + y + " " + dir + "</strong> ";
        }

        /**
         * set facing to turn robot to right
         */

    }, {
        key: "turnRight",
        value: function turnRight() {
            switch (this.getFacing()) {
                case 'NORTH':
                    {
                        this.setFacing('EAST');
                        break;
                    }
                case 'SOUTH':
                    {
                        this.setFacing('WEST');
                        break;
                    }
                case 'EAST':
                    {
                        this.setFacing('SOUTH');
                        break;
                    }
                case 'WEST':
                    {
                        this.setFacing('NORTH');
                        break;
                    }
            }

            return this.getFacing();
        }

        /**
         * set facing to turn robot to right
         */

    }, {
        key: "turnLeft",
        value: function turnLeft() {
            switch (this.getFacing()) {
                case 'NORTH':
                    {
                        this.setFacing('WEST');
                        break;
                    }
                case 'SOUTH':
                    {
                        this.setFacing('EAST');
                        break;
                    }
                case 'EAST':
                    {
                        this.setFacing('NORTH');
                        break;
                    }
                case 'WEST':
                    {
                        this.setFacing('SOUTH');
                        break;
                    }
            }

            return this.getFacing();
        }
    }]);

    return Robot;
}();

;

exports.default = Robot;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Board = __webpack_require__(0);

var _Board2 = _interopRequireDefault(_Board);

var _Robot = __webpack_require__(1);

var _Robot2 = _interopRequireDefault(_Robot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var board = new _Board2.default(5, 5);
var robot = new _Robot2.default(0, 0, "NORTH");

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
    displayText(true, robot.report(), "Reset");

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

/***/ })
/******/ ]);