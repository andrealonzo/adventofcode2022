interface ElfCalculator {
    mostCaloriesThatAnElfIsCarrying:()=>number,
    caloriesThatTheTopThreeElvesAreCarrying:()=>number

}

export const createElfCalorieCalculator = (caloriesInput:string):ElfCalculator => {

    const parseCaloriesPerElf = (caloriesInput:string):number[] => {
        const caloriesString = caloriesInput.split(/\n\n/)
        let caloriesAdded = []
        for (let i = 0; i < caloriesString.length; i++) {
            caloriesAdded[i] = caloriesString[i].split(/\n/).map(Number).reduce((partialSum, a) => partialSum + a, 0);
        }
        return caloriesAdded
    }

    const caloriesPerElf = parseCaloriesPerElf(caloriesInput)

    const mostCaloriesThatAnElfIsCarrying = (): number => {
        return Math.max(...caloriesPerElf);
    }
    const caloriesThatTheTopThreeElvesAreCarrying = (): number => {
        const sorted = caloriesPerElf.sort((a, b) => {
            return b - a
        })
        return sorted[0] + sorted[1] + sorted[2]
    }

    return {
        mostCaloriesThatAnElfIsCarrying,
        caloriesThatTheTopThreeElvesAreCarrying
    }

}
