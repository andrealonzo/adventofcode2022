import {createCalculator} from './challenge'
test('sample test', () => {
    const expected = 1
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(1);
    expect(actual).toBe(expected)
})
test('sample test 2', () => {
    const expected = 2
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(2);
    expect(actual).toBe(expected)
})

test.skip('sample test', () => {
    const expected = 3068
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})


