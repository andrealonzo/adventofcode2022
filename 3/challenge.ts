interface Challenge {
    calculate: () => number;
}

export const createCalculator = (input: string): Challenge => {
    const convertToPriority = (character: string): number => {
        if(character===""){
            return 0
        }
        if (character === character.toUpperCase()) {
            return character.charCodeAt(0) - 38
        } else {
            return character.charCodeAt(0) - 96
        }
    };

    const parseRucksacksFromInput = (input: string): string[] => input.split(/\n/);

    function getCommonItem(rucksack: string):string {
        const compartmentOne = rucksack.substring(0, rucksack.length/2)
        const compartmentTwo = rucksack.substring(rucksack.length/2, rucksack.length)

        for(let i = 0; i < compartmentOne.length; i++){
           for(let j = 0; j < compartmentTwo.length; j++){
               if(compartmentOne[i] === compartmentTwo[j]){
                   return compartmentOne[i]
               }
           }
        }
        return ""
    }

    function calculatePrioritiesOfCommonItems(rucksacks: string[]): number {
        let sumPriorities = 0
        for (let i = 0; i < rucksacks.length; i++) {
            const commonItem = getCommonItem(rucksacks[i])
            const priority = convertToPriority(commonItem)
            sumPriorities += priority
        }
        return sumPriorities
    }

    const calculate = () => {
        const rucksacks = parseRucksacksFromInput(input)
        return calculatePrioritiesOfCommonItems(rucksacks)
    };

    return {
        calculate
    }

}
