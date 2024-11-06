import sum from "./index.js";
import {describe, it} from 'node:test';
import assert from 'node:assert';

describe('Sum Calculator', () => {
  it('should sum correctly', () => {
    // Arrange
    const operandA = 5;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 10;
    assert.equal(actualValue, expectedValue);
  });

  it('should return 0 if string passed on numA parameter', () => {
    // Arrange
    const operandA = '5';
    const operandB = 5;

    // Action
    const result = sum(operandA, operandB);

    // Assert
    assert.equal(result, 0);
  });

  it('should return 0 if string passed on numB parameter', () => {
    // Arrange
    const operandA = 5;
    const operandB = '5';

    // Action
    const result = sum(operandA, operandB);

    // Assert
    assert.equal(result, 0);
  });

  it('should return 0 if negative number passed on numA parameter', () => {
    // Arrange
    const operandA = -5;
    const operandB = 5;

    // Action
    const result = sum(operandA, operandB);

    // Assert
    assert.equal(result, 0);
  });

  it('should return 0 if negative number passed on numB parameter', () => {
    // Arrange
    const operandA = 5;
    const operandB = -5;

    // Action
    const result = sum(operandA, operandB);

    // Assert
    assert.equal(result, 0);
  });


});