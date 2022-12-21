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

    function withinBounds(curCube: number[], maxBounds: number[], minBounds: number[]): boolean {
        let [x, y, z] = curCube
        let [bx, by, bz] = maxBounds
        let [minx, miny, minz] = minBounds
        return (x >= minx && x < bx) &&
            (y >= miny && y < by) &&
            (z >= minz && z < bz)
    }


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

    function outsideSurfaceArea(cube: number[], cubes: number[][], maxBounds: number[], minBounds: number[]) {
        let totalSurfaceArea = 0
        let curSeenCubes: number[][] = []
        let neighbors: number[][] = []
        neighbors.push(cube)
        while (neighbors.length > 0) {
            let curCube = neighbors.pop()
            let [x, y, z] = curCube

            //if out of bounds
            if (!withinBounds(curCube, maxBounds, minBounds)) {
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
        return totalSurfaceArea
    }

    function getMin(cubes: number[][]) {
        let min = 0
        for (const cube of cubes) {
            let [x, y, z] = cube
            if (x < min) {
                min = x
            }
            if (y < min) {
                min = y
            }
            if (z < min) {
                min = z
            }
        }
        return min
    }

    const calculateAnswer2 = () => {
        const cubes = parseInput(input)
        const startingCube: number[] = getOutsideCube(cubes)
        const maxBound = startingCube[0] + 1
        const maxBounds = [maxBound, maxBound, maxBound]
        const minBound = getMin(cubes) - 1
        const minBounds = [minBound, minBound, minBound]
        return outsideSurfaceArea(startingCube, cubes, maxBounds, minBounds)
    };

    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
