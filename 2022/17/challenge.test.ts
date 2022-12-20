import {createCalculator} from './challenge'
test('sample test', () => {
    const expected = 1
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(1);
    expect(actual).toBe(expected)
})
test('sample test 2', () => {
    const expected = 4
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(2);
    expect(actual).toBe(expected)
})

test('sample test 3', () => {
    const expected = 6
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(3);
    expect(actual).toBe(expected)
})

test('sample test 4', () => {
    const expected = 7
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(4);
    expect(actual).toBe(expected)
})

test('sample test 5', () => {
    const expected = 9
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(5);
    expect(actual).toBe(expected)
})


test('sample test 6', () => {
    const expected = 10
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(6);
    expect(actual).toBe(expected)
})

test('sample test 7', () => {
    const expected = 13
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(7);
    expect(actual).toBe(expected)
})

test('sample test 8', () => {
    const expected = 15
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(8);
    expect(actual).toBe(expected)
})

test('sample test 9', () => {
    const expected = 17
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(9);
    expect(actual).toBe(expected)
})

test('sample test 10', () => {
    const expected = 17
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(10);
    expect(actual).toBe(expected)
})


test('sample test real', () => {
    const expected = 3068
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(2022);
    expect(actual).toBe(expected)
})

test('sample test real 2', () => {
    const expected = 1514285714288
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(1000000000000);
    expect(actual).toBe(expected)
})



