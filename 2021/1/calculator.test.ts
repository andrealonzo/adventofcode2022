import {createCalculator} from './calculator'

test('sample input', () => {
    const expected = 7
    const input = "199\n" +
        "200\n" +
        "208\n" +
        "210\n" +
        "200\n" +
        "207\n" +
        "240\n" +
        "269\n" +
        "260\n" +
        "263"
    const calculator = createCalculator(input)
    const actual = calculator.calculateNumDepthIncreases();
    expect(actual).toBe(expected)
})

test('one increase out of 2', () => {
    const expected = 1
    const input = "199\n" +
        "200\n"
    const calculator = createCalculator(input)
    const actual = calculator.calculateNumDepthIncreases();
    expect(actual).toBe(expected)
})

test('sliding window', () => {
    const expected = 5
    const input = "199\n" +
        "200\n" +
        "208\n" +
        "210\n" +
        "200\n" +
        "207\n" +
        "240\n" +
        "269\n" +
        "260\n" +
        "263"
    const calculator = createCalculator(input)
    const actual = calculator.calculateSlidingWindowIncreases();
    expect(actual).toBe(expected)
})
