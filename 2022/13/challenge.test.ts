import {createCalculator,isRightOrder} from './challenge'
test('compare 1',()=>{
    const expected = true
    const input1 = [1,1,3,1,1]
    const input2 = [1,1,5,1,1]
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})
test('compare 2',()=>{
    const expected = true
    const input1 = [[1],[2,3,4]]
    const input2 = [[1],4]
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})

test('compare 3',()=>{
    const expected = false
    const input1 = [9]
    const input2 = [[8,7,6]]
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})

test('compare 4',()=>{
    const expected = true
    const input1 = [[4,4],4,4]
    const input2 = [[4,4],4,4,4]
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})

test('compare 5',()=>{
    const expected = false
    const input1 = [7,7,7,7]
    const input2 = [7,7,7]
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})


test('compare 6',()=>{
    const expected = true
    const input1 = []
    const input2 = [3]
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})

test('compare 7',()=>{
    const expected = false
    const input1 = [[[]]]
    const input2 = [[]]
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})

test('compare 7-1',()=>{
    const expected = false
    const input1 = [[]]
    const input2 = []
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})

test('compare 8',()=>{
    const expected = false
    const input1 = [1,[2,[3,[4,[5,6,7]]]],8,9]
    const input2 = [1,[2,[3,[4,[5,6,0]]]],8,9]
    const actual = isRightOrder(input1,input2);
    expect(actual).toBe(expected)
})

test('sample test', () => {
    const expected = 13
    const input = "[1,1,3,1,1]\n" +
        "[1,1,5,1,1]\n" +
        "\n" +
        "[[1],[2,3,4]]\n" +
        "[[1],4]\n" +
        "\n" +
        "[9]\n" +
        "[[8,7,6]]\n" +
        "\n" +
        "[[4,4],4,4]\n" +
        "[[4,4],4,4,4]\n" +
        "\n" +
        "[7,7,7,7]\n" +
        "[7,7,7]\n" +
        "\n" +
        "[]\n" +
        "[3]\n" +
        "\n" +
        "[[[]]]\n" +
        "[[]]\n" +
        "\n" +
        "[1,[2,[3,[4,[5,6,7]]]],8,9]\n" +
        "[1,[2,[3,[4,[5,6,0]]]],8,9]"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})

test('sample test 2', () => {
    const expected = 140
    const input = "[1,1,3,1,1]\n" +
        "[1,1,5,1,1]\n" +
        "\n" +
        "[[1],[2,3,4]]\n" +
        "[[1],4]\n" +
        "\n" +
        "[9]\n" +
        "[[8,7,6]]\n" +
        "\n" +
        "[[4,4],4,4]\n" +
        "[[4,4],4,4,4]\n" +
        "\n" +
        "[7,7,7,7]\n" +
        "[7,7,7]\n" +
        "\n" +
        "[]\n" +
        "[3]\n" +
        "\n" +
        "[[[]]]\n" +
        "[[]]\n" +
        "\n" +
        "[1,[2,[3,[4,[5,6,7]]]],8,9]\n" +
        "[1,[2,[3,[4,[5,6,0]]]],8,9]"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})


