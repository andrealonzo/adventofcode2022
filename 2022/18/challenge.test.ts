import {createCalculator} from './challenge'

test('sample test', () => {
    const expected = 64
    const input = "2,2,2\n" +
        "1,2,2\n" +
        "3,2,2\n" +
        "2,1,2\n" +
        "2,3,2\n" +
        "2,2,1\n" +
        "2,2,3\n" +
        "2,2,4\n" +
        "2,2,6\n" +
        "1,2,5\n" +
        "3,2,5\n" +
        "2,1,5\n" +
        "2,3,5"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('sample test 2', () => {
    const expected = 58
    const input = "2,2,2\n" +
        "1,2,2\n" +
        "3,2,2\n" +
        "2,1,2\n" +
        "2,3,2\n" +
        "2,2,1\n" +
        "2,2,3\n" +
        "2,2,4\n" +
        "2,2,6\n" +
        "1,2,5\n" +
        "3,2,5\n" +
        "2,1,5\n" +
        "2,3,5"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})

test('sample test 2 small', () => {
    const expected = 6
    const input = "1,1,1"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})


