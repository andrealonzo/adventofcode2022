import {createCalculator} from './challenge'
test.only('sample test', () => {
    const set = new Set([[0,1]])
    // expect(set.has([0,1])).toBeTruthy()
    expect([0,1] in set).toBeTruthy()
    // expect(set.has(0)).toBeTruthy()
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


