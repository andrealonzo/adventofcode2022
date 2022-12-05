import {createCalculator} from './challenge'

test('parse move input', () => {
    const expected =
        [{
            amount: 1,
            from: 2,
            to: 1
        }, {
            amount: 1,
            from: 1,
            to: 2
        }
        ]
    const input =
        "[Z] [M] [P]\n" +
        " 1   2   3 \n" +
        "\n" +
        "move 1 from 2 to 1\n" +
        "move 1 from 1 to 2"
    const calculator = createCalculator(input)
    const actual = calculator.parseMoveInput(input);
    expect(actual).toStrictEqual(expected)
})

test('parse stack input with different heights', () => {
    const expected =
        [["Z"],["M","D"],["P"]]
    const input =
        "    [D]    \n" +
        "[Z] [M] [P]\n" +
        " 1   2   3 "
    const calculator = createCalculator(input)
    const actual = calculator.parseStackInput(input);
    expect(actual).toStrictEqual(expected)
})

test('parse stack input with the same height', () => {
    const expected =
        [["Z"],["M"],["P"]]
    const input =
        "[Z] [M] [P]\n" +
        " 1   2   3 \n" +
        "\n" +
        "move 1 from 2 to 1\n" +
        "move 1 from 1 to 2"
    const calculator = createCalculator(input)
    const actual = calculator.parseStackInput(input);
    expect(actual).toStrictEqual(expected)
})

test('sample input 1',()=>{
    const expected = "CMZ"
    const input ="    [D]    \n" +
        "[N] [C]    \n" +
        "[Z] [M] [P]\n" +
        " 1   2   3 \n" +
        "\n" +
        "move 1 from 2 to 1\n" +
        "move 3 from 1 to 3\n" +
        "move 2 from 2 to 1\n" +
        "move 1 from 1 to 2"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(input);
    expect(actual).toStrictEqual(expected)
})
test('move 2 to 1',()=>{
    const expected = "DCP"
    const input ="    [D]    \n" +
        "[N] [C]    \n" +
        "[Z] [M] [P]\n" +
        " 1   2   3 \n" +
        "\n" +
        "move 1 from 2 to 1"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(input);
    expect(actual).toStrictEqual(expected)
})

