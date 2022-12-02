import {mostCaloriesThatAnElfIsCarrying, caloriesThatTheTopThreeElvesAreCarrying} from './calories'

test('most calories by elf by single elf', () => {
    const expectedCalories = 2000
    const calorieInput = "2000"
    const actualCalories = mostCaloriesThatAnElfIsCarrying(calorieInput);
    expect(actualCalories).toBe(expectedCalories)
})
test('most calories by elf between two elves', () => {
    const expectedCalories = 1000
    const calorieInput =
        "1000\n" +
        "\n" +
        "500"
    const actualCalories = mostCaloriesThatAnElfIsCarrying(calorieInput);
    expect(actualCalories).toBe(expectedCalories)
})

test('add calories by elf by single elf', () => {
    const expectedCalories = 1500
    const calorieInput =
        "1000\n" +
        "500"
    const actualCalories = mostCaloriesThatAnElfIsCarrying(calorieInput);
    expect(actualCalories).toBe(expectedCalories)
})

test('sample day 1 advent of code input', () => {
    const expectedCalories = 24000
    const calorieInput = "1000\n" +
        "2000\n" +
        "3000\n" +
        "\n" +
        "4000\n" +
        "\n" +
        "5000\n" +
        "6000\n" +
        "\n" +
        "7000\n" +
        "8000\n" +
        "9000\n" +
        "\n" +
        "10000"
    const actualCalories = mostCaloriesThatAnElfIsCarrying(calorieInput);
    expect(actualCalories).toBe(expectedCalories)
})

test('total calories of top 3 elves', () => {
    const expectedCalories = 45000
    const calorieInput = "1000\n" +
        "2000\n" +
        "3000\n" +
        "\n" +
        "4000\n" +
        "\n" +
        "5000\n" +
        "6000\n" +
        "\n" +
        "7000\n" +
        "8000\n" +
        "9000\n" +
        "\n" +
        "10000"
    const actualCalories = caloriesThatTheTopThreeElvesAreCarrying(calorieInput);
    expect(actualCalories).toBe(expectedCalories)
})
