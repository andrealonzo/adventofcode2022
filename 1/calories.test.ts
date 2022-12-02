import {mostCaloriesThatAnElfIsCarrying} from './calories'

test('most calories by elf by single elf', () => {
    const expectedCalories = 2000
    const calorieInput = "2000"
    const actualCalories = mostCaloriesThatAnElfIsCarrying(calorieInput);
    expect(actualCalories).toBe(expectedCalories)
})

