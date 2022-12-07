interface RockPaperScissorsCalculator {
    calculateTotalScore: () => number
}

interface Round {
    p1: Shape,
    p2: string | Outcome | Shape
}

enum Shape {
    Rock = 'A',
    Paper = 'B',
    Scissors = 'C',
    Undefined = '',
}

enum Outcome {
    Lose = 'X',
    Draw = 'Y',
    Win = 'Z'
}

enum RoundScore {
    Win = 6,
    Lose = 0,
    Draw = 3
}

export enum Strategy {
    Original = 1,
    New = 2
}

const shapeScores = new Map([
    [Shape.Rock, 1],
    [Shape.Paper, 2],
    [Shape.Scissors, 3],
]);


export const createCalculator = (input: string, strategy: number): RockPaperScissorsCalculator => {
    const parseRounds = (input: string): Round[] => {
        const rounds: string[] = input.split(/\n/)
        return rounds.map((roundStr) => {
            const roundArr = roundStr.split(" ")
            const round: Round = {
                p1: <Shape>roundArr[0],
                p2: roundArr[1]
            };
            return round
        })
    }

    const selectedShapeScore = (shape: Shape): number => {
        return shapeScores.get(shape) || 0
    };

    const isDraw = (round: Round): boolean => {
        return (round.p1 === Shape.Rock && round.p2 === Shape.Rock) ||
            (round.p1 === Shape.Paper && round.p2 === Shape.Paper) ||
            (round.p1 === Shape.Scissors && round.p2 === Shape.Scissors)
    };

    const isWin = (round: Round): boolean => {
        return (round.p1 === Shape.Scissors && round.p2 === Shape.Rock) ||
            (round.p1 === Shape.Rock && round.p2 === Shape.Paper) ||
            (round.p1 === Shape.Paper && round.p2 === Shape.Scissors)
    };

    const outcomeOfRoundScore = (round: Round): RoundScore => {
        if (isDraw(round)) {
            return RoundScore.Draw
        } else if (isWin(round)) {
            return RoundScore.Win
        }
        return RoundScore.Lose
    };

    function chooseSelectedShape(round: Round, strategy: Strategy): Shape {
        if (strategy === Strategy.New) {
            if (round.p2 === Outcome.Draw) {
                if (round.p1 === Shape.Rock)
                    return Shape.Rock
                if (round.p1 === Shape.Paper)
                    return Shape.Paper
                if (round.p1 === Shape.Scissors)
                    return Shape.Scissors
            } else if (round.p2 === Outcome.Win) {
                if (round.p1 === Shape.Rock)
                    return Shape.Paper
                if (round.p1 === Shape.Paper)
                    return Shape.Scissors
                if (round.p1 === Shape.Scissors)
                    return Shape.Rock
            } else if (round.p2 === Outcome.Lose) {
                if (round.p1 === Shape.Rock)
                    return Shape.Scissors
                if (round.p1 === Shape.Paper)
                    return Shape.Rock
                if (round.p1 === Shape.Scissors)
                    return Shape.Paper
            }
        } else if (strategy === Strategy.Original) {
            if (round.p2 === 'X') {
                return Shape.Rock
            } else if (round.p2 === 'Y') {
                return Shape.Paper
            } else if (round.p2 === 'Z') {
                return Shape.Scissors
            }
        }
        return Shape.Undefined
    }

    const getRoundScore = (round: Round): number => {
        round.p2 = chooseSelectedShape(round, strategy)
        return selectedShapeScore(<Shape>round.p2)  + outcomeOfRoundScore(round)
    }

    const getTotalScore = (rounds: Round[]): number => {
        return rounds.reduce((partialSum, round) => partialSum + getRoundScore(round), 0)
    };

    const calculateTotalScore = (): number => {
        const rounds = parseRounds(input)
        return getTotalScore(rounds)
    }

    return {
        calculateTotalScore
    }

}
