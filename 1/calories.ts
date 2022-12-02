function parseCaloriesInput(caloriesInput: string) {
    const caloriesString = caloriesInput.split(/\n\n/)
    let caloriesAdded = []
    for (let i = 0; i < caloriesString.length; i++) {
        caloriesAdded[i] = caloriesString[i].split(/\n/).map(Number).reduce((partialSum, a) => partialSum + a, 0);
    }
    return caloriesAdded
}

export const mostCaloriesThatAnElfIsCarrying = (caloriesInput: string): number => {
    const caloriesPerElf: number[] = parseCaloriesInput(caloriesInput);
    return Math.max(...caloriesPerElf);
}
export const caloriesThatTheTopThreeElvesAreCarrying = (caloriesInput: string): number => {
    const caloriesPerElf: number[] = parseCaloriesInput(caloriesInput);
    const sorted = caloriesPerElf.sort((a, b) => {
        return b - a
    })
    return sorted[0] + sorted[1] + sorted[2]
}
