import {mostCaloriesThatAnElfIsCarrying} from './calories'

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


