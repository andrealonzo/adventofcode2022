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
    function printGrid(grid: Set<number[]>) {
        let str = ""
        for (let i = 10; i >= 0; i--) {
            for (let j = 0; j < 7; j++) {
                console.log([i,j], grid.has([i,j]))
                if(grid.has([i,j])){
                    str += "#"
                }else{
                    str += "."

                }
            }
            str += "\n"
        }
        return str
    }
    //
    // function matrix(rows, cols, defaultValue) {
    //     return Array.from(Array(rows),
    //         row => Array.from(Array(cols), cell => defaultValue)
    //     );
    // }
    //
    const parseInput = (input: string): any => {
        return input.split("")
    }
    //
    // function doMove(shape: Shape, move: number[], bottom1: number, bottom:Coord[]): Shape {
    //     // let shapeLoc = shape.coords.slice()
    //     const newShapeLoc = shape.coords.map((coord) => {
    //         return {r: coord.r + move[0], c: coord.c + move[1]}
    //     })
    //     const right = 7 - 1
    //     const left = 0
    //     // const bottom = 0
    //
    //     if (newShapeLoc[shape.leftEdgeIndex].c < left) {
    //         return shape
    //     } else if (newShapeLoc[shape.rightEdgeIndex].c > right) {
    //         return shape
    //     } else if (newShapeLoc[shape.bottomEdgeIndex].r < bottom1) {
    //         return shape
    //     }
    //     // shape.coords = newShapeLoc
    //     return {
    //         ...shape,
    //         coords: newShapeLoc
    //     }
    // }
    //
    // function getMove(command: string) {
    //     const right = [0, 1]
    //     const left = [0, -1]
    //     if (command === ">") {
    //         return right
    //     }
    //     return left
    //
    // }
    //
    //
    // function getHeight(grid: number[][]) {
    //     for (let i = grid.length - 1; i >= 0; i--) {
    //         const row = grid[i]
    //         if (row.filter((c) => c === 1).length > 0) {
    //             return i + 1
    //         }
    //
    //     }
    //
    //
    //     return 0;
    // }
    //
    // function createShape(bottom): Shape {
    //
    //
    //     // letsha
    //     // let shapeLoc = [[bottom, 0], [bottom, 1], [bottom, 2], [bottom, 3]]
    //     // let shape: Shape = {
    //     //     coords: [{r: bottom, c: 0}, {r: bottom, c: 1}, {r: bottom, c: 2}, {r: bottom, c: 3}],
    //     //     leftEdgeIndex: 0,
    //     //     rightEdgeIndex: 3,
    //     //     bottomEdgeIndex: 0,
    //     //     topEdgeIndex: 0
    //     // }
    //     let shape: Shape = {
    //         coords: [{r: bottom + 1, c: 0}, {r: bottom + 2, c: 1}, {r: bottom, c: 1}, {r: bottom + 1, c: 2}],
    //         leftEdgeIndex: 0,
    //         rightEdgeIndex: 3,
    //         bottomEdgeIndex: 2,
    //         topEdgeIndex: 1
    //     }
    //     const right = [0, 1]
    //     const down = [-1, 0]
    //     const up = [1, 0]
    //
    //     shape = doMove(shape, right, bottom)
    //     shape = doMove(shape, right, bottom)
    //     shape = doMove(shape, up, bottom)
    //     shape = doMove(shape, up, bottom)
    //     shape = doMove(shape, up, bottom)
    //     return shape
    // }
    //
    // const calculateAnswer1 = (numRocks: number = 2022) => {
    //     const commands = parseInput(input)
    //     const right = [0, 1]
    //     const down = [-1, 0]
    //     const up = [1, 0]
    //     let curBottomOld = 0
    //     let curBottom = new Array(7).fill(0)
    //     let curShape = createShape(curBottomOld)
    //     // console.log(shapeLoc)
    //     // for (let i = 0; i <commands.length; i++) {
    //     let atRest = false
    //     const grid: number[][] = matrix(6, 7, 0)
    //     for (let i = 0; i < 8; i++) {
    //         // console.log(command,move,shapeLoc)
    //         const command = commands[i]
    //         const move = getMove(command)
    //         curShape = doMove(curShape, move, curBottom)
    //         const newShape = doMove(curShape, down, curBottom)
    //         // if it didn't go down
    //         // console.log(shapeLoc)
    //         if (curShape.coords[0].r === newShape.coords[0].r) {
    //             atRest = true
    //         }
    //         curShape = newShape
    //         // console.log(command,move,shapeLoc)
    //         console.log("shapeLoc", curShape)
    //         if (atRest) {
    //             for (let j = 0; j < curShape.coords.length; j++) {
    //                 grid[curShape.coords[j].r][curShape.coords[j].c] = 1
    //             }
    //             curBottomOld = curShape.coords[curShape.topEdgeIndex].r + 1
    //
    //             curBottom = curBottom.map((coord,index)=>{
    //                 const topEdgeCoord = curShape.coords[curShape.topEdgeIndex]
    //                 return Math.max(curBottom[topEdgeCoord.c],topEdgeCoord.r)
    //             })
    //             curShape = createShape(curBottomOld)
    //             atRest = false
    //             // break
    //         }
    //     }
    //     // grid[5][1] = 4
    //     console.log(printGrid(grid))
    //     return 1
    //     return getHeight(grid)
    //
    //
    // };

    function getShape(num: number, row): Set<number[]> {
        if (num === 0) {
            return new Set([[row, 2], [row, 3], [row, 4], [row, 5]])
        } else if (num === 1) {
            return new Set([[row + 1, 2], [row + 2, 3], [row + 1, 3], [row, 3], [row + 1, 4]])
        } else if (num === 2) {
            return new Set([[row, 2], [row, 3], [row, 4], [row + 1, 4], [row + 2, 4]])
        } else if (num === 3) {
            return new Set([[row, 2], [row + 1, 2], [row + 2, 2], [row + 3, 2]])
        } else if (num === 4) {
            return new Set([[row, 2], [row, 3], [row + 1, 2], [row + 1, 3]])
        }
        return new Set()

    }


    function moveRight(shape: Set<number[]>) {
        return new Set(Array.from(shape).map((coord) => [coord[0], coord[1] + 1]))
    }

    function moveLeft(shape: Set<number[]>) {
        return new Set(Array.from(shape).map((coord) => [coord[0], coord[1] - 1]))
    }

    function moveUp(shape: Set<number[]>) {
        return new Set(Array.from(shape).map((coord) => [coord[0] + 1, coord[1]]))
    }

    function moveDown(shape: Set<number[]>) {
        return new Set(Array.from(shape).map((coord) => [coord[0] - 1, coord[1]]))
    }


    function getMaxColumn(shape: Set<number[]>) {
        return Array.from(shape).reduce((prevMax, coord) => coord[1] > prevMax ? coord[1] : prevMax, 0)
    }

    function getMinColumn(shape: Set<number[]>) {
        return Array.from(shape).reduce((prevMin, coord) => coord[1] < prevMin ? coord[1] : prevMin, 100000)

    }

    function getMinRow(shape: Set<number[]>) {
        return Array.from(shape).reduce((prevMin, coord) => coord[0] < prevMin ? coord[0] : prevMin, 100000)

    }

    function getMaxRow(shape: Set<number[]>) {
        return Array.from(shape).reduce((prevMax, coord) => coord[0] > prevMax ? coord[0] : prevMax, 0)

    }

    const calculateAnswer1 = (numRocks: number = 2022) => {
        const commands = parseInput(input)
        let numShape = 0
        let top = 0
        let shape = getShape(numShape % 4, top + 3)
        // console.log(shape)
        let grid: Set<number[]> = new Set()
        for (let j = 0; j < commands.length; j++) {
            const command = commands[j]
            if (command == ">") {
                shape = moveRight(shape)
                const maxC = getMaxColumn(shape)
                if (maxC > 6) {
                    shape = moveLeft(shape)
                }
            } else {
                shape = moveLeft(shape)
                const minC = getMinColumn(shape)
                if (minC < 0) {
                    shape = moveRight(shape)
                }
            }
            shape = moveDown(shape)
            const minRow = getMinRow(shape)
            //@ts-ignore
            let intersection = new Set([...grid].filter(x => shape.has(x)));
            if (minRow < 0 || intersection.size > 0) {
                shape = moveUp(shape)
                shape.forEach(grid.add, grid)
                console.log("shape at rest", shape)
                numShape++
                shape = getShape(numShape % 4, top + 3)
                top = getMaxRow(grid) + 1
                console.log("grid", printGrid(grid))
                console.log("top",top)
            }
            if(numShape===2022){
                return numShape
            }
            // console.log(shape)
        }
        return 1

    };

    const calculateAnswer2 = () => {
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
