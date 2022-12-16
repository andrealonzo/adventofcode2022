interface Coord {
    r: number,
    c: number
}

interface SensorBeacon {
    sensor: Coord,
    beacon: Coord,
    distance?: number
}

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
            const sensorToPointDistance = getDistance(row, c, sensorBeacon.sensor.r, sensorBeacon.sensor.c)
            // @ts-ignore
            if (sensorToPointDistance <= sensorBeacon.distance) {
                return true
            }
        }
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

    function findDistressBeacon(maxSize: number, sensorBeacons: SensorBeacon[]): Coord {
        for (let r = 0; r < maxSize; r++) {
            for (let c = 0; c < maxSize; c++) {
                let numSensorsHit = 0
                for (let sensorNum = 0; sensorNum < sensorBeacons.length; sensorNum++) {
                    const sensorBeacon = sensorBeacons[sensorNum]
                    const sensorToPointDistance = getDistance(r, c, sensorBeacon.sensor.r, sensorBeacon.sensor.c)
                    // @ts-ignore
                    if (sensorToPointDistance <= sensorBeacon.distance) {
                        numSensorsHit++
                        if (c < sensorBeacon.sensor.c) {
                            c = Math.min((sensorBeacon.sensor.c - c) + sensorBeacon.sensor.c, maxSize)
                        } else {
                            //@ts-ignore
                            c += sensorBeacon.distance - sensorToPointDistance
                        }
                    }
                }
                if (numSensorsHit === 0) {
                    return {r, c}
                }
            }
        }
        return {
            r: 0,
            c: 0
        }
    }

    const calculateAnswer2 = (maxSize: number = 4000000) => {
        let sensorBeacons = parseInput(input)
        const distressBeacon = findDistressBeacon(maxSize, sensorBeacons)
        return distressBeacon.c * 4000000 + distressBeacon.r
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
