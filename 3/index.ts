import * as fs from 'fs';
import {createCalculator} from './challenge'
const input = fs.readFileSync('input.txt','utf8');
const calculator1 = createCalculator(input)
const answer1 = calculator1.calculate();
console.log("Answer 1: " + answer1 + "\n")
// console.log("Strategy 2 total score: " + totalScore2 + "\n")
