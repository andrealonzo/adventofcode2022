export const createCalculator = (input: string): any => {
    function printGrid(grid: any) {
        let str = ""
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                str += grid[i][j]
            }
            str += "\n"
        }
        return str
    }

    function getMaxCol(commands: number[][][]) {
        let max = 0
        for (let i = 0; i < commands.length; i++) {
            for (let j = 0; j < commands[i].length; j++) {
                if (commands[i][j][0] > max)
                    max = commands[i][j][0]
            }
        }
        return max + 1


    }

    function getMaxRow(commands: number[][][]) {
        let max = 0
        for (let i = 0; i < commands.length; i++) {
            for (let j = 0; j < commands[i].length; j++) {

                if (commands[i][j][1] > max)
                    max = commands[i][j][1]

            }
        }
        return max + 2
    }

    function fillGrid(commands: number[][][], grid: any[]) {
        for (let i = 0; i < commands.length; i++) {
            for (let j = 1; j < commands[i].length; j++) {
                const start = commands[i][j - 1]
                const end = commands[i][j]
                if (start[0] == end[0]) {
                    const r = start[0]
                    const startC = start[1] < end[1] ? start[1] : end[1]
                    const endC = start[1] > end[1] ? start[1] : end[1]
                    for (let k = startC; k <= endC; k++) {
                        grid[k][r] = "#"
                    }
                } else {
                    const c = start[1]
                    const startR = start[0] < end[0] ? start[0] : end[0]
                    const endR = start[0] > end[0] ? start[0] : end[0]
                    for (let k = startR; k <= endR; k++) {
                        grid[c][k] = "#"
                    }
                }
            }
        }
        return grid
    }

    const parseInput = (input: string): any => {
        const commands = input.split(/\n/).map((line) => line.trim().split(" -> ").map((coord) => coord.split(",").map(Number)))
        const colSize = getMaxCol(commands)
        const rowSize = getMaxRow(commands)
        let grid = new Array(rowSize)
        for (let i = 0; i < rowSize; i++) {
            grid[i] = new Array(colSize).fill(".");
        }
        return fillGrid(commands, grid);
    }
    const parseInput2 = (input: string): any => {
        const commands: number[][][] = input.split(/\n/).map((line) => line.trim().split(" -> ").map((coord) => coord.split(",").map(Number)))
        const colSize = getMaxCol(commands) * 2
        const rowSize = getMaxRow(commands)
        commands.push([[0, rowSize], [colSize, rowSize]])

        let grid = new Array(rowSize + 2)
        for (let i = 0; i < rowSize + 2; i++) {
            grid[i] = new Array(colSize).fill(".");
        }

        return fillGrid(commands, grid);
    }

    function notAtRest(sand: number[], grid: string[][]) {
        return grid[sand[0] + 1][sand[1] - 1] === "." ||
            grid[sand[0] + 1][sand[1]] === "." ||
            grid[sand[0] + 1][sand[1] + 1] === "."

    }

    function continueFall(sand: number[], grid: string[][]) {
        let newSand
        // console.log("sand",sand)
        if (grid[sand[0] + 1][sand[1] - 1] === "o" &&
            grid[sand[0] + 1][sand[1]] === "o" &&
            grid[sand[0] + 1][sand[1] + 1] === "o") {
            grid[sand[0]][sand[1]] = "o"
            return sand
        }
        grid[sand[0]][sand[1]] = "."
        if (grid[sand[0] + 1][sand[1]] === ".") {
            grid[sand[0] + 1][sand[1]] = "o"
            newSand = [sand[0] + 1, sand[1]]
        } else if (grid[sand[0] + 1][sand[1] - 1] === ".") {
            grid[sand[0] + 1][sand[1] - 1] = "o"
            newSand = [sand[0] + 1, sand[1] - 1]
        } else {
            grid[sand[0] + 1][sand[1] + 1] = "o"
            newSand = [sand[0] + 1, sand[1] + 1]
        }
        return newSand
    }

    function startSand(grid: string[][]) {
        let sand = [0, 500]
        grid[sand[0]][sand[1]] = "o"
        let numSand = 0
        try {

            while (true) {
                while (notAtRest(sand, grid)) {
                    sand = continueFall(sand, grid)
                }

                sand = [0, 500]
                numSand++
            }

        } catch (err) {
            return numSand
        }
    }

    function startSand2(grid: string[][]) {
        let sand = [0, 500]
        grid[sand[0]][sand[1]] = "o"
        let numSand = 0
        while (true) {
            while (notAtRest(sand, grid)) {
                sand = continueFall(sand, grid)
            }
            if (grid[0][500] === "o") {
                return numSand
            }
            sand = [0, 500]
            grid[sand[0]][sand[1]] = "o"
            numSand++
        }
    }

    const calculateAnswer1 = () => {
        let grid = parseInput(input)
        return startSand(grid)
    };


    const calculateAnswer2 = () => {
        let grid = parseInput2(input)
        return startSand2(grid) + 1
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
