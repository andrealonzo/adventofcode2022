import {createCalculator} from './challenge'

test('sample input 1', () => {
    const expected = 21
    const input = "30373\n" +
        "25512\n" +
        "65332\n" +
        "33549\n" +
        "35390"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})
test('sample input 2', () => {
    const expected = 8
    const input = "30373\n" +
        "25512\n" +
        "65332\n" +
        "33549\n" +
        "35390"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})



