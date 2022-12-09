export const createCalculator = (input: string): any => {
    function containsNoRepeats(s: string) {
        for (let i = 0; i < s.length; i++) {
            const charToFind = s.charAt(i)
            for (let j = i+1; j < s.length; j++) {
                if(charToFind===s.charAt(j)){
                    return false
                }
            }
        }
        return true;
    }

    function findDistinct(distinctNums:number) {
        let index = 0;
        for (let i = distinctNums; i < input.length; i++) {
            if (containsNoRepeats(input.substring(i - distinctNums, i))) {
                index = i
                break
            }
        }
        return index
    }

    const calculateAnswer1 = () => {
        return findDistinct(4);
    };


    const calculateAnswer2 = () => {
        return findDistinct(14);
    };

    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
