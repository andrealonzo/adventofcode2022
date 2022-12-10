export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
        return input.split(/\n/).map((line) => line.split(" "))

    }

    const commands = parseInput(input)
    const calculateAnswer1 = () => {

        let cycle = 1
        let sumSignal = 0
        let register = 1
        for (let i = 0; i < commands.length; i++) {
            const command = commands[i]
            cycle++
            if (command[0] === "addx") {
                if ((cycle - 20) % 40 === 0) {
                    sumSignal += cycle * register
                }
                cycle++
                register += parseInt(command[1])
            }
            if ((cycle - 20) % 40 === 0) {
                sumSignal += cycle * register
            }
        }
        return sumSignal
    };


    const calculateAnswer2 = () => {
        let cycle = 1
        let register = 1
        let output = "\n"

        function isInSprite(posToPrint: number) {
            return posToPrint >= register - 1 && posToPrint <= register + 1;
        }

        const tick = () => {
            const posToPrint = (cycle - 1) % 40
            output += isInSprite(posToPrint) ? "#" : "."
            if ((cycle) % 40 === 0) {
                output += "\n"
            }
            cycle++
        }
        for (let i = 0; i < commands.length; i++) {
            const command = commands[i]
            tick()
            if (command[0] === "addx") {
                tick()
                register += parseInt(command[1])
            }
        }
        return output
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
