interface RockPaperScissorsCalculator {
    calculateTotalScore: () => number
}
interface Round {
    p1: string,
    p2: string
}
export const createCalculator = (input: string, strategy: number): RockPaperScissorsCalculator => {
    const parseRounds = (input: string): Round[] => {
        const rounds: string[] = input.split(/\n/)
        return rounds.map((roundStr) => {
            const roundArr = roundStr.split(" ")
            const round: Round = {
                p1: roundArr[0],
                p2: roundArr[1]
            };
            return round
        })
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

    function chooseSelectedShape(round: Round): string {
        if(round.p2 ==='Y'){
            if(round.p1 ==='A')
                return 'X'
            if(round.p1 ==='B')
                return 'Y'
            if(round.p1 ==='C')
                return 'Z'
        }
        else if(round.p2 ==='Z'){
            if(round.p1 ==='A')
                return 'Y'
            if(round.p1 ==='B')
                return 'Z'
            if(round.p1 ==='C')
                return 'X'
        } else if(round.p2 ==='X'){
            if(round.p1 ==='A')
                return 'Z'
            if(round.p1 ==='B')
                return 'X'
            if(round.p1 ==='C')
                return 'Y'
        }
        return ''
    }

    const getRoundScore = (round: Round): number => {
        if(strategy === 2){
            round.p2 = chooseSelectedShape(round)
        }
        return selectedShapeScore(round.p2) + outcomeOfRoundScore(round)
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
