import * as fs from 'fs';
import {caloriesThatTheTopThreeElvesAreCarrying, mostCaloriesThatAnElfIsCarrying} from './calories'
const calorieInput = fs.readFileSync('input.txt','utf8');
const mostCalories = mostCaloriesThatAnElfIsCarrying(calorieInput);
const topThreeCalories = caloriesThatTheTopThreeElvesAreCarrying(calorieInput);
console.log("How many calories does the elf with the most calories have? " + mostCalories + "\n")
console.log("How many calories do the top three elves have? " + topThreeCalories + "\n")
