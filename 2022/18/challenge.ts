export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
        return input.split('\n')
            .map((line) => line.split(',').map(Number))
    }

    function exists(cube: number[], cubes: number[][]) {
        let [x, y, z] = cube
        // console.log("cube", x, y, z)
        for (let [tx, ty, tz] of cubes) {

            // console.log(tx,ty,tz)
            if (x === tx && y === ty && z === tz) {
                // console.log("true")
                return true
            }
        }
        // console.log("false")
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


    function withinBounds(curCube: number[], bounds) {
        let [x, y, z] = curCube
        let [bx, by, bz] = bounds
        return (x >= 0 && x < bx) &&
            (y >= 0 && y < by) &&
            (z >= 0 && z < bz)
    }

    function surfaceArea(curSurfaceArea: number, curCube: number[], cubes: number[][], curSeenCubes: number[][], bounds: number[]): { sufArea, seenCubes } {
        let [x, y, z] = curCube
        console.log(curCube)
        if (x === 3 && y === 2 && z === 2) {
            console.log("322 hit")
        }
        // let sufArea = 0

        if (exists([x, y, z], curSeenCubes)) {
            return {sufArea: 0, seenCubes: curSeenCubes}
        }
        curSeenCubes.push(curCube)
        if (!withinBounds(curCube, bounds)) {
            return {sufArea: 0, seenCubes: curSeenCubes}
        }
        if (exists([x, y, z], cubes)) {
            return {sufArea: 1, seenCubes: curSeenCubes}
        }
        let output = surfaceArea(curSurfaceArea, [x + 1, y, z], cubes, curSeenCubes, bounds)
        // curSeenCubes.push(output.seenCubes)
        curSurfaceArea = curSurfaceArea + output.sufArea

        output = surfaceArea(curSurfaceArea, [x - 1, y, z], cubes, curSeenCubes, bounds)
        // curSeenCubes.push(output.seenCubes)
        curSurfaceArea = curSurfaceArea + output.sufArea

        // output = surfaceArea(curSurfaceArea, [x, y + 1, z], cubes, curSeenCubes, bounds)
        // // curSeenCubes.push(output.seenCubes)
        // curSurfaceArea = curSurfaceArea + output.sufArea
        //
        // output = surfaceArea(curSurfaceArea, [x, y - 1, z], cubes, curSeenCubes, bounds)
        // // curSeenCubes.push(output.seenCubes)
        // curSurfaceArea = curSurfaceArea + output.sufArea
        //
        // output = surfaceArea(curSurfaceArea, [x, y, z + 1], cubes, curSeenCubes, bounds)
        // // curSeenCubes.push(output.seenCubes)
        // curSurfaceArea = curSurfaceArea + output.sufArea
        //
        // output = surfaceArea(curSurfaceArea, [x, y, z - 1], cubes, curSeenCubes, bounds)
        // // curSeenCubes.push(output.seenCubes)
        // curSurfaceArea = curSurfaceArea + output.sufArea


        // if (exists([x + 1, y, z], cubes)) {
        //     sufArea++
        // } else {
        //
        //     sufArea += surfaceArea(sufArea, [x + 1, y, z], cubes, curSeenCubes, bounds)
        //     curSeenCubes.push([x + 1, y, z])
        // }
        //
        // if (exists([x - 1, y, z], cubes)) {
        //     sufArea++
        // } else {
        //     sufArea += surfaceArea(sufArea, [x - 1, y, z], cubes, curSeenCubes, bounds)
        //     curSeenCubes.push([x - 1, y, z])
        // }
        //
        // if (exists([x, y + 1, z], cubes)) {
        //     sufArea++
        // } else {
        //     sufArea += surfaceArea(sufArea, [x, y + 1, z], cubes, curSeenCubes, bounds)
        //     curSeenCubes.push([x, y + 1, z])
        // }
        //
        // if (exists([x, y - 1, z], cubes)) {
        //     sufArea++
        // } else {
        //     sufArea += surfaceArea(sufArea, [x, y - 1, z], cubes, curSeenCubes, bounds)
        //     curSeenCubes.push([x, y - 1, z])
        // }
        //
        //
        // if (exists([x, y, z + 1], cubes)) {
        //     sufArea++
        // } else {
        //     sufArea += surfaceArea(sufArea, [x, y, z + 1], cubes, curSeenCubes, bounds)
        //     curSeenCubes.push([x, y, z + 1])
        // }
        //
        // if (exists([x, y, z - 1], cubes)) {
        //     sufArea++
        // } else {
        //     sufArea += surfaceArea(sufArea, [x, y, z - 1], cubes, curSeenCubes, bounds)
        //     curSeenCubes.push([x, y, z - 1])
        // }
        // if(exists([x + 1, y, z], cubes)){
        //     sufArea++
        // }else{
        //     sufArea += surfaceArea(sufArea, [x - 1, y, z], cubes, seenCubes, bounds)
        // }
        return {sufArea: curSurfaceArea, seenCubes: curSeenCubes}
        // if (!exists([x + 1, y, z], seenCubes)) {
        //     seenCubes.push([x + 1, y, z])
        //     sufArea += surfaceArea([x + 1, y, z], cubes, seenCubes, bounds)
        // }
        // if (!exists([x - 1, y, z], cubes)) {
        //     sufArea++
        // }
        // if (!exists([x, y + 1, z], cubes)) {
        //     sufArea++hh
        // }
        // if (!exists([x, y - 1, z], cubes)) {
        //     sufArea++
        // }
        // if (!exists([x, y, z + 1], cubes)) {
        //     sufArea++
        // }
        // if (!exists([x, y, z - 1], cubes)) {
        //     sufArea++
        // }

    }

    const calculateAnswer2 = () => {
        const cubes: number[][] = parseInput(input)
        const outsideCube: number[] = [8, 2, 2]
        const bound = 10
        const bounds = [bound, bound, bound]
        const seenCubes: number[][] = []
        let numSurfaceArea = 0
        let output = surfaceArea(numSurfaceArea, outsideCube, cubes, seenCubes, bounds)
        console.log("total", output.sufArea)

        return 58

    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
