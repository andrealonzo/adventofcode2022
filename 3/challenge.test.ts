import {createCalculator} from './challenge'

test('calculate sample', () => {

    const expected = 157
    const input =
        "vJrwpWtwJgWrhcsFMMfFFhFp\n" +
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n" +
        "PmmdzqPrVvPwwTWBwg\n" +
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\n" +
        "ttgJtRGJQctTZtZT\n" +
        "CrZsJsPPZsGzwwsLwLmpwMDw"
    const calculator = createCalculator(input)
    const actual = calculator.calculate();
    expect(actual).toBe(expected)
})
test('one ruck sack', () => {
    const expected = 16
    const input = "vJrwpWtwJgWrhcsFMMfFFhFp"
    const calculator = createCalculator(input)
    const actual = calculator.calculate();
    expect(actual).toBe(expected)
})

test('two ruck sacks', () => {
    const expected = 54
    const input =
        "vJrwpWtwJgWrhcsFMMfFFhFp\n" +
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"
    const calculator = createCalculator(input)
    const actual = calculator.calculate();
    expect(actual).toBe(expected)
})

test('1 ruck sack group', () => {
    const expected = 18
    const input = "vJrwpWtwJgWrhcsFMMfFFhFp\n" +
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n" +
        "PmmdzqPrVvPwwTWBwg"
    const calculator = createCalculator(input)
    const actual = calculator.cualculateGroup();
    expect(actual).toBe(expected)
})

test('2 ruck sack groups', () => {
    const expected = 70
    const input = "vJrwpWtwJgWrhcsFMMfFFhFp\n" +
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n" +
        "PmmdzqPrVvPwwTWBwg\n" +
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\n" +
        "ttgJtRGJQctTZtZT\n" +
        "CrZsJsPPZsGzwwsLwLmpwMDw"
    const calculator = createCalculator(input)
    const actual = calculator.calculateGroup();
    expect(actual).toBe(expected)
})



