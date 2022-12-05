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
    const actual = calculator.parseInput(input);
    expect(actual).toStrictEqual(expected)
})

test('parse stack input', () => {
    const expected =
        [["Z"],["D","M"],["P"]]
    const input =
        "    [D]    \n" +
        "[Z] [M] [P]\n" +
        " 1   2   3 "
    const calculator = createCalculator(input)
    const actual = calculator.parseStackInput(input);
    expect(actual).toStrictEqual(expected)
})

test('parse stack input with different heights', () => {
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


