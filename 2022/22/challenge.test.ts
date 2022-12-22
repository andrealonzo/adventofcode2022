import {createCalculator} from './challenge'

test('sample test', () => {
    const expected = 6032
    const input =
        "        ...#\n" +
        "        .#..\n" +
        "        #...\n" +
        "        ....\n" +
        "...#.......#\n" +
        "........#...\n" +
        "..#....#....\n" +
        "..........#.\n" +
        "        ...#....\n" +
        "        .....#..\n" +
        "        .#......\n" +
        "        ......#.\n" +
        "\n" +
        "10R5L5R10L4R5L5"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})


