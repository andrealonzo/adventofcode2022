import * as fs from 'fs';
import {createCalculator} from './rockPaperScissorsCalculator'
const input = fs.readFileSync('input.txt','utf8');
const calculator = createCalculator(input)
const totalScore = calculator.calculateTotalScore();
console.log("Total score: " + totalScore + "\n")
