import { expect, assert, should } from 'chai';
import Board from '../assets/js/Board.js'
import Robot from '../assets/js/Robot.js'



let board = new Board(5, 5);

describe("Board  Module", function () {


  describe("returns true/false on robot coordinates comapred to board width", function () {
    var in_x = board.withinTheWidth(2);
    var out_x = board.withinTheWidth(7);


    it("Returns true if value is less than 4", function () {
      assert.typeOf(in_x, 'boolean');
      expect(in_x).to.eql(true);
    });

    it('Returns false if value is more than 4', function () {
      assert.typeOf(out_x, 'boolean');
      expect(out_x).to.eql(false);
    });

  });

  describe("returns true/false on robot coordinates comapred to board height", function () {
    var in_y = board.withinTheHeight(2);
    var out_y = board.withinTheHeight(7);


    it("Returns true if value is less than 4", function () {
      assert.typeOf(in_y, 'boolean');
      expect(in_y).to.eql(true);
    });

    it('Returns false if value is more than 4', function () {
      assert.typeOf(out_y, 'boolean');
      expect(out_y).to.eql(false);
    });

  });

  describe("returns true/false on robot coordinates comapred to board dimensions", function () {
    var in_x_out_y = board.withinTheLimits(2, 6);
    var out_x_in_y = board.withinTheLimits(7, 0);
    var out_x_out_y = board.withinTheLimits(9, 9);
    var in_x_in_y = board.withinTheLimits(2, 2);
    var in_y_out_x = board.withinTheLimits(9, 2);


    it("Returns false if x is less than 4 y is more than 4", function () {
      assert.typeOf(in_x_out_y, 'boolean');
      expect(in_x_out_y).to.eql(false);
    });

    it("Returns false if x is more than 4 y is less than 4", function () {
      assert.typeOf(out_x_in_y, 'boolean');
      expect(out_x_in_y).to.eql(false);
    });

    it("Returns false if x is more than 4 y is more than 4", function () {
      assert.typeOf(out_x_out_y, 'boolean');
      expect(out_x_out_y).to.eql(false);
    });

    it("Returns true if x is less than 4 y is less than 4", function () {
      assert.typeOf(in_x_in_y, 'boolean');
      expect(in_x_in_y).to.eql(true);
    });

    it("Returns false if x is more than 4 y is less than 4", function () {
      assert.typeOf(in_y_out_x, 'boolean');
      expect(in_y_out_x).to.eql(false);
    });


  });



});

