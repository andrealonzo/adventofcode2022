import {createCalculator} from './challenge'

test('sample test 1', () => {
    const expected = 5
    const input = "bvwbjplbgvbhsrlpgdmjqwftvncz"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})
test('sample test 2 1', () => {
    const expected = 6
    const input = "nppdvjthqldpwncqszvftbrmjlhg"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})
test('sample test 1 2', () => {
    const expected = 19
    const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})


