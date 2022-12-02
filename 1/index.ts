import * as fs from 'fs';
import {mostCaloriesThatAnElfIsCarrying} from './calories'
const calorieInput = fs.readFileSync('input.txt','utf8');
const mostCalories = mostCaloriesThatAnElfIsCarrying(calorieInput);
console.log(mostCalories)
