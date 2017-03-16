'use strict'

const {expect} = require('chai')

import {FunctionInstance} from './command.js';
import {Assignment} from './utils.js';
import {If, Condition} from './conditionals.js';

describe('Command Pattern Object storage and execution', () => {

  let func = new FunctionInstance();

  before('creates function and stores commands', function(){

    func.storeCommand(new Assignment('x', 6));
    func.storeCommand(new Assignment('y', 10));

    let ifInstance = new If(new Condition('x', 5, '>'));
    ifInstance.then(new Assignment('x', 11));
    ifInstance.then(new Assignment('y', 2));

    func.storeCommand(ifInstance);
    func.storeCommand(new Assignment('z', 15));
  });

  describe('function execution', () => {
    it('modifies variables in accordance with the function instance being executed', function () {
      let funcResults = func.executeFunction();
      console.log("function results are: ", funcResults);
      expect(funcResults.x).to.equal(11);
      expect(funcResults.y).to.equal(2);
      expect(funcResults.z).to.equal(15);
    });

    it('clears variables once the function is executed', function () {
      let clearedResults = func.clearVariables();
      expect(clearedResults.x).to.equal(undefined);
      expect(clearedResults.y).to.equal(undefined);
      expect(clearedResults.z).to.equal(undefined);
      expect(Object.keys(clearedResults).length).to.equal(0);
    })
  })
})
