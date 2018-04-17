
class Robot {

    constructor(x_pos, y_pos, facing) {
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.facing = facing;
    }


    /**
     * get x position
     */
    getX_pos() {
        return this.x_pos;

    }


    /**
     * set x position
     * @param {*} x_pos 
     */
    setX_pos(x_pos) {
        this.x_pos = x_pos;

    }


    /**
     * get y position
     */
    getY_pos() {
        return this.y_pos;

    }


    /**
     * set y position
     * @param {*} y_pos 
     */
    setY_pos(y_pos) {
        this.y_pos = y_pos;

    }


    /**
     * get direction facing
     */
    getFacing() {
        return this.facing;

    }


    /**
     * set  direction facing
     * @param {*} facing 
     */
    setFacing(facing) {
        this.facing = facing;

    }


    /**
     * move robot to x & y positions
     * @param {*} x 
     * @param {*} y 
     */
    move(x, y, dir) {
        this.setX_pos(x);
        this.setY_pos(y);
        this.setFacing(dir);

    }

    
    /**
     * return x, y, direction details
     */
    report() {
        var x = this.getX_pos();
        var y = this.getY_pos();
        var dir = this.getFacing();

        return " <br/> <strong class='text-dark'>Position : " + x + " " + y + " " + dir + "</strong> "

    }


    /**
     * set facing to turn robot to right
     */
    turnRight() {
        switch (this.getFacing()) {
            case 'NORTH': {
                this.setFacing('EAST');
                break;
            }
            case 'SOUTH': {
                this.setFacing('WEST');
                break;
            }
            case 'EAST': {
                this.setFacing('SOUTH');
                break;
            }
            case 'WEST': {
                this.setFacing('NORTH');
                break;
            }
        }

        return this.getFacing();
    }


    /**
     * set facing to turn robot to right
     */
    turnLeft() {
        switch (this.getFacing()) {
            case 'NORTH': {
                this.setFacing('WEST');
                break;
            }
            case 'SOUTH': {
                this.setFacing('EAST');
                break;
            }
            case 'EAST': {
                this.setFacing('NORTH');
                break;
            }
            case 'WEST': {
                this.setFacing('SOUTH');
                break;
            }
        }


        return this.getFacing()

    }

};

export default Robot;