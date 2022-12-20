type coord = number []

interface Coord {
    r: number
    c: number
}

interface Shape {
    coords: Coord[],
    leftEdgeIndex: number,
    rightEdgeIndex: number,
    bottomEdgeIndex: number
    topEdgeIndex: number
}


export const createCalculator = (input: string): any => {
    //
    function printGrid(grid: Set<string>) {
        let str = ""
        for (let i = 50; i >= 0; i--) {
            for (let j = 0; j < 7; j++) {

                // console.log([i, j], grid.has(JSON.stringify([i, j])))
                if (grid.has(JSON.stringify([i, j]))) {
                    str += "#"
                } else {
                    str += "."

                }
            }
            str += "\n"
        }
        return str
    }


    const parseInput = (input: string): any => {
        return input.split("")
    }

    function getShape(num: number, row: number): number[][] {
        const colOffset = 2
        if (num === 0) {
            return [[row, 0 + colOffset], [row, 1 + colOffset], [row, 2 + colOffset], [row, 3 + colOffset]]
        } else if (num === 1) {
            return [[row + 1, 0 + colOffset], [row + 2, 1 + colOffset], [row + 1, 1 + colOffset], [row, 1 + colOffset], [row + 1, 2 + colOffset]]
        } else if (num === 2) {
            return [[row, 2], [row, 3], [row, 4], [row + 1, 4], [row + 2, 4]]
        } else if (num === 3) {
            return [[row, 2], [row + 1, 2], [row + 2, 2], [row + 3, 2]]
        } else if (num === 4) {
            return [[row, 2], [row, 3], [row + 1, 2], [row + 1, 3]]
        }
        return []
    }


    function moveRight(shape: number[][]) {
        return shape.map((coord) => [coord[0], coord[1] + 1])
    }

    function moveLeft(shape: number[][]) {
        return shape.map((coord) => [coord[0], coord[1] - 1])
    }

    function moveUp(shape: number[][]) {
        return shape.map((coord) => [coord[0] + 1, coord[1]])
    }

    function moveDown(shape: number[][]) {
        return shape.map((coord) => [coord[0] - 1, coord[1]])
    }


    function getMaxColumn(shape: number[][]) {
        return shape.reduce((prevMax, coord) => coord[1] > prevMax ? coord[1] : prevMax, 0)
    }

    function getMinColumn(shape: number[][]) {
        return shape.reduce((prevMin, coord) => coord[1] < prevMin ? coord[1] : prevMin, 100000)

    }

    function getMinRow(shape: number[][]) {
        return shape.reduce((prevMin, coord) => coord[0] < prevMin ? coord[0] : prevMin, 100000)

    }

    function getMaxRow(grid: Set<string>) {
        let max = 0
        grid.forEach((strCoord) => {
            let [r, c] = JSON.parse(strCoord)
            if (r > max) {
                max = r
            }
        })
        return max

        // return grid.reduce((prevMax, coord) => coord[0] > prevMax ? coord[0] : prevMax, 0)

    }

    function vec(shape: number[][]): Set<string> {
        let set: Set<string> = new Set()
        shape.forEach((coords) => {
            set.add(JSON.stringify(coords))
        })
        return set
    }

    function getIntersection(setA: Set<string>, setB: Set<string>) {
        const intersection = new Set(
            // @ts-ignore
            [...setA].filter(element => setB.has(element))
        );

        return intersection;
    }

    const calculateAnswer1 = (numRocks: number = 2022) => {
        const commands = parseInput(input)
        let numShape = 0
        let top = 0
        let shape = getShape(numShape % 4, top + 3)
        // console.log(shape)
        let grid: Set<string> = new Set()
        let j = 0
        while (true) {
            // for (let j = 0; j < commands.length; j++) {
            const command = commands[j % commands.length]
            j++
            if (command == ">") {
                shape = moveRight(shape)
                const maxC = getMaxColumn(shape)
                if (maxC > 6 || getIntersection(grid, vec(shape)).size > 0) {
                    shape = moveLeft(shape)
                }
            } else {
                shape = moveLeft(shape)
                const minC = getMinColumn(shape)
                if (minC < 0 || getIntersection(grid, vec(shape)).size > 0) {
                    shape = moveRight(shape)
                }
            }
            shape = moveDown(shape)
            const minRow = getMinRow(shape)

            // console.log("shape", shape)
            if (minRow < 0 || getIntersection(grid, vec(shape)).size > 0) {
                shape = moveUp(shape)
                shape.forEach((coord) => {
                    grid.add(JSON.stringify(coord))
                })
                // console.log("shape at rest", shape)
                numShape++
                top = getMaxRow(grid) + 1
                shape = getShape(numShape % 5, top + 3)
                // console.log(printGrid(grid))
                // console.log("top", top)
            }
            if (numShape === numRocks) {
                return top
            }
            // console.log(shape)
        }
        // console.log("top", top)
        return top

    };

    const calculateAnswer2 = () => {
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
