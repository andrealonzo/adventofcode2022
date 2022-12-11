interface Monkey {
    items:number[],
    operation:(arg0:number)=>number,
    divisibleBy:number,
    monkeyToThrowToIfTrue:number,
    monkeyToThrowToifFalse:number
}

export function getOperation(operator: string, operatorNum: string): (arg0:number) => number {
    if (operator === "*") {
        return (num) => num * ((operatorNum === "old") ? num : parseInt(operatorNum))
    } else if (operator === "/") {
        return (num) => num / ((operatorNum === "old") ? num : parseInt(operatorNum))
    } else if (operator === "+") {
        return (num) => num + ((operatorNum === "old") ? num : parseInt(operatorNum))
    } else if (operator === "-") {
        return (num) => num - ((operatorNum === "old") ? num : parseInt(operatorNum))
    }
    return (num) => parseInt(operatorNum)
}

export const createCalculator = (input: string): any => {


    const parseInput = (input: string): any => {
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


    function getMonkeyBusiness(monkeys: Monkey[], rounds: number, manageWorryLevel:(worryLevel:number)=>number) {
        const monkeyInspections = Array(monkeys.length).fill(0)
        for (let i = 0; i < rounds; i++) {
            for (let j = 0; j < monkeys.length; j++) {
                while (monkeys[j].items.length > 0) {
                    monkeyInspections[j]++
                    let worryLevel = monkeys[j].items.shift()
                    //@ts-ignore
                    worryLevel = monkeys[j].operation(worryLevel)
                    if(worryLevel < Number.MAX_SAFE_INTEGER)
                        console.log("TOO BIG !worryLevel", worryLevel)
                    worryLevel = manageWorryLevel(worryLevel)
                    // worryLevel = Math.floor(worryLevel / 3)
                    if (worryLevel % monkeys[j].divisibleBy === 0) {
                        monkeys[monkeys[j].monkeyToThrowToIfTrue].items.push(worryLevel)
                    } else {
                        monkeys[monkeys[j].monkeyToThrowToifFalse].items.push(worryLevel)
                    }
                }
            }

            if( i ==0 || i ==19 || (i+1)%1000===0){
                console.log("round",i,monkeyInspections)
            }
            //console.log(monkeys)
        }
        const sortedMonkeyInspections = monkeyInspections.sort((a, b) => b - a)
        const monkeyBusiness = sortedMonkeyInspections[0] * sortedMonkeyInspections[1]

        return monkeyBusiness
    }


    const calculateAnswer1 = () => {
        const monkeys = parseInput(input)
        const rounds = 20


        // const monkeyActivity;


        // const monkeyBusiness = mostActiveMonkeys(monkeyActivity, 2)
        const manageWorryLevel =  (worryLevel:number)=>Math.floor(worryLevel / 3)
        const monkeyBusiness = getMonkeyBusiness(monkeys, rounds, manageWorryLevel)
        return monkeyBusiness
    };


    const calculateAnswer2 = () => {
        const monkeys = parseInput(input)
        const rounds = 10000
        const manageWorryLevel =  (worryLevel:number)=>worryLevel
        const monkeyBusiness = getMonkeyBusiness(monkeys, rounds, manageWorryLevel)
        return monkeyBusiness
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2
    }

}
