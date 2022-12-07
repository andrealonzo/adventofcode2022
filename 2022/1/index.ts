import * as fs from 'fs';
import {createElfCalorieCalculator} from './elfCalorieCalculator'
const calorieInput = fs.readFileSync('input.txt','utf8');
const elfCalculator = createElfCalorieCalculator(calorieInput)
const mostCalories = elfCalculator.mostCaloriesThatAnElfIsCarrying();
const topThreeCalories = elfCalculator.caloriesThatTheTopThreeElvesAreCarrying();
console.log("How many calories does the elf with the most calories have? " + mostCalories + "\n")
console.log("How many calories do the top three elves have altogether? " + topThreeCalories + "\n")
