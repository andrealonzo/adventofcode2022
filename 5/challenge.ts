export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
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
    const parseStackInput = (input: string): any => {
        const stacksInput = input.split(/\n\n/)
        const stacksStr = stacksInput[0].split(/\n/)

        console.log("stacksStr", stacksStr)
        const stackNumbers = stacksStr.pop()
        console.log("stackNumbers", stackNumbers)
        const splitStackNumbers = stackNumbers.trim().split(/\s+/)
        const numStacks = splitStackNumbers.length

        console.log("splitStackNumbers", splitStackNumbers)


        let stacks = []
        stacks[0] = [stacksStr[0].charAt(1)]
        stacks[1] = [stacksStr[0].charAt(5)]
        stacks[2] = [stacksStr[0].charAt(9)]

        return stacks
    }


    const calculateAnswer1 = () => {
    };


    const calculateAnswer2 = () => {
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
        parseInput,
        parseStackInput
    }

}
