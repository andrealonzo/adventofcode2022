import {createCalculator} from './challenge'

test('sample test', () => {
    const expected = 152
    const input = "root: pppw + sjmn\n" +
        "dbpl: 5\n" +
        "cczh: sllz + lgvd\n" +
        "zczc: 2\n" +
        "ptdq: humn - dvpt\n" +
        "dvpt: 3\n" +
        "lfqf: 4\n" +
        "humn: 5\n" +
        "ljgn: 2\n" +
        "sjmn: drzm * dbpl\n" +
        "sllz: 4\n" +
        "pppw: cczh / lfqf\n" +
        "lgvd: ljgn * ptdq\n" +
        "drzm: hmdt - zczc\n" +
        "hmdt: 32"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('sample test 2', () => {
    const expected = 301
    const input = "root: pppw + sjmn\n" +
        "dbpl: 5\n" +
        "cczh: sllz + lgvd\n" +
        "zczc: 2\n" +
        "ptdq: humn - dvpt\n" +
        "dvpt: 3\n" +
        "lfqf: 4\n" +
        "humn: 5\n" +
        "ljgn: 2\n" +
        "sjmn: drzm * dbpl\n" +
        "sllz: 4\n" +
        "pppw: cczh / lfqf\n" +
        "lgvd: ljgn * ptdq\n" +
        "drzm: hmdt - zczc\n" +
        "hmdt: 32"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})

test('sample test 3', () => {
    const expected = 301
    const input = "root: pppw = sjmn\n" +
        "dbpl: 5\n" +
        "cczh: sllz + lgvd\n" +
        "zczc: 2\n" +
        "ptdq: humn - dvpt\n" +
        "dvpt: 3\n" +
        "lfqf: 4\n" +
        "humn: 5\n" +
        "ljgn: 2\n" +
        "sjmn: drzm * dbpl\n" +
        "sllz: 4\n" +
        "pppw: cczh / lfqf\n" +
        "lgvd: ljgn * ptdq\n" +
        "drzm: hmdt - zczc\n" +
        "hmdt: 32"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})



