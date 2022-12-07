import * as fs from 'fs';
import {createCalculator} from './challenge'
const input = fs.readFileSync('input.txt','utf8');
const calculator = createCalculator(input)
const answer1 = calculator.calculate();
console.log("Answer 1: " + answer1 + "\n")
const answer2 = calculator.calculateGroup()
console.log("Answer 2: " + answer2 + "\n")
// console.log("Strategy 2 total score: " + totalScore2 + "\n")
