type coord = number []

export const createCalculator = (input: string): any => {
    function printGrid(grid: any) {
        let str = ""
        for (let i = grid.length - 1; i >= 0; i--) {
            for (let j = 0; j < grid[i].length; j++) {
                str += grid[i][j]
            }
            str += "\n"
        }
        return str
    }

    function matrix(rows, cols, defaultValue) {
        return Array.from(Array(rows),
            row => Array.from(Array(cols), cell => defaultValue)
        );
    }

    const parseInput = (input: string): any => {
        return input.split("")
    }

    function doMove(shapeLoc: number[][], move: number[]) {
        const newShapeLoc = shapeLoc.map((coord) => [coord[0] + move[0], coord[1] + move[1]])
        if (newShapeLoc[0][1] < 0) {
            return shapeLoc.slice()
        } else if (newShapeLoc[3][1] > 7) {
            return shapeLoc.slice()
        } else if (newShapeLoc[0][0] < 0) {
            return shapeLoc
        }
        return newShapeLoc
    }

    function getMove(command: string) {
        const right = [0, 1]
        const left = [0, -1]
        if (command === ">") {
            return right
        }
        return left

    }


    function getHeight(grid: number[][]) {
        for (let i = grid.length-1; i >= 0; i--) {
            const row = grid[i]
            if (row.filter((c) => c === 1).length > 0) {
                return i + 1
            }

        }


        return 0;
    }

    function newShape() {
        let shapeLoc = [[0, 0], [0, 1], [0, 2], [0, 3]]
        const right = [0, 1]
        const down = [-1, 0]
        const up = [1, 0]
        shapeLoc = doMove(shapeLoc, right)
        shapeLoc = doMove(shapeLoc, right)
        shapeLoc = doMove(shapeLoc, up)
        shapeLoc = doMove(shapeLoc, up)
        shapeLoc = doMove(shapeLoc, up)
        return shapeLoc
    }

    const calculateAnswer1 = (numRocks: number = 2022) => {
        const commands = parseInput(input)
        const right = [0, 1]
        const down = [-1, 0]
        const up = [1, 0]
        let shapeLoc =newShape()
        console.log(shapeLoc)
        // for (let i = 0; i <commands.length; i++) {
        let atRest = false
        const grid: number[][] = matrix(6, 7, 0)
        for (let i = 0; i < 6; i++) {
            const command = commands[i]
            const move = getMove(command)
            shapeLoc = doMove(shapeLoc, move)
            const newShapeLoc = doMove(shapeLoc, down)
            // if it didn't go down
            console.log(shapeLoc)
            if (shapeLoc[0][0] === newShapeLoc[0][0]) {
                atRest = true
            }
            shapeLoc = newShapeLoc
            if (atRest) {
                grid[shapeLoc[0][0]][shapeLoc[0][1]] = 1
                grid[shapeLoc[1][0]][shapeLoc[1][1]] = 1
                grid[shapeLoc[2][0]][shapeLoc[2][1]] = 1
                grid[shapeLoc[3][0]][shapeLoc[3][1]] = 1
                shapeLoc = newShape()
                break
            }
        }
        // grid[5][1] = 4
        console.log(printGrid(grid))
        return getHeight(grid)


    };


    const calculateAnswer2 = () => {
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
