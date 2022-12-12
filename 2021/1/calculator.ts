interface Calculator {
    calculateNumDepthIncreases: () => number,
    calculateSlidingWindowIncreases: () => number,
}

export const createCalculator = (input: string): Calculator => {

    function parseDepths(input: string): number[] {
        return input.split(/\n/).map(Number)
    }

    const depths: number[] = parseDepths(input)
    const calculateNumDepthIncreases = () => {
        let numIncreases = 0
        for(let i = 1; i < depths.length; i++){
            if(depths[i]>depths[i-1]){
                numIncreases++
            }
        }
        return numIncreases
    };
    const calculateSlidingWindowIncreases = () => {
        let numIncreases = 0
        for(let i = 3; i < depths.length; i++){
            if(depths[i]>depths[i-3]){
                numIncreases++
            }
        }
        return numIncreases
    };

    return {
        calculateNumDepthIncreases,
        calculateSlidingWindowIncreases
    }
}
