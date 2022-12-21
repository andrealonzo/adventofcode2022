import {createCalculator} from './challenge'


test('sample test', () => {
    const expected = 3
    const input = "1\n" +
        "2\n" +
        "-3\n" +
        "3\n" +
        "-2\n" +
        "0\n" +
        "4"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('sample test 2', () => {
    const expected = 1623178306
    const input = "1\n" +
        "2\n" +
        "-3\n" +
        "3\n" +
        "-2\n" +
        "0\n" +
        "4"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})


test('sample test reddit', () => {
    const expected = 6492713224
    const input = "0\n" +
        "4\n" +
        "5\n" +
        "1\n" +
        "2\n" +
        "3"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})

