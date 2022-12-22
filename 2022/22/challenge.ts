export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {

        const [mapStr, instStr] = input.split(/\n\n/)
        const mapRowsStr = mapStr.split(/\n/)
        const solidWalls: Set<string> = new Set()
        const openTiles: Set<string> = new Set()
        for (let i = 0; i < mapRowsStr.length; i++) {
            const mapRowStr = mapRowsStr[i]
            for (let j = 0; j < mapRowStr.length; j++) {
                const char = mapRowStr.charAt(j)
                if (char == ".") {
                    openTiles.add(JSON.stringify([i, j]))
                } else if (char == "#") {
                    solidWalls.add(JSON.stringify([i, j]))
                }
            }
        }
        const start = [0, mapRowsStr[0].indexOf(".")]
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
        console.log(instructions)
        return [
            start,
            solidWalls,
            openTiles,
            instructions,
            mapRowsStr.length
        ]
    }

    function moveForward(curPos: number[], curDirection: number[], solidWalls: Set<string>, openTiles: Set<string>): number[] {
        let newPos = [curPos[0] + curDirection[0], curPos[1] + curDirection[1]]
        return newPos
    }

    function moveBackwards(curPos: number[], curDirection: number[], solidWalls: Set<string>, openTiles: Set<string>): number[] {
        let newPos = [curPos[0] - curDirection[0], curPos[1] - curDirection[1]]
        return newPos
    }

    function loopAround(curPos: number[], curDirection: number[], solidWalls: Set<string>, openTiles: Set<string>): number[] {
        //keep going backwards until you hit empty space again?
        // curPos = moveBackwards(curPos, curDirection, solidWalls, openTiles)
        while (solidWalls.has(JSON.stringify(curPos)) || openTiles.has(JSON.stringify(curPos))) {

            curPos = moveBackwards(curPos, curDirection, solidWalls, openTiles)
        }
        return moveForward(curPos, curDirection, solidWalls, openTiles)
    }

    const calculateAnswer1 = () => {
            const [start, solidWalls, openTiles, instructions, numRows] = parseInput(input)
            let curPos = start
            const right = [0, 1]
            const left = [0, -1]
            const up = [-1, 0]
            const down = [1, 0]
            let curDirection = right
            instructions.forEach((instruction: string) => {
                console.log("instruction", instruction, "curPos", curPos)
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
                } else {
                    const numMoves = parseInt(instruction)
                    for (let i = 0; i < numMoves; i++) {
                        curPos = moveForward(curPos, curDirection, solidWalls, openTiles )
                        //if hit wall, move backwards
                        if (solidWalls.has(JSON.stringify(curPos))) {
                            curPos = moveBackwards(curPos, curDirection,  solidWalls, openTiles)
                            continue
                        }
                        else if (!solidWalls.has(JSON.stringify(curPos)) && !openTiles.has(JSON.stringify(curPos))) {
                            console.log("out of bounds")
                            curPos = moveBackwards(curPos, curDirection,  solidWalls, openTiles)
                            const loopAroundPos = loopAround(curPos, curDirection, solidWalls, openTiles)
                            if(!solidWalls.has(JSON.stringify(curPos))){

                                curPos = loopAroundPos
                            }
                            console.log("curPos after looparound", curPos)
                            //if out of bounds,circle around

                        }
                    }
                }
            })
            console.log("final Position", curPos)
            let facingScore = 0
            if (curDirection == down) {
                facingScore = 1
            } else if (curDirection == left) {
                facingScore = 2
            } else if (curDirection == up) {
                facingScore = 3
            }

         const row = curPos[0] + 1
            // const row = numRows -curPos[0]
            const col = curPos[1]+1
            const answer = (1000 * row)+ (4 * col) + facingScore
        console.log("final Position", row, col, facingScore, curDirection)

        console.log("final answer", answer)
        return answer
            // return 6032
        }
    ;


    const calculateAnswer2 = () => {
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
