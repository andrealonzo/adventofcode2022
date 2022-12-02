import {createCalculator} from './rockPaperScissorsCalculator'

test('calculate advent of code sample input total score', () => {
    const expectedScore = 15
    const input =
        "A Y\n" +
        "B X\n" +
        "C Z"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('rock tie', () => {
    const expectedScore = 4
    const input =
        "A X"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('paper tie', () => {
    const expectedScore = 5
    const input =
        "B Y"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('scissors tie', () => {
    const expectedScore = 6
    const input =
        "C Z"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('rock win', () => {
    const expectedScore = 7
    const input =
        "C X"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('paper win', () => {
    const expectedScore = 8
    const input =
        "A Y"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('scissors win', () => {
    const expectedScore = 9
    const input =
        "B Z"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('rock loses', () => {
    const expectedScore = 1
    const input =
        "B X"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('paper loses', () => {
    const expectedScore = 2
    const input =
        "C Y"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('scissors loses', () => {
    const expectedScore = 3
    const input =
        "A Z"
    const rockPaperScissorsCalculator = createCalculator(input, 1)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('calculate AoC sample input total score with strategy 2', () => {
    const expectedScore = 12
    const input =
        "A Y\n" +
        "B X\n" +
        "C Z"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('rock tie strategy 2', () => {
    const expectedScore = 4
    const input =
        "A Y"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('paper tie strategy 2', () => {
    const expectedScore = 5
    const input =
        "B Y"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('scissors tie strategy 2', () => {
    const expectedScore = 6
    const input =
        "C Y"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})

test('rock win strategy 2', () => {
    const expectedScore = 8
    const input =
        "A Z"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('paper win strategy 2', () => {
    const expectedScore = 9
    const input =
        "B Z"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('scissors win strategy 2', () => {
    const expectedScore = 7
    const input =
        "C Z"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('rock lose strategy 2', () => {
    const expectedScore = 3
    const input =
        "A X"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('paper lose strategy 2', () => {
    const expectedScore = 1
    const input =
        "B X"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})
test('scissors lose strategy 2', () => {
    const expectedScore = 2
    const input =
        "C X"
    const rockPaperScissorsCalculator = createCalculator(input, 2)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
})



