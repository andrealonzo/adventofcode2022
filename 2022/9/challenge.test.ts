import {createCalculator} from './challenge'

test('sample test', () => {
    const expected = 13
    const input = "R 4\n" +
        "U 4\n" +
        "L 3\n" +
        "D 1\n" +
        "R 4\n" +
        "D 1\n" +
        "L 5\n" +
        "R 2"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})
test('sample test 2 small', () => {
    const expected = 13
    const input = "R 4\n" +
        "U 4\n" +
        "L 3\n" +
        "D 1\n" +
        "R 4\n" +
        "D 1\n" +
        "L 5\n" +
        "R 2"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})
test('sample test 2', () => {
    const expected = 1
    const input = "R 5\n" +
        "U 8\n" +
        "L 8\n" +
        "D 3\n" +
        "R 17\n" +
        "D 10\n" +
        "L 25\n" +
        "U 20"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})


