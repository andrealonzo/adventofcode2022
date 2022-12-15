interface Coord {
    r: number,
    c: number
}

interface SensorBeacon {
    sensor: Coord,
    beacon: Coord,
    distance?: number
}

//
// function printGrid(grid: any) {
//     let str = ""
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             str += grid[i][j]
//         }
//         str += "\n"
//     }
//     return str
// }

export const createCalculator = (input: string): any => {
    let rOffset
    let cOffset
    const parseInput = (input: string): SensorBeacon[] => {
        const lines = input.split(/\n/)
        return lines.map((line) => {
                const lineArr = line.split(" ")
                const sensor = {
                    r: parseInt(lineArr[3].substring(2)),
                    c: parseInt(lineArr[2].substring(2))
                }

                const beacon = {
                    r: parseInt(lineArr[9].substring(2)),
                    c: parseInt(lineArr[8].substring(2))
                }
                const distance = getDistance(sensor.r, sensor.c, beacon.r, beacon.c)
                return {
                    sensor,
                    beacon,
                    distance
                }
            }
        )
    }
    //
    // function applyOffsets(sensorBeacons: SensorBeacon[], rOffset: number, cOffset: number) {
    //     sensorBeacons.forEach((sensorBeacon) => {
    //         sensorBeacon.sensor.c += cOffset
    //         sensorBeacon.sensor.r += rOffset
    //         sensorBeacon.beacon.c += cOffset
    //         sensorBeacon.beacon.r += rOffset
    //     })
    //     return sensorBeacons
    // }
    //
    // function createGrid(sensorBeacons: SensorBeacon[], rSize, cSize): string[][] {
    //
    //     //
    //     // const cMin = sensorBeacons.reduce((prevMin, curBeacon) => {
    //     //     if (curBeacon.beacon.c < prevMin) {
    //     //         return curBeacon.beacon.c
    //     //     } else if (curBeacon.sensor.c < prevMin) {
    //     //         return curBeacon.sensor.c
    //     //     }
    //     //     return prevMin
    //     // }, 10000000000)
    //     // const cMax = sensorBeacons.reduce((prevMax, curBeacon) => {
    //     //     if (curBeacon.beacon.c > prevMax) {
    //     //         return curBeacon.beacon.c
    //     //     } else if (curBeacon.sensor.c > prevMax) {
    //     //         return curBeacon.sensor.c
    //     //     }
    //     //     return prevMax
    //     // }, 0)
    //     // const rMin = sensorBeacons.reduce((prevMin, curBeacon) => {
    //     //     if (curBeacon.beacon.r < prevMin) {
    //     //         return curBeacon.beacon.r
    //     //     } else if (curBeacon.sensor.r < prevMin) {
    //     //         return curBeacon.sensor.r
    //     //     }
    //     //     return prevMin
    //     // }, 100000000000)
    //     // const rMax = sensorBeacons.reduce((prevMax, curBeacon) => {
    //     //     if (curBeacon.beacon.r > prevMax) {
    //     //         return curBeacon.beacon.r
    //     //     } else if (curBeacon.sensor.r > prevMax) {
    //     //         return curBeacon.sensor.r
    //     //     }
    //     //     return prevMax
    //     // }, 0)
    //     // rOffset = rMin < 0 ? -rMin : 0
    //     // cOffset = cMin < 0 ? -cMin : 0
    //     // const rSize = rMax - rMin + 1
    //     // const cSize = cMax - cMin + 1
    //     sensorBeacons = applyOffsets(sensorBeacons, rOffset, cOffset)
    //     // console.log("gridsize", rSize, cSize)
    //     const grid = new Array(rSize)
    //     for (let i = 0; i < grid.length; i++) {
    //         grid[i] = new Array(cSize).fill(".")
    //     }
    //     // console.log("before initializing grid")
    //     // const grid = new Array(rSize).fill(null).map(() => new Array(cSize).fill(null));
    //     // console.log("after initializing grid")
    //
    //     sensorBeacons.forEach((sb) => {
    //         // console.log(sb)
    //         // console.log(cOffset)
    //         grid[sb.sensor.r][sb.sensor.c] = "S"
    //         grid[sb.beacon.r][sb.beacon.c] = "B"
    //     })
    //     return grid
    //     // console.log(printGrid(grid))
    //
    // }
    //
    // function displaySensorCoverage(sb: SensorBeacon, grid: string[][]): string[][] {
    //     // console.log(sb)
    //     const distance = Math.abs(sb.sensor.c - sb.beacon.c) + Math.abs(sb.sensor.r - sb.beacon.r)
    //     // console.log("distance", distance)
    //     let colsToPrintOnEachSide = 0
    //     // console.log(distance)
    //     for (let r = sb.sensor.r - distance; r <= sb.sensor.r + distance; r++) {
    //         // console.log(r,rOffset,sb.sensor.c,cOffset)
    //         // console.log(grid[r+rOffset][sb.sensor.c+cOffset]
    //         // print middle
    //         if (r >= 0 && r < grid.length) {
    //             // console.log("start",sb.sensor.c - colsToPrintOnEachSide, sb.sensor.c + colsToPrintOnEachSide)
    //             for (let c = sb.sensor.c - colsToPrintOnEachSide; c <= sb.sensor.c + colsToPrintOnEachSide; c++) {
    //                 // console.log("grid[r + rOffset][c + cOffset]",grid[r + rOffset][c + cOffset])
    //                 if (grid[r][c] === ".") {
    //                     grid[r][c] = "#"
    //                 }
    //             }
    //
    //             // if (grid[r + rOffset][sb.sensor.c + cOffset] === ".") {
    //             //     grid[r + rOffset][sb.sensor.c + cOffset] = "#"
    //             // }
    //         }
    //
    //         if (r < sb.sensor.r) {
    //             colsToPrintOnEachSide++
    //         } else {
    //             colsToPrintOnEachSide--
    //         }
    //     }
    //     return grid
    //
    // }


    // function displayCoverage(sensorBeacons: SensorBeacon[], grid: string[][]): string[][] {
    //
    //     // grid = displaySensorCoverage(sensorBeacons[6], grid)
    //     // console.log(printGrid(grid))
    //     sensorBeacons.forEach((sb) => {
    //         grid = displaySensorCoverage(sb, grid)
    //         // console.log(printGrid(grid))
    //     })
    //     return grid
    //
    // }
    //
    // function sensorsCloseToRow(sensorBeacons: SensorBeacon[], row: number) {
    //     return sensorBeacons.filter((sensorBeacon) => {
    //         const distanceFromSensorToRow = Math.abs(sensorBeacon.sensor.r - row)
    //         // console.log("distanceFromSensorToRow",distanceFromSensorToRow)
    //         return sensorBeacon.distance >= distanceFromSensorToRow
    //     })
    // }

    // function updateSensorBeaconDistances(sensorBeacons: SensorBeacon[]) {
    //     sensorBeacons.forEach((sb) => {
    //         sb.distance = Math.abs(sb.sensor.c - sb.beacon.c) + Math.abs(sb.sensor.r - sb.beacon.r)
    //     })
    //     return sensorBeacons;
    // }

    function getGridSize(sensorBeacons: SensorBeacon[]): { rMin: number, rMax: number, cMin: number, cMax: number, rSize: number, cSize: number } {

        const cMin = sensorBeacons.reduce((prevMin, curBeacon) => {
            if (curBeacon.beacon.c < prevMin) {
                return curBeacon.beacon.c
            } else if (curBeacon.sensor.c < prevMin) {
                return curBeacon.sensor.c
            }
            return prevMin
        }, 10000000000)
        const cMax = sensorBeacons.reduce((prevMax, curBeacon) => {
            if (curBeacon.beacon.c > prevMax) {
                return curBeacon.beacon.c
            } else if (curBeacon.sensor.c > prevMax) {
                return curBeacon.sensor.c
            }
            return prevMax
        }, 0)
        const rMin = sensorBeacons.reduce((prevMin, curBeacon) => {
            if (curBeacon.beacon.r < prevMin) {
                return curBeacon.beacon.r
            } else if (curBeacon.sensor.r < prevMin) {
                return curBeacon.sensor.r
            }
            return prevMin
        }, 100000000000)
        const rMax = sensorBeacons.reduce((prevMax, curBeacon) => {
            if (curBeacon.beacon.r > prevMax) {
                return curBeacon.beacon.r
            } else if (curBeacon.sensor.r > prevMax) {
                return curBeacon.sensor.r
            }
            return prevMax
        }, 0)
        rOffset = rMin < 0 ? -rMin : 0
        cOffset = cMin < 0 ? -cMin : 0
        const rSize = rMax - rMin + 1
        const cSize = cMax - cMin + 1
        return {rMax, rMin, cMin, cMax, rSize, cSize}

    }

    function getDistance(r1: number, c1: number, r2: number, c2: number) {
        return Math.abs(c1 - c2) + Math.abs(r1 - r2)
    }

    function withinAnySensorDistance(row: number, c: number, sensorBeacons: SensorBeacon[]): boolean {
        for (let i = 0; i < sensorBeacons.length; i++) {
            const sensorBeacon = sensorBeacons[i]
            // console.log(row,c,sensorBeacon)
            const sensorToPointDistance = getDistance(row, c, sensorBeacon.sensor.r, sensorBeacon.sensor.c)
            // console.log("sensorToPointDistance",sensorToPointDistance)
            // console.log("sensorBeacon.distance",sensorBeacon.distance)
            // @ts-ignore
            if (sensorToPointDistance <= sensorBeacon.distance) {
                // console.log("true")
                return true
            }
        }
        // console.log("false")
        return false;
    }

    function findNumBeaconsInRow(sensorBeacons: SensorBeacon[], row: number) {
        const uniqueBeacons = sensorBeacons
            .map((sensorBeacon) => sensorBeacon.beacon)
            .filter((value, index, self) => {
                return self.findIndex((coord) => value.c === coord.c && value.r === coord.r) === index
            })
        let numBeaconsInRow = 0
        uniqueBeacons.forEach((sensorBeacon) => {
            if (sensorBeacon.r === row) {
                numBeaconsInRow++
            }
        })
        console.log(numBeaconsInRow)
        return numBeaconsInRow


    }

    const calculateAnswer1 = (r = 2000000) => {
        let sensorBeacons = parseInput(input)
        const gridSize = getGridSize(sensorBeacons)
        let numNoBeacon = 0
        const colStart = gridSize.cMin * 20
        const colEnd = gridSize.cMax * 20
        for (let c = colStart; c < colEnd; c++) {
            if (withinAnySensorDistance(r, c, sensorBeacons)) {
                numNoBeacon++
            }
        }
        const numBeaconsInRow = findNumBeaconsInRow(sensorBeacons, r)
        return numNoBeacon - numBeaconsInRow
    };

    // const calculateAnswer1 = (row = 2000000) => {
    // let sensorBeacons = parseInput(input)
    // sensorBeacons = updateSensorBeaconDistances(sensorBeacons);
    // console.log("sensorBeacons", sensorBeacons)
    // const closeSensors = sensorsCloseToRow(sensorBeacons, row)
    // console.log("closeSensors", closeSensors)
    //
    // const originalGridSize = getGridSize(sensorBeacons)
    // const closeSensorsGridSize = getGridSize(closeSensors)
    // console.log("originalGridSize",originalGridSize)
    // console.log("closeSensorsGridSize",closeSensorsGridSize)
    //
    // let grid = createGrid(closeSensors, closeSensorsGridSize.rSize, originalGridSize.cSize)
    // // let grid = createGrid(sensorBeacons)
    //
    // console.log(printGrid(grid))
    //
    // grid = displayCoverage(sensorBeacons, grid)
    // console.log(printGrid(grid))
    // // // console.log(row-rOffset-2)
    //  const count = grid[row].filter((item) => item === "#").length
    //  return count
    // // return 1
    // };


    function findDistressBeacon(maxSize: number, sensorBeacons: SensorBeacon[]):Coord {
        for (let r = 0; r < maxSize; r++) {
            let numNoBeacon = 0
            for (let c = 0; c < maxSize; c++) {
                if (withinAnySensorDistance(r, c, sensorBeacons)) {
                    numNoBeacon++
                } else {
                    return {
                        r, c
                    }
                }
            }
            if(r%100===0){
                console.log("done with",r,"/",maxSize)
            }
            // console.log("numNoBeacon", numNoBeacon)
        }
        return{
            r:0,
            c:0
        }

    }

    const calculateAnswer2 = (maxSize: number = 4000000) => {
        let sensorBeacons = parseInput(input)
        // const gridSize = getGridSize(sensorBeacons)
        // const colStart = gridSize.cMin*20
        // const colEnd = gridSize.cMax*20
        const distressBeacon = findDistressBeacon(maxSize, sensorBeacons)

        return distressBeacon.c * 4000000 + distressBeacon.r
        // const numBeaconsInRow = findNumBeaconsInRow(sensorBeacons, r)
        // return numNoBeacon - numBeaconsInRow

    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
