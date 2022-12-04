import {createCalculator} from './challenge'

test('test pair one is fully contained', () => {
    const expected = 1
    const input = "6-6,4-6"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('test pair two is fully contained', () => {
    const expected = 1
    const input = "2-8,3-7"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('not fully contained', () => {
    const expected = 0
    const input = "5-7,7-9"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})
test('sample input 1', () => {
    const expected = 2
    const input = "2-4,6-8\n" +
        "2-3,4-5\n" +
        "5-7,7-9\n" +
        "2-8,3-7\n" +
        "6-6,4-6\n" +
        "2-6,4-8"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('overlap', () => {
    const expected = 4
    const input = "2-4,6-8\n" +
        "2-3,4-5\n" +
        "5-7,7-9\n" +
        "2-8,3-7\n" +
        "6-6,4-6\n" +
        "2-6,4-8"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})

test('1 overlap', () => {
    const expected = 1
    const input = "5-7,7-9"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})

test('1 overlap', () => {
    const expected = 1
    const input = "5-7,7-9"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})
test('0 overlap', () => {
    const expected = 0
    const input = "5-6,8-9"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})

