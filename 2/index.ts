import * as fs from 'fs';
import {createCalculator} from './rockPaperScissorsCalculator'
const input = fs.readFileSync('input.txt','utf8');
const calculator1 = createCalculator(input, 1)
const totalScore1 = calculator1.calculateTotalScore();
const calculator2 = createCalculator(input, 2)
const totalScore2 = calculator2.calculateTotalScore();
console.log("Strategy 1 total score: " + totalScore1 + "\n")
console.log("Strategy 2 total score: " + totalScore2 + "\n")
