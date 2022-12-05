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
        [["Z"], ["M", "D"], ["P"]]
    const input =
        "    [D]    \n" +
        "[Z] [M] [P]\n" +
        " 1   2   3 "
    const calculator = createCalculator(input)
    const actual = calculator.parseStackInput(input);
    expect(actual).toStrictEqual(expected)
})

test('parse stack sample input', () => {
    const expected = [
        ['W', 'R', 'F'],
        [
            'T', 'H', 'M',
            'C', 'D', 'V',
            'W', 'P'
        ],
        ['P', 'M', 'Z', 'N', 'L'],
        ['J', 'C', 'H', 'R'],
        [
            'C', 'P', 'G',
            'H', 'Q', 'T',
            'B'
        ],
        ['G', 'C', 'W', 'L', 'F', 'Z'],
        [
            'W', 'V', 'L',
            'Q', 'Z', 'J',
            'G', 'C'
        ],
        [
            'P', 'N', 'R',
            'F', 'W', 'T',
            'V', 'C'
        ],
        [
            'J', 'W', 'H',
            'G', 'R', 'S',
            'V'
        ]
    ]
    const input ="    [P]                 [C] [C]\n    [W]         [B]     [G] [V] [V]\n    [V]         [T] [Z] [J] [T] [S]\n    [D] [L]     [Q] [F] [Z] [W] [R]\n    [C] [N] [R] [H] [L] [Q] [F] [G]\n[F] [M] [Z] [H] [G] [W] [L] [R] [H]\n[R] [H] [M] [C] [P] [C] [V] [N] [W]\n[W] [T] [P] [J] [C] [G] [W] [P] [J]\n 1   2   3   4   5   6   7   8   9"
    const calculator = createCalculator(input)
    const actual = calculator.parseStackInput(input);
    expect(actual).toStrictEqual(expected)
})

test('parse stack input with the same height', () => {
    const expected =
        [["Z"], ["M"], ["P"]]
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

test('sample input 1', () => {
    const expected = "CMZ"
    const input = "    [D]    \n" +
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
test('move 2 to 1', () => {
    const expected = "DCP"
    const input = "    [D]    \n" +
        "[N] [C]    \n" +
        "[Z] [M] [P]\n" +
        " 1   2   3 \n" +
        "\n" +
        "move 1 from 2 to 1"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(input);
    expect(actual).toStrictEqual(expected)
})

