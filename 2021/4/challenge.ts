interface space {
    num: number,
    marked: number
}

export const createCalculator = (input: string): any => {
    let numbers: number[]
    let boards: space[][][]

    const parseInput = (input: string): any => {
        const inputArr = input.split(/\n\n/)
        //@ts-ignore
        numbers = inputArr.shift().split(",").map(Number)
        boards = inputArr.map((boardString) => boardString.split(/\n/).map((rowStr) => rowStr.trim().split(/\s+/).map((numStr) => {
            return {
                num: parseInt(numStr.trim()),
                marked: 0
            }
        })))
    }

    function isWinner(board: space[][]) {
        //check if rows are winners
        for (let j = 0; j < board.length; j++) {
            const row = board[j]
            const sum = row.reduce((prev, cur) => prev + cur.marked, 0)
            console.log("row", row)
            console.log("sum", sum)
            if (sum === 5)
                return true
        }
        //check if columns are winners
        for (let i = 0; i < board.length; i++) {
            const sum = board.map((rows) => rows[i]).reduce((prev, cur) => prev + cur.marked, 0)
            if (sum === 5) {
                return true
            }
        }
        return false
    }

    function calculateScore(winningBoard: space[][], winningNumber: number) {
        console.log("winning board", winningBoard)
        let sum = 0

        winningBoard.forEach((row) => {
            const filteredRow = row.filter((item) => item.marked === 1)
            console.log(filteredRow)

            sum += row.filter((item) => item.marked === 0).reduce((p, c) => p + c.num, 0)
        })
        console.log("sum, winning",sum,winningNumber)
        return sum * winningNumber

    }

    const calculateAnswer1 = () => {
        parseInput(input)
        //@ts-ignore
        let winningBoard

        //@ts-ignore
        let winningNumber
        numbers.forEach((number) => {
            boards.forEach((board, b) => {
                board.forEach((row, r) => {
                    row.forEach((space, n) => {
                        // console.log("checking num", num)

                        //@ts-ignore
                        if (!winningBoard && space.num === number) {

                            space.marked = 1
                            // console.log(marks[b])

                            console.log("found match", space)
                            // console.log(marks[b])
                            console.log("board", board)

                            //@ts-ignore
                            if (!winningBoard && isWinner(board)) {
                                console.log("board", board)
                                console.log("found winner", board)
                                winningNumber = number
                                winningBoard = board
                            }
                        }
                    })
                })
                // console.log(marks[b])
            })
        })

        //@ts-ignore
        return calculateScore(winningBoard, winningNumber)
    };


    const calculateAnswer2 = () => {
        parseInput(input)
        //@ts-ignore
        let winningBoard

        //@ts-ignore
        let winningNumber
        let numWinners = 0
        numbers.forEach((number) => {
            boards.forEach((board, b) => {
                board.forEach((row, r) => {
                    row.forEach((space, n) => {
                        // console.log("checking num", num)

                        //@ts-ignore
                        if (numWinners < boards.length && space.num === number) {

                            space.marked = 1
                            // console.log(marks[b])

                            console.log("found match", space)
                            // console.log(marks[b])
                            console.log("board", board)

                            //@ts-ignore
                            if (isWinner(board)) {
                                winningNumber = number
                                winningBoard = board
                                numWinners++
                                console.log("found winner", board)
                                console.log("found winning number", winningNumber)
                                console.log("num winners", numWinners)
                            }
                        }
                    })
                })
                // console.log(marks[b])
            })
        })

        //@ts-ignore
        return calculateScore(winningBoard, winningNumber)
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
