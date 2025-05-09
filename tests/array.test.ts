import { sum } from '../src/tests/array';
import { test, expect} from 'vitest'

test.skip('sum of array', () => {
  //Arrange
  const array = [1, 2, 3, 4, 5];
  //Act
  const result = sum(array);
  //Assert
  expect(result).toBe(15);
})
