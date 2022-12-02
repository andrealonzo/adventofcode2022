function parseCaloriesInput(caloriesInput: string) {
    const caloriesString = caloriesInput.split(/\n\n/)
    let caloriesAdded = []
    for (let i = 0; i < caloriesString.length; i++) {
        let calorieSum = caloriesString[i].split(/\n/).map(Number).reduce((partialSum, a) => partialSum + a, 0);
        caloriesAdded[i] = calorieSum;
    }
    return caloriesAdded
}

export const mostCaloriesThatAnElfIsCarrying = (caloriesInput:string):number =>{
    const caloriesPerElf:number[] = parseCaloriesInput(caloriesInput);
    return Math.max(...caloriesPerElf);
}
