import * as fs from 'fs';
import {createCalculator} from './challenge'
const input = fs.readFileSync('input.txt','utf8');
const calculator = createCalculator(input)
const answer1 = calculator.calculateAnswer1();
console.log("Answer 1: " + answer1 + "\n")
const answer2 = calculator.calculateAnswer2()
console.log("Answer 2: " + answer2 + "\n")