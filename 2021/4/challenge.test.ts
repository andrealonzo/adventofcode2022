import {createCalculator} from './challenge'

test('sample test', () => {
    const expected = 1
    const input = "6-6,4-6"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})


