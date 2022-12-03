interface Challenge {
    calculate: () => number;

    calculateGroup(): number;
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
    const rucksacks = parseRucksacksFromInput(input)

    const calculate = () => {
        return calculatePrioritiesOfCommonItems(rucksacks)
    };

    function getCommonItemFromGroup(rucksackOne: string, rucksackTwo: string, rucksackThree: string) {
        for(let i = 0; i < rucksackOne.length; i++){
            for(let j = 0; j < rucksackTwo.length; j++){
                if(rucksackOne[i] === rucksackTwo[j]){
                    for(let k = 0;k<rucksackThree.length;k++){
                        if(rucksackOne[i]===rucksackThree[k]){
                            return rucksackThree[k]
                        }
                    }
                }
            }
        }
        return ""

    }

    function calculateGroupPriorities(rucksacks: string[]) {
        let sumPriorities = 0
        for (let i = 0; i < rucksacks.length; i+=3) {
            const commonItem = getCommonItemFromGroup(rucksacks[i], rucksacks[i+1], rucksacks[i+2])
            const priority = convertToPriority(commonItem)
            sumPriorities += priority
        }
        return sumPriorities
    }

    const calculateGroup = ()=>{
        return calculateGroupPriorities(rucksacks)
    }

    return {
        calculate,
        calculateGroup
    }

}
