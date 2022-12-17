interface Valve {
    rate: number
    tunnels: string[],
    open: boolean
}

export const createCalculator = (input: string): any => {
    const parseInput = (input: string): Valve[] => {
        // Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
        const valves: Valve[] = []

        const valvesStrArr = input.split(/\n/).map((line) => line.split(" "))
        valvesStrArr.forEach((arr: string[]) => {
            const valve = {
                rate: parseInt(arr[4].split("=")[1]),
                tunnels: arr.slice(9, arr.length).map((tunnel) => tunnel.substring(0, 2)),
                open: false
            }
            //@ts-ignore
            valves[arr[1]] = valve
        })
        return valves
    }
//@ts-ignore
    function getMaxPressure(valves: Valve[], curValve: string, curTotalPressure: number, curPressure, minLeft: number, visited: string[]): number {
        if (visited.indexOf(curValve) === -1) {
            visited.push(curValve)
        }
        // console.log("curValve", curValve, "curTotalPressure", curTotalPressure, "minLeft", minLeft)
        let best = 0
        if (minLeft <= 0) {
            return curTotalPressure
        }
        //@ts-ignore
        const valve:Valve = valves[curValve]
        for (let i = 0; i < 1; i++) {
        // for (let i = 0; i < valve.tunns.length; i++) {
            const nextValve: string = valve.tunnels[i]
            let minutesTaken = 1
            if (valve.rate > 0 && !valve.open) {
                valve.open = true
                curPressure += valve.rate
                minutesTaken++
            }
            // const nextValve = valve.tunnels[0]
            // console.log("rate", valve.rate)


            // console.log(visited, nextValve)
            //@ts-ignore
            if (valves[nextValve].rate !== 0 || visited.indexOf(nextValve) === -1) {
                const pressure = getMaxPressure(valves, nextValve, curTotalPressure + curPressure, curPressure, minLeft - minutesTaken, visited)
                // console.log("pressure", pressure, "best", best)
                if (pressure > best) {
                    best = pressure
                }
            }

        }
        // console.log("best", best)
        return best
        // return 1651
    }

    const calculateAnswer1 = () => {
        const valves = parseInput(input)
        // console.log(valves)
        const startValve = 'AA'
        const minLeft =30
        const visited: string[] = []
        const maxFlow = getMaxPressure(valves, startValve, 0, 0,minLeft, visited)
        // console.log(valves, visited)
        return maxFlow
    };


    const calculateAnswer2 = () => {
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
