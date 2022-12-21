interface Monkey {
    name: string
    number?: number
    monkey1?: string
    operation?: string
    monkey2?: string

}

interface Job {
    monkey1: string,
    operation: string,
    monkey2: string
}

export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
        const monkeyMap = new Map()
        const monkeyJobs = new Map()
        const monkeys = input.split(/\n/).map((line) => line.split(" "))
        monkeys.forEach((monkeyStr) => {
            const name = monkeyStr[0].substring(0, 4)
            if (monkeyStr.length === 2) {
                const number = parseInt(monkeyStr[1])
                monkeyMap.set(name, number)
            } else {
                const monkey1 = monkeyStr[1]
                const operation = monkeyStr[2]
                const monkey2 = monkeyStr[3]
                monkeyJobs.set(name, {
                    monkey1,
                    operation,
                    monkey2
                })
            }
        })
        return {
            monkeyMap,
            monkeyJobs
        }


    }
    const parseInput2 = (input: string): any => {
        const monkeyMap = new Map()
        const monkeyJobs = new Map()
        const monkeys = input.split(/\n/).map((line) => line.split(" "))
        monkeys.forEach((monkeyStr) => {
            const name = monkeyStr[0].substring(0, 4)
            if (monkeyStr.length === 2 && name === "humn") {
                const operation = "?"
                monkeyJobs.set(name, {
                    operation,
                })
            } else if (monkeyStr.length === 2) {
                const number = parseInt(monkeyStr[1])
                monkeyMap.set(name, number)
            } else {
                const monkey1 = monkeyStr[1]
                const operation = name === "root" ? "=" : monkeyStr[2]
                const monkey2 = monkeyStr[3]
                monkeyJobs.set(name, {
                    monkey1,
                    operation,
                    monkey2
                })
            }
        })
        return {
            monkeyMap,
            monkeyJobs
        }


    }

    function getResult(num1: number, operation: string, num2: number) {
        if (operation === "+") {
            return num1 + num2
        } else if (operation === "-") {
            return num1 - num2
        } else if (operation === "*") {
            return num1 * num2
        } else if (operation === "/") {
            return num1 / num2
        }
        return -1

    }

    const calculateAnswer1 = () => {
        const monkeys = parseInput(input)
        const monkeyMap: Map<string, number> = monkeys.monkeyMap
        const monkeyJobs: Map<string, Job> = monkeys.monkeyJobs
        // console.log(monkeyMap)
        // console.log(monkeyJobs)

        while (monkeyJobs.size > 0) {
            console.log(monkeyJobs.size)

            for (let [name, job] of monkeyJobs) {
                if (monkeyMap.has(job.monkey1) && monkeyMap.has(job.monkey2)) {
                    const num1 = monkeyMap.get(job.monkey1)
                    const num2 = monkeyMap.get(job.monkey2)
                    const result = getResult(num1, job.operation, num2)
                    console.log(num1, num2, result)
                    monkeyMap.set(name, result)
                    monkeyJobs.delete(name)
                }
            }
        }
        return monkeyMap.get("root")
        // return 152
    };


    function getResultInMiddle(num1: number, operation: string, num2: number) {
        if (operation === "+") {
            return num1 - num2
        } else if (operation === "-") {
            return num1 + num2
        } else if (operation === "*") {
            return num1 / num2
        } else if (operation === "/") {
            return num1 * num2
        }
        return -1

    }

    function getResultInEnd(num1: number, operation: string, num2: number) {
        if (operation === "+") {
            return num1 - num2
        } else if (operation === "-") {
            return num2 - num1
        } else if (operation === "*") {
            return num1 / num2
        } else if (operation === "/") {
            return num2 / num1
        }
        return -1

    }

    const calculateAnswer2 = () => {
        const monkeys = parseInput2(input)
        const monkeyMap: Map<string, number> = monkeys.monkeyMap
        const monkeyJobs: Map<string, Job> = monkeys.monkeyJobs
        console.log(monkeyMap)
        console.log(monkeyJobs)
// return 301
        while (monkeyJobs.size >4) {
            console.log(monkeyJobs.size)

            for (let [name, job] of monkeyJobs) {
                if (job.operation === "=") {
                    if (monkeyMap.has(job.monkey1)) {
                        const result = monkeyMap.get(job.monkey1)
                        monkeyMap.set(job.monkey2, result)
                        monkeyJobs.delete(name)
                    } else if (monkeyMap.has(job.monkey2)) {
                        const result = monkeyMap.get(job.monkey2)
                        monkeyMap.set(job.monkey1, result)
                        monkeyJobs.delete(name)
                    }
                } else if (monkeyMap.has(job.monkey1) && monkeyMap.has(job.monkey2)) {
                    const num1 = monkeyMap.get(job.monkey1)
                    const num2 = monkeyMap.get(job.monkey2)
                    const result = getResult(num1, job.operation, num2)
                    // console.log(num1, num2, result)
                    monkeyMap.set(name, result)
                    monkeyJobs.delete(name)
                } else if (monkeyMap.has(name)) {
                    if (monkeyMap.has(job.monkey1)) {
                        const num1 = monkeyMap.get(job.monkey1)
                        const num2 = monkeyMap.get(name)
                        const result = getResultInMiddle(num1, job.operation, num2)
                        monkeyMap.set(job.monkey2, result)
                        monkeyJobs.delete(name)
                    } else if (monkeyMap.has(job.monkey2)) {
                        const num1 = monkeyMap.get(job.monkey2)
                        const num2 = monkeyMap.get(name)
                        const result = getResultInEnd(num1, job.operation, num2)
                        monkeyMap.set(job.monkey2, result)
                        monkeyJobs.delete(name)

                    }

                }
            }
        }
        console.log(monkeyJobs)
        console.log(monkeyMap)

        return monkeyMap.get("humn")
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
