interface Monkey {
    items: number[],
    operation: (num: number) => number,
    divisibleBy: number,
    monkeyToThrowToIfTrue: number,
    monkeyToThrowToifFalse: number
}

export function getOperation(operator: string, operatorNum: string): (num: number) => number {
    if (operator === "*") {
        return (num) => num * ((operatorNum === "old") ? num : parseInt(operatorNum))
    } else if (operator === "/") {
        return (num) => num / ((operatorNum === "old") ? num : parseInt(operatorNum))
    } else if (operator === "+") {
        return (num) => num + ((operatorNum === "old") ? num : parseInt(operatorNum))
    } else if (operator === "-") {
        return (num) => num - ((operatorNum === "old") ? num : parseInt(operatorNum))
    }
    return () => parseInt(operatorNum)
}

export const createCalculator = (input: string): any => {
    const parseInput = (input: string): Monkey[] => {
        const lines = input.split(/\n\n/).map((lines) => lines.split(/\n/))
        const monkeys: Monkey[] = []
        for (let i = 0; i < lines.length; i++) {
            const items = lines[i][1].split(":")[1].split(",").map((item) => item.trim()).map(Number)
            const operatorArr = lines[i][2].split("old ")[1].split(" ")
            const operator = operatorArr[0]
            const operatorNum = operatorArr[1]
            const operation = getOperation(operator, operatorNum)
            const divisibleBy = parseInt(lines[i][3].split("by ")[1])
            const ifTrue = parseInt(lines[i][4].split("monkey ")[1])
            const ifFalse = parseInt(lines[i][5].split("monkey ")[1])
            monkeys.push({
                    items, operation, divisibleBy, monkeyToThrowToIfTrue: ifTrue, monkeyToThrowToifFalse: ifFalse
                }
            )
        }
        return monkeys
    }


    function getMonkeyBusiness(monkeys: Monkey[], rounds: number, manageWorryLevel: (worryLevel: number) => number) {
        const monkeyInspections = Array(monkeys.length).fill(0)
        for (let i = 0; i < rounds; i++) {
            for (let j = 0; j < monkeys.length; j++) {
                while (monkeys[j].items.length > 0) {
                    monkeyInspections[j]++
                    let worryLevel = monkeys[j].items.shift()
                    worryLevel = monkeys[j].operation(worryLevel)
                    worryLevel = manageWorryLevel(worryLevel)
                    if (worryLevel % monkeys[j].divisibleBy === 0) {
                        monkeys[monkeys[j].monkeyToThrowToIfTrue].items.push(worryLevel)
                    } else {
                        monkeys[monkeys[j].monkeyToThrowToifFalse].items.push(worryLevel)
                    }
                }
            }
        }
        const sortedMonkeyInspections = monkeyInspections.sort((a, b) => b - a)
        return sortedMonkeyInspections[0] * sortedMonkeyInspections[1]
    }


    const calculateAnswer1 = () => {
        const monkeys = parseInput(input)
        const rounds = 20
        const manageWorryLevel = (worryLevel: number) => Math.floor(worryLevel / 3)
        return getMonkeyBusiness(monkeys, rounds, manageWorryLevel)
    };


    const calculateAnswer2 = (rounds = 10000) => {
        const monkeys = parseInput(input)
        const leastCommonMultiple = monkeys.reduce((prev, cur) => prev * cur.divisibleBy, 1)
        const manageWorryLevel = (worryLevel: number) => worryLevel % leastCommonMultiple
        return getMonkeyBusiness(monkeys, rounds, manageWorryLevel)
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2
    }

}
