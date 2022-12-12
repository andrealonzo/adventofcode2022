import * as fs from 'fs';
import {createCalculator} from './calculator'
const input = fs.readFileSync('input.txt','utf8');
const calculator = createCalculator(input)
const answer1 = calculator.calculateNumDepthIncreases();
const answer2 = calculator.calculateSlidingWindowIncreases();
console.log("Answer 1: " + answer1 + "\n")
console.log("Answer 2: " + answer2 + "\n")
