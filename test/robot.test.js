import { expect, assert, should } from 'chai';
import Robot from '../assets/js/Robot.js'

let robot = new Robot(0, 0, "NORTH");


describe("Robot  Module", function () {


  describe("returns the position of the robot on the board", function () {
    it("Returns a String", function () {

      expect(robot.report()).to.be.a('String');
    });

  });

  describe("returns the direction the robot facing on the board when trun right is clicked", function () {

    var right = robot.turnRight();

    it("Returns a String", function () {
      expect(right).to.be.a('String');
    });

    it('Turned right  to East', function () {
      expect(right).to.eql('EAST');
    });

  });

  describe("returns the direction the robot facing on the board when trun left is clicked", function () {
    var left = robot.turnLeft();

    it("Returns a String", function () {
      expect(left).to.be.a('String');
    });

    it('Turned left  to North', function () {
      expect(left).to.eql('NORTH');
    });

  });

});

