import {createCalculator, Strategy} from './rockPaperScissorsCalculator'

const testRockPaperScissorsCalculator = (input:string, expectedScore, strategy: Strategy, ) => {
    const rockPaperScissorsCalculator = createCalculator(input, strategy)
    const actualScore = rockPaperScissorsCalculator.calculateTotalScore();
    expect(actualScore).toBe(expectedScore)
};

test('calculate advent of code sample input total score', () => {
    const expectedScore = 15
    const input =
        "A Y\n" +
        "B X\n" +
        "C Z"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})

test('rock tie', () => {
    const expectedScore = 4
    const input =
        "A X"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})

test('paper tie', () => {
    const expectedScore = 5
    const input =
        "B Y"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})

test('scissors tie', () => {
    const expectedScore = 6
    const input =
        "C Z"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})
test('rock win', () => {
    const expectedScore = 7
    const input =
        "C X"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})

test('paper win', () => {
    const expectedScore = 8
    const input =
        "A Y"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})

test('scissors win', () => {
    const expectedScore = 9
    const input =
        "B Z"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})
test('rock loses', () => {
    const expectedScore = 1
    const input =
        "B X"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})

test('paper loses', () => {
    const expectedScore = 2
    const input =
        "C Y"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})

test('scissors loses', () => {
    const expectedScore = 3
    const input =
        "A Z"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.Original);
})

test('calculate AoC sample input total score with strategy 2', () => {
    const expectedScore = 12
    const input =
        "A Y\n" +
        "B X\n" +
        "C Z"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})

test('rock tie strategy 2', () => {
    const expectedScore = 4
    const input =
        "A Y"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})
test('paper tie strategy 2', () => {
    const expectedScore = 5
    const input =
        "B Y"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})
test('scissors tie strategy 2', () => {
    const expectedScore = 6
    const input =
        "C Y"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})

test('rock win strategy 2', () => {
    const expectedScore = 8
    const input =
        "A Z"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})
test('paper win strategy 2', () => {
    const expectedScore = 9
    const input =
        "B Z"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})
test('scissors win strategy 2', () => {
    const expectedScore = 7
    const input =
        "C Z"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})
test('rock lose strategy 2', () => {
    const expectedScore = 3
    const input =
        "A X"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})
test('paper lose strategy 2', () => {
    const expectedScore = 1
    const input =
        "B X"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})
test('scissors lose strategy 2', () => {
    const expectedScore = 2
    const input =
        "C X"
    testRockPaperScissorsCalculator(input, expectedScore, Strategy.New);
})



