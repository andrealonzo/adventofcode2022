export const createCalculator = (input: string): any => {
    const parseInput = (input: string): { instructions: string[], map: string[][] } => {
        const [mapStr, instStr] = input.split(/\n\n/)
        let map: string[][] = mapStr.split(/\n/).map((row) => row.split(""))
        let instructions = []
        let curNum = ""
        let char = ""
        for (let i = 0; i < instStr.length; i++) {
            char = instStr.charAt(i)
            if (char == "L" || char == "R") {
                instructions.push(curNum)
                instructions.push(char)
                curNum = ""
            } else {
                curNum += char
            }
        }
        instructions.push(char)
        return {
            instructions,
            map,
        }
    }

    function moveForward(curPos: { r: number, c: number }, curDirection: number[]): { r: number, c: number } {
        return {r: curPos.r + curDirection[0], c: curPos.c + curDirection[1]}
    }

    function moveBackwards(curPos: { r: number, c: number }, curDirection: number[]): { r: number, c: number } {
        return {r: curPos.r - curDirection[0], c: curPos.c - curDirection[1]}
    }


    function loopAround(curPos: { r: number, c: number }, curDirection: number[], map: string[][]): { r: number, c: number } {
        //keep going backwards until you hit empty space again
        while ((map[curPos.r] !== undefined && map[curPos.r][curPos.c] !== undefined) && map[curPos.r][curPos.c] !== " ") {
            curPos = moveBackwards(curPos, curDirection)
        }
        return moveForward(curPos, curDirection)
    }

    function getStartingPos(curPos: { r: number; c: number }, map: string[][]) {
        while (map[0][curPos.c] == " ") {
            curPos.c = curPos.c + 1
        }
        return curPos
    }

    const right = [0, 1]
    const left = [0, -1]
    const up = [-1, 0]
    const down = [1, 0]

    function getNewDirection(curDirection: number[], instruction: string): number[] {

        if (instruction == "L") {
            if (curDirection == right) {
                curDirection = up
            } else if (curDirection == up) {
                curDirection = left
            } else if (curDirection == left) {
                curDirection = down
            } else if (curDirection == down) {
                curDirection = right
            }
        } else if (instruction == "R") {
            if (curDirection == right) {
                curDirection = down
            } else if (curDirection == down) {
                curDirection = left
            } else if (curDirection == left) {
                curDirection = up
            } else if (curDirection == up) {
                curDirection = right
            }
        }
        return curDirection;
    }

    const calculateAnswer1 = () => {

        const {instructions, map} = parseInput(input)
        let curDirection = right
        let curPos = {
            r: 0,
            c: 0
        }
        curPos = getStartingPos(curPos, map)

        instructions.forEach((instruction: string) => {
            if (instruction == "L" || instruction == "R") {
                curDirection = getNewDirection(curDirection, instruction)
            } else {
                const numMoves = parseInt(instruction)
                for (let i = 0; i < numMoves; i++) {
                    curPos = moveForward(curPos, curDirection)
                    if (map[curPos.r] == undefined || map[curPos.r][curPos.c] == undefined || map[curPos.r][curPos.c] == " ") {
                        curPos = moveBackwards(curPos, curDirection)
                        const loopAroundPos = loopAround(curPos, curDirection, map)
                        if (map[loopAroundPos.r][loopAroundPos.c] !== "#") {
                            curPos = loopAroundPos
                        }
                    } else if (map[curPos.r][curPos.c] === "#") {
                        curPos = moveBackwards(curPos, curDirection)
                    }
                }
            }
        })
        let facingScore = 0
        if (curDirection == down) {
            facingScore = 1
        } else if (curDirection == left) {
            facingScore = 2
        } else if (curDirection == up) {
            facingScore = 3
        }
        const row = curPos.r + 1
        const col = curPos.c + 1
        return (1000 * row) + (4 * col) + facingScore
    }

    const calculateAnswer2 = () => {
    };

    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
