interface Coord {
    r: number,
    c: number
}

export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
        return input.split(/\n/).map((line) => line.split(""))
    }


    function find(s: string, grid: string[][]) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === s)
                    return {r: i, c: j}
            }
        }
        return {r: 0, c: 0}
    }

    function markVisited(curNode: Coord, visitedCoords: boolean[][]) {
        visitedCoords[curNode.r][curNode.c] = true
        return visitedCoords;
    }

    function getNeighbors(node: Coord, rowMax: number, colMax: number): Coord[] {
        const possibleNeighbors = [
            {
                r: node.r + 1,
                c: node.c
            }, {
                r: node.r - 1,
                c: node.c
            }, {
                r: node.r,
                c: node.c + 1
            }, {
                r: node.r,
                c: node.c - 1
            },
        ]
        const neighborsInBounds = possibleNeighbors.filter((neighbor) => neighbor.r >= 0 && neighbor.r < rowMax && neighbor.c >= 0 && neighbor.c < colMax)
        return neighborsInBounds
    }

    function getNumber(char: string) {
        if (char === "S") {
            char = "a"
        }
        if (char === "E") {
            char = "z"
        }
        return char.charCodeAt(0) - 97
    }

    function recordDistances(targetNode: Coord, neighborCoords: Coord[], grid: any, nodeDistances: number[][]) {

        neighborCoords.forEach((neighborCoord) => {
            const targetNodeValue = grid[targetNode.r][targetNode.c]
            const neighborCoordValue = grid[neighborCoord.r][neighborCoord.c]
            let neighborDistance
            let targetNodeDistance = nodeDistances[targetNode.r][targetNode.c]
            const targetNodeNum = getNumber(targetNodeValue)
            const neighborNodeNum = getNumber(neighborCoordValue)
            if (targetNodeNum + 1 >= neighborNodeNum) {
                neighborDistance = 1 + targetNodeDistance
            }
            //@ts-ignore
            if (neighborDistance < nodeDistances[neighborCoord.r][neighborCoord.c]) {

                //@ts-ignore
                nodeDistances[neighborCoord.r][neighborCoord.c] = neighborDistance
            }
        })
        return nodeDistances

    }

    function findMinUnvisitedNode(visitedCoords: boolean[][], nodeDistances: number[][]) {
        let currentMinNode = {
            r: 0,
            c: 0
        }
        let currentMinDistance = 10000000000000000
        for (let i = 0; i < visitedCoords.length; i++) {
            for (let j = 0; j < visitedCoords[i].length; j++) {
                if (!visitedCoords[i][j]) {
                    if (nodeDistances[i][j] < currentMinDistance) {
                        currentMinDistance = nodeDistances[i][j]
                        currentMinNode = {
                            r: i,
                            c: j
                        }
                    }
                }
            }
        }
        return currentMinNode;
    }

    function unvisitedCoordsLeft(visitedCoords: boolean[][]) {
        for (let i = 0; i < visitedCoords.length; i++) {
            for (let j = 0; j < visitedCoords[i].length; j++) {
                if (!visitedCoords[i][j]) {
                    return true
                }
            }
        }
        return false;
    }

    function shortestDistance(startCoord: Coord, grid:string[][]) {
        const endCoord: Coord = find("E", grid)
        let visitedCoords: boolean[][] = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));
        let nodeDistances: number[][] = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(100000000000));
        let curNode = startCoord
        while (unvisitedCoordsLeft(visitedCoords)) {
            nodeDistances[startCoord.r][startCoord.c] = 0
            visitedCoords = markVisited(curNode, visitedCoords)
            const neighborCoords: Coord[] = getNeighbors(curNode, grid.length, grid[0].length)
            nodeDistances = recordDistances(curNode, neighborCoords, grid, nodeDistances)
            curNode = findMinUnvisitedNode(visitedCoords, nodeDistances)
        }
        return nodeDistances[endCoord.r][endCoord.c]
    }

    const calculateAnswer1 = () => {
        const grid = parseInput(input)
        const startCoord: Coord = find("S", grid)
        return shortestDistance(startCoord, grid)
    };

//@ts-ignore
    function findStartCoords(grid) {
        const coords = []
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "a" || grid[i][j] === "S")
                    coords.push({r: i, c: j})
            }
        }
        return coords
    }
    const calculateAnswer2 = () => {
        const grid = parseInput(input)
        const startingCoords = findStartCoords(grid);
        const distances:number[] = []
        startingCoords.forEach((coord) => {
            const distance =shortestDistance(coord, grid)
            distances.push(distance)
        })
        return distances.reduce((prev, cur) => prev < cur ? prev : cur,1000000)
    };

    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
