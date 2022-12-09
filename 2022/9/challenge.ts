export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
        return input.split(/\n/).map((command) => command.split(" "))
    }

    const commands = parseInput(input)
    const start =15
    let tailVisits: any = {}

    function calculateNextKnot(tail: { r: number; c: number }, head: { r: number; c: number }) {
        if (Math.abs(tail.c - head.c) <= 1 && Math.abs(tail.r - head.r) <= 1)
            return tail
        if (tail.r === head.r) {
            if (tail.c < head.c) {
                return {
                    r: tail.r,
                    c: tail.c + 1
                }
            } else if (tail.c > head.c) {
                return {
                    r: tail.r,
                    c: tail.c - 1
                }
            }
        } else if (tail.c === head.c) {
            if (tail.r < head.r) {
                return {
                    r: tail.r + 1,
                    c: tail.c
                }
            } else if (tail.r > head.r) {
                return {
                    r: tail.r - 1,
                    c: tail.c
                }
            }
        } else if (Math.abs(head.r - tail.r) == 2 && Math.abs(head.c - tail.c) == 2) {
            if (tail.r < head.r && tail.c < head.c) {
                return {
                    r: tail.r + 1,
                    c: tail.c + 1
                }
            } else if (tail.r < head.r && tail.c > head.c) {
                return {
                    r: tail.r + 1,
                    c: tail.c - 1
                }
            } else if (tail.r > head.r && tail.c > head.c) {
                return {
                    r: tail.r - 1,
                    c: tail.c - 1
                }
            } else if (tail.r > head.r && tail.c < head.c) {
                return {
                    r: tail.r - 1,
                    c: tail.c + 1
                }
            }

        } else if ((head.r - tail.r) === 2) {
            return {
                r: head.r - 1,
                c: head.c
            }
        } else if ((tail.r - head.r) === 2) {
            return {
                r: head.r + 1,
                c: head.c
            }
        } else if ((head.c - tail.c) === 2) {
            return {
                r: head.r,
                c: head.c - 1
            }
        } else if ((tail.c - head.c) === 2) {
            return {
                r: head.r,
                c: head.c + 1
            }
        }


        return tail
    }

    function getCharacter(knots: { r: number, c: number }[], i: number, j: number) {
        for (let k = 0; k < knots.length; k++) {
            if (knots[k].r == i && knots[k].c == j) {
                if (k == 0)
                    return "H"
                return k
            }
        }
        return ".";
    }

    function printKnots(knots: any) {
        let str = ""
        for (let i = 0; i < 40; i++) {
            let charStr = ""
            for (let j = 0; j < 40; j++) {
                charStr += getCharacter(knots, i, j)
            }
            str = charStr + '\n' + str + '\n'

        }
        console.log(str)

    }

    const calculateTailVisits = (numKnots: number) => {
        let knots = new Array(numKnots).fill({r: start, c: start});
        console.log("starting knots", knots)
        tailVisits[knots[knots.length - 1].r.toString() + "," + knots[knots.length - 1].c.toString()] = 'T'

        for (let i = 0; i < commands.length; i++) {
            const direction = commands[i][0]
            const amount = commands[i][1]
            for (let j = 0; j < amount; j++) {
                if (direction === "U") {
                    knots[0] = {
                        ...knots[0],
                        r: knots[0].r + 1
                    }
                } else if (direction === "D") {
                    knots[0] = {
                        ...knots[0],
                        r: knots[0].r - 1
                    }
                } else if (direction === "L") {
                    knots[0] = {
                        ...knots[0],
                        c: knots[0].c - 1
                    }
                } else if (direction === "R") {
                    knots[0] = {
                        ...knots[0],
                        c: knots[0].c + 1
                    }
                }
                for (let k = 0; k < knots.length - 1; k++) {
                    // console.log("prev knots[k+1], knots[k]",knots[k+1], knots[k])
                    knots[k + 1] = calculateNextKnot(knots[k + 1], knots[k])
                    //console.log("new knots[k+1]",knots[k+1])
                }
                // console.log("knots ending", knots)
                // printKnots(knots);
                tailVisits[knots[knots.length - 1].r.toString() + "," + knots[knots.length - 1].c.toString()] = 'T'
            }
            printKnots(knots);
            // console.log("knots ending after command", knots)
        }
        console.log("tailVisits", tailVisits)
        return Object.keys(tailVisits).length

    }

    const calculateAnswer1 = () => {
        return calculateTailVisits(2)
    };


    const calculateAnswer2 = () => {
        return calculateTailVisits(10)
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
