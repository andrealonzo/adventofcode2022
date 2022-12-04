interface Challenge {
    calculateAnswer1: () => number;
    calculateAnswer2: () => number;

}

interface PairAssignments {
    pair1: number[],
    pair2: number[]
}

export const createCalculator = (input: string): Challenge => {

    const parseInput = (input: string): PairAssignments[] => {
        const assignments: string[] = input.split(/\n/)
        let pairAssignments: PairAssignments[] = [];
        for (let i = 0; i < assignments.length; i++) {
            const pairs: string[] = assignments[i].split(",")
            const pairAssignment: PairAssignments = {
                pair1: pairs[0].split("-").map(Number),
                pair2: pairs[1].split("-").map(Number),
            }
            pairAssignments.push(pairAssignment)
        }
        return pairAssignments
    }

    const pairAssignments: PairAssignments[] = parseInput(input)

    function isFullyContainedIn(pair1: number[], pair2: number[]) {
        return (pair1[0] >= pair2[0] && pair1[1] <= pair2[1]) || (pair2[0] >= pair1[0] && pair2[1] <= pair1[1])
    }

    const calculateAnswer1 = () => {
        let numFullyContained = 0;
        for (let i = 0; i < pairAssignments.length; i++) {
            if (isFullyContainedIn(pairAssignments[i].pair1, pairAssignments[i].pair2)) {
                numFullyContained++;
            }
        }
        return numFullyContained
    };

    function isOverlapping(pair1: number[], pair2: number[]) {
        return (pair1[1] >= pair2[0] || pair1[0] >= pair2[1]) && (pair1[1] <= pair2[0] || pair1[0] <= pair2[1])
    }

    const calculateAnswer2 = () => {
        let numOverlap = 0;
        for (let i = 0; i < pairAssignments.length; i++) {
            if (isOverlapping(pairAssignments[i].pair1, pairAssignments[i].pair2)) {
                numOverlap++;
            }
        }
        return numOverlap
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
