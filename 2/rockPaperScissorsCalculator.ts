interface RockPaperScissorsCalculator {
    calculateTotalScore: () => number
}

interface Round {
    p1: string,
    p2: string
}

export const createCalculator = (input: string): RockPaperScissorsCalculator => {

    const parseRounds = (input: string): Round[] => {

        const roundArr = input.split(" ")

        const round: Round = {
            p1: roundArr[0],
            p2: roundArr[1]
        };

        return [round]
    }

    const selectedShapeScore = (shape: string): number => {
        if (shape === 'X') {
            return 1
        } else if (shape === 'Y') {
            return 2
        } else if (shape === 'Z') {
            return 3
        }
        return 0
    };

    const isTie = (round: Round): boolean => {
        return (round.p1 === 'A' && round.p2 === 'X') || (round.p1 === 'B' && round.p2 === 'Y') || (round.p1 === 'C' && round.p2 === 'Z')
    };

    const isWon = (round: Round): boolean => {
        return (round.p1 === 'C' && round.p2 === 'X') || (round.p1 === 'A' && round.p2 === 'Y') || (round.p1 === 'B' && round.p2 === 'Z')
    };

    const outcomeOfRoundScore = (round: Round): number => {
        if (isTie(round)) {
            return 3
        } else if (isWon(round)) {
            return 6
        }
        //loss
        return 0
    };

    const getRoundScore = (round: Round): number => {
        return selectedShapeScore(round.p2) + outcomeOfRoundScore(round)
    }

    const calculateTotalScore = (): number => {
        const rounds = parseRounds(input)
        const round = rounds[0]
        const totalScore = getRoundScore(round)
        return totalScore
    }

    return {
        calculateTotalScore
    }

}
