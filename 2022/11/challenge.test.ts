import {createCalculator} from './challenge'

test("bigint modulo", () => {
    // @ts-ignore
    const expected = 0n
    // @ts-ignore
    const actual = 9n%3n
    //@ts-ignore
    expect(actual).toBe(expected)
})

test('sample test', () => {
    const expected = 10605
    const input = "Monkey 0:\n" +
        "  Starting items: 79, 98\n" +
        "  Operation: new = old * 19\n" +
        "  Test: divisible by 23\n" +
        "    If true: throw to monkey 2\n" +
        "    If false: throw to monkey 3\n" +
        "\n" +
        "Monkey 1:\n" +
        "  Starting items: 54, 65, 75, 74\n" +
        "  Operation: new = old + 6\n" +
        "  Test: divisible by 19\n" +
        "    If true: throw to monkey 2\n" +
        "    If false: throw to monkey 0\n" +
        "\n" +
        "Monkey 2:\n" +
        "  Starting items: 79, 60, 97\n" +
        "  Operation: new = old * old\n" +
        "  Test: divisible by 13\n" +
        "    If true: throw to monkey 1\n" +
        "    If false: throw to monkey 3\n" +
        "\n" +
        "Monkey 3:\n" +
        "  Starting items: 74\n" +
        "  Operation: new = old + 3\n" +
        "  Test: divisible by 17\n" +
        "    If true: throw to monkey 0\n" +
        "    If false: throw to monkey 1"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('sample test 2 20 rounds', () => {
    const expected = 10197
    const input = "Monkey 0:\n" +
        "  Starting items: 79, 98\n" +
        "  Operation: new = old * 19\n" +
        "  Test: divisible by 23\n" +
        "    If true: throw to monkey 2\n" +
        "    If false: throw to monkey 3\n" +
        "\n" +
        "Monkey 1:\n" +
        "  Starting items: 54, 65, 75, 74\n" +
        "  Operation: new = old + 6\n" +
        "  Test: divisible by 19\n" +
        "    If true: throw to monkey 2\n" +
        "    If false: throw to monkey 0\n" +
        "\n" +
        "Monkey 2:\n" +
        "  Starting items: 79, 60, 97\n" +
        "  Operation: new = old * old\n" +
        "  Test: divisible by 13\n" +
        "    If true: throw to monkey 1\n" +
        "    If false: throw to monkey 3\n" +
        "\n" +
        "Monkey 3:\n" +
        "  Starting items: 74\n" +
        "  Operation: new = old + 3\n" +
        "  Test: divisible by 17\n" +
        "    If true: throw to monkey 0\n" +
        "    If false: throw to monkey 1"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2(20);
    expect(actual).toBe(expected)
})
test('sample test 2 1000 rounds', () => {
    const expected = 27019168
    const input = "Monkey 0:\n" +
        "  Starting items: 79, 98\n" +
        "  Operation: new = old * 19\n" +
        "  Test: divisible by 23\n" +
        "    If true: throw to monkey 2\n" +
        "    If false: throw to monkey 3\n" +
        "\n" +
        "Monkey 1:\n" +
        "  Starting items: 54, 65, 75, 74\n" +
        "  Operation: new = old + 6\n" +
        "  Test: divisible by 19\n" +
        "    If true: throw to monkey 2\n" +
        "    If false: throw to monkey 0\n" +
        "\n" +
        "Monkey 2:\n" +
        "  Starting items: 79, 60, 97\n" +
        "  Operation: new = old * old\n" +
        "  Test: divisible by 13\n" +
        "    If true: throw to monkey 1\n" +
        "    If false: throw to monkey 3\n" +
        "\n" +
        "Monkey 3:\n" +
        "  Starting items: 74\n" +
        "  Operation: new = old + 3\n" +
        "  Test: divisible by 17\n" +
        "    If true: throw to monkey 0\n" +
        "    If false: throw to monkey 1"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2(1000);
    expect(actual).toBe(expected)
})


