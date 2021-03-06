class Board {

    constructor(width, height) {
        this.width = width;
        this.height = height;

    }


    /**
     * get width of the board
     */
    getWidth() {
        return this.width;

    }


    /**
     * set width of the board
     * @param {*} width 
     */
    setWidth(width) {
        this.width = width;

    }


    /**
     * get height of the board
     */
    getHeight() {
        return this.height;

    }


    /**
     * set height of the board
     * @param {*} height 
     */
    setHeight(height) {
        this.height = height;

    }


    /**
     * check validity of x cordinate input
     * @param {*} units 
     */
    withinTheWidth(units) {
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
    withinTheHeight(units) {
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
    withinTheLimits(x_val, y_val) {
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
    drawRobot(x, y, limit, robot_box) {
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
    showDirectionFacing(dir, arrow) {
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

};

export default Board;