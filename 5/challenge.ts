interface Move {
    amount: number,
    from: number,
    to: number
}

interface Input {
    moves: Move[],
    stacks: string[][]
}

export const createCalculator = (inputStr: string): any => {

    const parseInput = (inputStr: string): any => {
        const input = {
            moves: parseMoveInput(inputStr),
            stacks: parseStackInput(inputStr)
        }
        return input

    }

    const parseMoveInput = (input: string): any => {
        const movesInput = input.split(/\n\n/)
        const movesStr = movesInput[1].split(/\n/)
        const moves = movesStr.map((moveStr) => {
            const moveStrArr = moveStr.split(" ")
            const move = {
                amount: parseInt(moveStrArr[1]),
                from: parseInt(moveStrArr[3]),
                to: parseInt(moveStrArr[5])
            }
            return move
        })
        return moves
    }
    const parseStackInput = (input: string): string[][] => {
        const stacksInput = input.split(/\n\n/)
        const stacksStr = stacksInput[0].split(/\n/)
        const stackNumbers = stacksStr.pop() || ""
        const splitStackNumbers = stackNumbers.trim().split(/\s+/)
        const numStacks = splitStackNumbers.length

        const stacks: any[] = [];
        for (let i = 0; i < numStacks; i++) {
            stacks[i] = []
        }

        for (let i = 0; i < stacksStr.length; i++) {
            for (let j = 0; j < numStacks; j++) {
                const char = stacksStr[i].charAt((j * 4) + 1)
                if (char !== " ") {
                    stacks[j].unshift(char)
                }
            }
        }
        return stacks
    }

    function getStackLetters(stacks: string[][]) {
        return stacks.map((stack) => stack[stack.length - 1]).join("")
    }

    const calculateAnswer1 = () => {
        const input:Input = parseInput(inputStr)

        console.log("stacks before", input.stacks)
        input.moves.forEach((move)=>{
            console.log("move",move)
            for (let i = 0; i < move.amount; i++) {
                const crateToMove = input.stacks[move.from-1].pop()
                if(crateToMove){
                    input.stacks[move.to-1].push(crateToMove)
                }

            }
        })

        console.log("stacks after", input.stacks)

        const stackLetters = getStackLetters(input.stacks);
        return stackLetters
    };


    const calculateAnswer2 = () => {
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
        parseMoveInput,
        parseStackInput
    }

}
