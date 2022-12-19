const v8 = require('v8');
v8.setFlagsFromString('--stack-size=412');

export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
        return input.split('\n')
            .map((line) => line.split(',').map(Number))
    }

    function exists(cube: number[], cubes: number[][]) {
        let [x, y, z] = cube
        for (let [tx, ty, tz] of cubes) {
            if (x === tx && y === ty && z === tz) {
                return true
            }
        }
        return false;

    }

    const calculateAnswer1 = () => {
        const cubes = parseInput(input)
        let sufArea = 0
        for (let cube of cubes) {
            let [x, y, z] = cube
            if (!exists([x + 1, y, z], cubes)) {
                sufArea++
            }
            if (!exists([x - 1, y, z], cubes)) {
                sufArea++
            }
            if (!exists([x, y + 1, z], cubes)) {
                sufArea++
            }
            if (!exists([x, y - 1, z], cubes)) {
                sufArea++
            }
            if (!exists([x, y, z + 1], cubes)) {
                sufArea++
            }
            if (!exists([x, y, z - 1], cubes)) {
                sufArea++
            }
        }
        return sufArea
    }


    function withinBounds(curCube: number[]): boolean {
        let [x, y, z] = curCube
        let [bx, by, bz] = bounds
        return (x >= 0 && x < bx) &&
            (y >= 0 && y < by) &&
            (z >= 0 && z < bz)
    }

    let curSeenCubes: number[][] = []
    let cubes: number[][] = []
    let bounds: number[] = []
    let neighbors: number[][] = []
    let totalSurfaceArea = 0

    function getOutsideCube(cubes: number[][]) {
        let max = 0
        for (const cube of cubes) {
            let [x, y, z] = cube
            if (x > max) {
                max = x
            }
            if (y > max) {
                max = y
            }
            if (z > max) {
                max = z
            }
        }

        return [max + 1, max + 1, max + 1]
    }

    function floodFill(cube: number[]) {
        neighbors.push(cube)
        while (neighbors.length > 0) {
            let curCube = neighbors.pop()

            //@ts-ignore
            let [x, y, z] = curCube

            //if out of bounds
            //@ts-ignore
            if (!withinBounds(curCube)) {
                continue
            }
            //if inside lava droplet
            if (exists([x, y, z], cubes)) {
                totalSurfaceArea++
                continue
            }
            //if already seen
            if (exists([x, y, z], curSeenCubes)) {
                continue
            }
            //@ts-ignore
            curSeenCubes.push(curCube)
            neighbors.push(
                [x + 1, y, z],
                [x - 1, y, z],
                [x, y + 1, z],
                [x, y - 1, z],
                [x, y, z + 1],
                [x, y, z - 1]
            )
        }
    }

    const calculateAnswer2 = () => {
        cubes = parseInput(input)
        const outsideCube: number[] = getOutsideCube(cubes)
        const bound = outsideCube[0] + 2
        bounds = [bound, bound, bound]
        floodFill(outsideCube)
        return totalSurfaceArea
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
