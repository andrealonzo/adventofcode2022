import {createCalculator} from './challenge'

test('sample test', () => {
    const expected = 24
    const input = "498,4 -> 498,6 -> 496,6\n" +
        "503,4 -> 502,4 -> 502,9 -> 494,9"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})
test('sample test 2', () => {
    const expected = 93
    const input = "498,4 -> 498,6 -> 496,6\n" +
        "503,4 -> 502,4 -> 502,9 -> 494,9"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})



