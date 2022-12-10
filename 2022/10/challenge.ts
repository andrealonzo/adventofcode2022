export const createCalculator = (input: string): any => {
    const parseInput = (input: string): any => {
        return input.split(/\n/).map((line) => line.split(" "))

    }

    const commands = parseInput(input)
    const calculateAnswer1 = () => {
        let cycle = 1
        let sumSignal=0
        let register = 1
        for (let i = 0; i < commands.length; i++) {
            const command = commands[i]
            // console.log("command", command)
            if (command[0] === "noop") {
                cycle++
            } else {
                cycle++
                if((cycle-20)%40===0){
                    sumSignal += cycle*register
                    // console.log(cycle,register,cycle*register,sumSignal)
                }
                cycle++
                register += parseInt(command[1])
            }

            if((cycle-20)%40===0){
                sumSignal += cycle*register
                console.log(cycle,register,cycle*register,sumSignal)
            }

            console.log("register",register, "cycle", cycle, "command",command)


        }
        return sumSignal

    };


    const calculateAnswer2 = () => {
        let cycle =1
        let register = 1
        let output = "\n"

        function isInSprite(posToPrint: number) {
            console.log("register",register,"posToPrint",posToPrint-1, posToPrint >= register-1 && posToPrint <= register+1, "cycle", cycle)
            // return Math.abs(register - posToPrint)<=1;
            return posToPrint-1 >= register-1 && posToPrint-1 <= register+1;
        }

        const tick=() =>{
            cycle++
            const posToPrint = (cycle-1)%40

            if(isInSprite(posToPrint)){
                output +="#"
            }else{
                output +="."
            }
            if(posToPrint===0){
                output +="\n"
            }
        }
        for (let i = 0; i < commands.length; i++) {
            const command = commands[i]
            tick()
            if (command[0] === "addx") {
                tick()
                register += parseInt(command[1])
            }
        }

        console.log(output)
        return output

    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
