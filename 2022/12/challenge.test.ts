import {createCalculator} from './challenge'

test('sample test', () => {
    const expected = 31
    const input = "Sabqponm\n" +
        "abcryxxl\n" +
        "accszExk\n" +
        "acctuvwj\n" +
        "abdefghi"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('sample test 2', () => {
    const expected = 29
    const input = "Sabqponm\n" +
        "abcryxxl\n" +
        "accszExk\n" +
        "acctuvwj\n" +
        "abdefghi"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})


