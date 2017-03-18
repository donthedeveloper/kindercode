'use strict'

const {expect} = require('chai')

import {FunctionInstance} from './command.js';
import {Assignment, Add} from './utils.js';
import {If, Condition} from './conditionals.js';
import {Loop} from './loops.js';

describe('Command Pattern Object storage and execution', () => {

  var func = new FunctionInstance();

  before('creates function and stores commands', function(){

    func.storeCommand(new Assignment('x', 6));
    func.storeCommand(new Assignment('y', 10));
    var ifInstance = new If(new Condition('x', 5, '>'));
      ifInstance.then(new Assignment('x', 11));
      ifInstance.then(new Assignment('y', 2));
      var ifInstanceTwo = new If(new Condition('x', 11, '='));
        ifInstanceTwo.then(new Assignment('a', 99));
        ifInstanceTwo.then(new Assignment('b', 100));
      ifInstance.then(ifInstanceTwo);
    func.storeCommand(ifInstance);
    func.storeCommand(new Assignment('s', 0));
    var loopInstance = new Loop(5);
      var ifInstanceThree = new If(new Condition('x', 10, '>'));
      ifInstanceThree.then(new Add('s', 10));
      loopInstance.then(ifInstanceThree);
    func.storeCommand(loopInstance);
    func.storeCommand(new Assignment('z', 15));
  });

  describe('function execution', () => {

    it('modifies variables in accordance with the function instance being executed', function () {
      let funcResults = func.executeFunction();
      console.log('function results WITHOUT nested IF are: ', funcResults);
      expect(funcResults.x).to.equal(11);
      expect(funcResults.y).to.equal(2);
      expect(funcResults.z).to.equal(15);
    });

    it('works with If statements nested inside other If statemenets', function () {
      let funcResults = func.executeFunction();
      console.log("function results WITH nested If are: ", funcResults);
      expect(funcResults.a).to.equal(99);
      expect(funcResults.b).to.equal(100);
    });

    it('works with If statements nested inside Loops', function () {
      let funcResults = func.executeFunction();
      console.log("function results WITH Loops CONTAINING nested If's in them are: ", funcResults);
      expect(funcResults.s).to.equal(50);
    });

    it('command instances shold initalize with a nested property of value true or false', function () {
      let newIfInstance = new If(null)
      let newAssignment = new Assignment(null, null);
      expect(newIfInstance.nested).to.equal(true);
      expect(newAssignment.nested).to.equal(false);
    });

    it('clears variables once the function is executed', function () {
      var clearedResults = func.clearVariables();
      expect(clearedResults.x).to.equal(undefined);
      expect(clearedResults.y).to.equal(undefined);
      expect(clearedResults.z).to.equal(undefined);
      expect(clearedResults.a).to.equal(undefined);
      expect(clearedResults.b).to.equal(undefined);
      expect(Object.keys(clearedResults).length).to.equal(0);
    })
  })
})
