export const isRightOrder = (one: any[], two: any[]): boolean | undefined => {
    for (let i = 0; i < one.length; i++) {
        if (two[i] === undefined) {
            return false
        }
        if (Array.isArray(one[i]) && Array.isArray(two[i])) {
            const rightOrder = isRightOrder(one[i], two[i])
            if (rightOrder != undefined) {
                return rightOrder
            }
        } else if (Array.isArray(one[i])) {
            const rightOrder = isRightOrder(one[i], [two[i]])
            if (rightOrder != undefined) {
                return rightOrder
            }
        } else if (Array.isArray(two[i])) {
            const rightOrder = isRightOrder([one[i]], two[i])
            if (rightOrder != undefined) {
                return rightOrder
            }
        } else if (one[i] < two[i]) {
            return true
        } else if (one[i] > two[i]) {
            return false
        }
    }
    if (one.length === two.length) {
        return undefined
    }
    return true
}
export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
        const strPairs = input.split(/\n\n/).map((strPair) => strPair.split(/\n/))
        return strPairs.map((strPairArr) => strPairArr.map((strItem) => JSON.parse(strItem)))
    }
    const calculateAnswer1 = () => {
        const pairs = parseInput(input)
        const rightOrderIndices: number[] = []
        pairs.forEach((pair: any[], index: number) => {
            if (isRightOrder(pair[0], pair[1])) {
                rightOrderIndices.push(index + 1)
            }
        })
        return rightOrderIndices.reduce((prev, cur) => prev + cur)
    };
    const parseInput2 = (input: string): any => {
        const strPairs = input.split(/\n/).filter((strPairs) => strPairs.trim() !== "")
        return strPairs.map((strItem) => JSON.parse(strItem))
    }
    const calculateAnswer2 = () => {
        const divider1 = [[2]]
        const divider2 = [[6]]
        const pairs: any[] = parseInput2(input)
        pairs.push(divider1)
        pairs.push(divider2)
        const sortedPairs = pairs.sort((item1, item2) => {
            if (isRightOrder(item1, item2)) {
                return -1
            } else {
                return 1
            }
        })
        const divider1Index = sortedPairs.findIndex((pairs) => JSON.stringify(pairs) === JSON.stringify(divider1)) + 1
        const divider2Index = sortedPairs.findIndex((pairs) => JSON.stringify(pairs) === JSON.stringify(divider2)) + 1
        return divider1Index * divider2Index
    };
    return {
        calculateAnswer1,
        calculateAnswer2,
    }
}