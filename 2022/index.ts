import * as fs from 'fs';

const day = process.argv[2]
if (!day) {
    console.log("Please specify a day")
} else {
    import('./' + day + '/challenge').then(calc => {
        const input = fs.readFileSync('./' + day + '/input.txt', 'utf8');
        const calculator = calc.createCalculator(input)
        const answer1 = calculator.calculateAnswer1();
        console.log("Answer 1: " + answer1 + "\n")
        const answer2 = calculator.calculateAnswer2()
        console.log("Answer 2: " + answer2 + "\n")
    });
}
