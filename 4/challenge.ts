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
        return assignments.map((assignment)=>{
            const pairs: string[] = assignment.split(",")
            const pairAssignment: PairAssignments = {
                pair1: pairs[0].split("-").map(Number),
                pair2: pairs[1].split("-").map(Number),
            }
            return pairAssignment
        })
    }

    const pairAssignments: PairAssignments[] = parseInput(input)

    function isFullyContainedIn(pair1: number[], pair2: number[]) {
        return (pair1[0] >= pair2[0] && pair1[1] <= pair2[1]) || (pair2[0] >= pair1[0] && pair2[1] <= pair1[1])
    }

    const calculateAnswer1 = () => {
        return pairAssignments
            .filter((pairAssignment)=>isFullyContainedIn(pairAssignment.pair1, pairAssignment.pair2))
            .length
    };

    function isOverlapping(pair1: number[], pair2: number[]) {
        return (pair1[1] >= pair2[0] || pair1[0] >= pair2[1]) && (pair1[1] <= pair2[0] || pair1[0] <= pair2[1])
    }

    const calculateAnswer2 = () => {
        return pairAssignments
            .filter((pairAssignment)=>isOverlapping(pairAssignment.pair1, pairAssignment.pair2))
            .length
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
