interface Monkey {
    name: string,
    monkey1?: string,
    operation: string,
    monkey2?: string
}

export const createCalculator = (input: string): any => {
    const parseInput = (input: string): Map<string, Monkey> => {
        const monkeys: Map<string, Monkey> = new Map()
        const monkeysStr = input.split(/\n/).map((line) => line.split(" "))
        monkeysStr.forEach((monkeyStr) => {
            const name = monkeyStr[0].substring(0, 4)
            if (monkeyStr.length === 2) {
                const operation = monkeyStr[1]
                monkeys.set(name, {
                    name,
                    operation
                })
            } else {
                const monkey1 = monkeyStr[1]
                const operation = monkeyStr[2]
                const monkey2 = monkeyStr[3]
                monkeys.set(name, {
                    name,
                    monkey1,
                    operation,
                    monkey2
                })
            }
        })
        return monkeys

    }
    function getAnswer(monkey: Monkey, monkeys: Map<string, Monkey>): string {
        const operation = monkey.operation
        if (!isNaN(+operation)) {
            return operation
        } else {
            const monkey1 = monkey.monkey1
            const monkey2 = monkey.monkey2
            const equation: string = "(" + getAnswer(monkeys.get(monkey1), monkeys) + ")" + operation + "(" + getAnswer(monkeys.get(monkey2), monkeys) + ")"
            return eval(equation)
        }
    }

    const calculateAnswer1 = () => {
        const monkeys: Map<string, Monkey> = parseInput(input)
        return getAnswer(monkeys.get("root"), monkeys)
    };

    const calculateAnswer2 = () => {
        const monkeys: Map<string, Monkey> = parseInput(input)
        const rootMonkey = monkeys.get("root")
        let min = 0
        let max = 3285342464106100000
        let hNum = 0
        while (true) {
            hNum = Math.floor((max - min) / 2) + min
            monkeys.get("humn").operation = hNum.toString()
            const monkey2Answer = getAnswer(monkeys.get(rootMonkey.monkey2), monkeys)
            const monkey1Answer = getAnswer(monkeys.get(rootMonkey.monkey1), monkeys)

            if (monkey1Answer === monkey2Answer) {
                return parseInt(monkeys.get("humn").operation)
            } else {
                if (parseInt(monkey2Answer) < parseInt(monkey1Answer) ) {
                    min = Math.floor(hNum)
                }else{
                    max = Math.ceil(hNum)
                }
            }
        }
        return -1
    };
    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
