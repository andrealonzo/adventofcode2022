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
test('sample test real ', () => {
    const expected = 189140
    const input = "                                                  ............#..#..................#............#.......#..............#.............................\n" +
        "                                                  ...#...#...#.......#............................#.#.....#..#...........................#......#.....\n" +
        "                                                  #.....#....#....#...............#..#.........#..................#......................#.##......#..\n" +
        "                                                  ...#........#.....#...........#.......#.......###....#.......#.............##...........#.#.........\n" +
        "                                                  ..............#.......#............................#.....#..........#....#.........................#\n" +
        "                                                  ...................#.#........#.......#.......#.........#......................#......#.#...#.....#.\n" +
        "                                                  ......#.#......#....#...........................#..........##..............#................#..#....\n" +
        "                                                  ....#...#..#...............................................................#.............#..........\n" +
        "                                                  .###.#........#.................#............#....................#....................#............\n" +
        "                                                  .........................#....#............#.....#.......#......#........#.....#..........#.........\n" +
        "                                                  ..............#....#.........#...#...#...........#..............#....##................#........#...\n" +
        "                                                  ..............#......#.#...................#.....................................#......#....#......\n" +
        "                                                  ..#......#.#................#........#...........#...#...#....#...............#.....#...............\n" +
        "                                                  .#..#...##................#......#..........................#.#....................#...............#\n" +
        "                                                  ......................#..#............#..#...............#..............##........#..............#..\n" +
        "                                                  ......#..#........#.......#..........#.........#...#.....#............##...#.##...#...............#.\n" +
        "                                                  .......#....#..#.............#.........#...........#........#........#.........#..#...........#..#.#\n" +
        "                                                  ...................#............#...............#.....#.............#.#......................#......\n" +
        "                                                  ...#..........#.................#..........#..#.................#.......#..#....#...#...............\n" +
        "                                                  ...#..##...#.....#.....................##...............#.........##.#.......###......###.#.#.##....\n" +
        "                                                  .............#.....#..............#...............#..........#.............................##.......\n" +
        "                                                  ...#......#....#.............................#..................#.#....#...............#....#.......\n" +
        "                                                  ....#..................#................#......#..................................#..##...#.........\n" +
        "                                                  ...#.......#............##...#..#...#...##.....#..#....................................#............\n" +
        "                                                  .#.....#...#..........................#.........................................#.#......#........#.\n" +
        "                                                  .........#.......................###..........#..............................#......#..##...........\n" +
        "                                                  ..................#.#...#.#..............##...................#........#....................#.#.....\n" +
        "                                                  ........#...........................#.........#.....#...#......................#..........#.........\n" +
        "                                                  ..........#........#........#.........................#................#.................#......#...\n" +
        "                                                  .......................#.#.........................#.....#....#......#.....#..#......#..............\n" +
        "                                                  ....###.........#......#..........#...............#......#...........#.....#....#.......#...........\n" +
        "                                                  ................#.#...#............#..#.........#..................#...................#...#........\n" +
        "                                                  ....#........#.............#..........................#...#......#.....#.#......#..............###..\n" +
        "                                                  ...#...........................#..#...................##.....##......#.#.......#..............#.....\n" +
        "                                                  ...#.............#...#..................#........#........#......#...#..................#....##.#...\n" +
        "                                                  .#...#.......##......#.....#................#..#.....#...........#.......#..........................\n" +
        "                                                  ..............#......##......................#.#.......#............................................\n" +
        "                                                  ...............................#........#..........................................#......#.........\n" +
        "                                                  ..#..#...........#..#.......#.#..........#......#.........#...#..................#.#.......#..#.#...\n" +
        "                                                  ........#......##.#......#.........#...#.........#................#...............#................#\n" +
        "                                                  ....#..........#..........................#..#................................#......#....#.........\n" +
        "                                                  ...#.............##........#......#.........#...................................#.......#......#.#..\n" +
        "                                                  ..#....#......##.#.............#................#......#....................................#......#\n" +
        "                                                  ...............................#........#.....#.#.............#.#......#........#.............##....\n" +
        "                                                  .......#..........#.........#..#..........#.............#.............................#..#..........\n" +
        "                                                  ......#....#...#.##.................#...............##..........................#................#..\n" +
        "                                                  ....#...........................#.....#....................#.......#.....................#..........\n" +
        "                                                  .....####........#.....#...#.....#.#.#.....#............................#.....................#.....\n" +
        "                                                  .....................##..................#..........#.........##......#....................#....#...\n" +
        "                                                  .......................#...........................................#......#.#.......................\n" +
        "                                                  ....#........#...................................#\n" +
        "                                                  ...#........#............................#..#...##\n" +
        "                                                  #.....#.............#..........#.......##...#..##.\n" +
        "                                                  .#.#.#..#......................#........#.....#...\n" +
        "                                                  ........................#..............#..........\n" +
        "                                                  .............................#................#...\n" +
        "                                                  .#........#.....................##.#.#.....#...#..\n" +
        "                                                  .....#.#....#.........#....#..............##...##.\n" +
        "                                                  .#...................#...#..........##............\n" +
        "                                                  ....#........##.......#.................#.....##..\n" +
        "                                                  ....#....##.....#...#..#..##....................#.\n" +
        "                                                  .............................##......#............\n" +
        "                                                  ..............#.................#.............#...\n" +
        "                                                  .......#...#...........#..#....#........#...##....\n" +
        "                                                  .......................#......#...........#...#...\n" +
        "                                                  ........................#.........#.............#.\n" +
        "                                                  .....#...........#................................\n" +
        "                                                  ....#..........#.#....#..#........................\n" +
        "                                                  ......#.....#..##.....###.................#.......\n" +
        "                                                  .........................#........#.......#.....#.\n" +
        "                                                  ........###..##.##.........#...........##....#....\n" +
        "                                                  ....#...#................##.#..........#.#........\n" +
        "                                                  ...........#...........#..#...#.......###.........\n" +
        "                                                  .........................#.#...#.....#....#.#.....\n" +
        "                                                  ..##..#............#...........#.....#.#..........\n" +
        "                                                  ..#...........#..#...........#...#.......#.....#..\n" +
        "                                                  #.......#.........#.....#.....#......#....#..#....\n" +
        "                                                  ..#..#.....#.#.................................#..\n" +
        "                                                  .............#.................#..#...............\n" +
        "                                                  ....#..............#............#.................\n" +
        "                                                  ..#.#......###..........##........#...............\n" +
        "                                                  .......#.............#...#........................\n" +
        "                                                  .#.......#..........................#.....##......\n" +
        "                                                  ...........#.....#...#.............#..............\n" +
        "                                                  #...........#.................##......#..##.......\n" +
        "                                                  .##....#..............#........#...........#......\n" +
        "                                                  .#...........#.#...#..#.......#.....#.............\n" +
        "                                                  .........#............#...............#...........\n" +
        "                                                  ....#.....................#..................#....\n" +
        "                                                  .#........#......#...........................#..#.\n" +
        "                                                  ..................#...#..........#...............#\n" +
        "                                                  .....................#..................#.........\n" +
        "                                                  ............#.....#.....#.........................\n" +
        "                                                  .........#........................##.............#\n" +
        "                                                  .#..#...........##.........#.....#....#.....#.....\n" +
        "                                                  .................................#....##..........\n" +
        "                                                  ..##.............#.....#..#...#...........#...#...\n" +
        "                                                  ..............................#.#.........#.......\n" +
        "                                                  ..................#......#..#.....................\n" +
        "                                                  .........#.........#...#.....#..#...........#....#\n" +
        "#.........................#......#...........#..##.#................#.................#...#.........\n" +
        ".................#............................#..............#...#..#.........#....#.......#.#.#....\n" +
        "##................##.......................#......................#.........#.......................\n" +
        ".........#......................#...........#...#......#..#........#...#....##........#.#......#....\n" +
        "..............#.......#........#..#...#........#........#..#........#.............#.#.#......#...#.#\n" +
        ".#.....#...#..............#.#.............#.#...#.....................#....#............#...........\n" +
        "...#................#..........#.............##.........................#.........#..#.........##...\n" +
        ".....................................##.#...#.#................#.................#..................\n" +
        "...........................#........#...................#.............#......#............#.#.......\n" +
        "....#.................#....#..#......................#.............#................................\n" +
        "........##.....#......#.#...........##................#....................#........#......#.....##.\n" +
        "#...................#.................................#....................#...#......#....#..##....\n" +
        "...................#....##..#.................#........#.........##.....................#...#....#..\n" +
        "..........#...#..............#.......#................#...........#..........#..#..#..#.........#...\n" +
        ".............#..#....#.....#......#...........#...........#........#.......#..#.#.##.....##......#..\n" +
        "....#.....#..#..............#...............#.......#.....................#.................#.......\n" +
        "...........#..........................#.........#.#....#.............................#.....#........\n" +
        "..............#........#....#.........#........#..#........#....#................#................#.\n" +
        ".....#............#.............#.........................................#.....##....#..........#..\n" +
        ".........#..........#...............................#..#...........#...#....#.................#.....\n" +
        "..#...........#.....................#....#..........................#.........#.....................\n" +
        "..............#.#....#.......#.....#..#.................#............#......#..................#.#..\n" +
        "...#...............#........#............#....#........#..........##.#....##...........##...........\n" +
        ".....#......#............#.........#.........#............#..............................#..........\n" +
        "...........#.#........#....#.....#.............................................#....................\n" +
        "........#......#..............................#.#...................#.#...........#.#...............\n" +
        ".#...#............#.......#......#...#.#...#...#....#........#................##..#.................\n" +
        "...........................#..........................#.....#..................#.........#..........\n" +
        "#..#..............#.#...............#..........##..........##......................#....#...........\n" +
        ".#................#......#.................#..............#.................#.......................\n" +
        "............#............#...#.........#.#.............................#...................#.....#..\n" +
        ".......#.............#.....#..................#.......#..............#..............................\n" +
        ".....#.......#.#.#..#.....#.....#.#.#.......#.#.....##..........................#...................\n" +
        "......##.......##.....#....#........................#..#...........#............................#...\n" +
        "........#..##..#................#.............#..........#..#.....................#..............#..\n" +
        "........#..........#..................##............................#......#..................#...#.\n" +
        "............#..................#...........#....#....#.............#.....................#...#..#...\n" +
        "....#.............##.#.........#.#......#.#.##..............#.....#......#.............#....#......#\n" +
        "......#.............#.......#.....................#.....#......#..#.................................\n" +
        "...#................#....#.#............................#...#..#...........#............#..#........\n" +
        "......#...................#...#......#........#.........#.........#..........#......#...#.......#...\n" +
        ".#.....#...................#.......#.....##......#................##.....##.#......#................\n" +
        "...#............#.........................#...................#...#..........#.#...#..#.#.......#...\n" +
        "......##............#.#............#..#............#.......................#........#.#...#....#..#.\n" +
        ".............................................................#.....................#....#.##........\n" +
        "..#................#..#....#....#.........................#.#.....#......................#....#.#...\n" +
        ".........................#...#.....................#.........#..........#.#......#................#.\n" +
        "..#.#...#........#....................##.............#...............#.....#.................#......\n" +
        "........#.......#.#...........#.................#....#..............#..........#.#.#................\n" +
        "........#.#.###............##............#........#...........................#...#.................\n" +
        "........................................#.........\n" +
        "..........##.#......#.............................\n" +
        "..............#........#.....#.#.#..............#.\n" +
        "....#...........#.#.#................#..#.......#.\n" +
        "..#...#.##...........#............................\n" +
        "..#.....#..#............#....................#....\n" +
        ".........#....#................................#..\n" +
        "............#.......#.......#...............#.....\n" +
        "............................#...#......##.........\n" +
        "......#.#...............#.........................\n" +
        "...............#...............#............#.#...\n" +
        "...#.#.........#....#.....#......#................\n" +
        "......#.....#.....................................\n" +
        "..........#....#....#..#.....#..............#.....\n" +
        ".............##.................#.................\n" +
        "...#..#.#................#..................#.....\n" +
        "........#.#.#....#......................#.........\n" +
        "..#................................#..#.......#...\n" +
        "#..........#..##.................#................\n" +
        ".#..........#..##...............##....#...........\n" +
        "..................##...........#.................#\n" +
        "..#..........#...........................#........\n" +
        ".......##...#.#...#.#...........###...............\n" +
        ".....#..#...#....#..#.....#................#......\n" +
        "..#........#......................................\n" +
        "..#.............##................#...#...........\n" +
        "............#....#..........#.#...................\n" +
        ".......#............#..#.....#.......##.......#...\n" +
        "............................#.....................\n" +
        "...#..#......#..................#.................\n" +
        "...............#......#...#...#...........#.......\n" +
        "......#...........................#...#.#..##.##..\n" +
        ".....#..........#..........................#......\n" +
        "...#...........##..#.........................#....\n" +
        "...#........#................#.............#....#.\n" +
        ".......##.......##.#......#................#......\n" +
        ".#........#........#...........#...............#..\n" +
        "..#............................#..#...............\n" +
        "...........................#.......#.....#........\n" +
        ".................#....##.....#..#..#....##..##....\n" +
        ".....................#.............#.....#........\n" +
        "..#..........................................#.#..\n" +
        ".........#..#.#..#...#................#..#.#......\n" +
        "..................#...#.#.......#.................\n" +
        "...#.........#.......#...###...........##...#.....\n" +
        "........................................#.........\n" +
        "......##......#............#.....#.......#..#.###.\n" +
        "#.....................#.......#.....#.............\n" +
        "...##..#..........#........#.....#.#......#.......\n" +
        "...#..#..#......#...#.............#.......#...#...\n" +
        "\n" +
        "15L3R31L27R6R16R11L19R4L15R3L42R22L43L11R43L39L46L2L23R39R9L35L22L6R23L24L11R44L39L18R12R27R42R8R20R45L23L22R49R24R28L12L2R9R45R7L38L32L20L20L27R1R27L36L10R11R20R41R24L50L22R6L45L34L39R15R16L11L16R13R1R24R39L23L10R16R15L42R26L36R41R34L48R5R28L4R45R46L24R7L19L10L48L15L2R8L4L22R4L8R35R2L7L16R41L14R19R40L15L35R50L13L47L24L21L37R14L28L5R6R10L3L14L22R5L27R2L45L38L19R29R13R9L18R41L16R6L24R11R8R30L40R20L30R43L4L42R12R14L12R38L8L12L48R32R11R44R34L36L2R40L23L6R22R41L43L36L10R45R38R10R4L2R19R27L45L16R39R40R36R26R33L44R10R37R45R32L16L24L18R43R43R31R3R47R12R2R29R11R22L35L41L16R5L33L35L28L14L15R20R8L14L22L7L48L38L1R36R40L28L16R47L46R44R32L9R50L13R43R13R15L4R49L27L47L33L44L2R40R3L32R8R49R33R11R19L9L32L15R25R3L3R22R35L6L16L10L24R2L43L12L13L28L36R12R25R40R19R50L48L45R15R11L35R37L3L17L15R21L3R38L2L43L27L5L7L32R42L38R22L42L6R45R19L27R38R2L39L24L27R48R44L11L35L7L20L34R12L21L9L40R47R2R43L40R4R36R38L7L18L11L38R42L50L5L8R17R40L32L43R49R44L19R42R20R23L16R49L29R41L11L46R17R26L33L15L11R42L43R45L27R13L32L5L39R46R47R14L21L23L28L49L25R31R35R26L19R38R8L13R25L42L50L34L46L15R47L42R13R18L38R45R1L43R4L47R46L15R36L18L31R19R34L28L32R34L38L27R21R11R35L13L6L32R1R39L22L3R4L40L50L43R39R27R13R3R42L46L8L32R33R44L26R18L18L2L34L14R25R48L24L35R39R25L1L46L21R32R17R15R22R8L5R48L22L32L48R10R36R6L37L33R39R20L4R46R45R36R11L29L49L5R47R19L32L28L24R1R11R17L12R39R11L36R16R22R20L1L31L16L40L40L44R38L7L2L17R3R15L11L1L42L30L30L22R1L33R45L12R29R30R1L44R20R11L23L33R27R45L33R26R28L14L19L47L38R13L12R27R7L12R40R4R29R29L30L48R26R18R46R40L17L27L41L19R17R50R8L26R11L19L2R50R40R30L30R31L40L38L31L25L11L9L13L4L8L39L18R15L38L38L16R37L10R28L49L30L20R6L16R10L45R15L45R48R33L48L47L30R31L16L16R4L25R48R39R43L24R28L2R31R29L40R27R23R26R40L6L45L30L41L11R30R13R16L2L28L27L39R16R10R47L44R21R5L2R21L17R17R5L10L33L22L5R11R35R1R40L17L47R3R2R39L16L9L25R30L27R19L8L39R3R26L9L50R32L18R38R19R4L33L19L10L23R32L15L24R32L20R21L34R47L23L3R14R46R14L30R25R10R25R12L2R3R36R21L31R17R48L36R44R7R22R6R8L20L46R41R4R7L40R36L34L31R30L25L24L50L25R2L18L4R8L14R20L10R26R33R49L35L47R26R30L32R22R10L37L48R22L46L7R32L20R21L23R38L36L22L2R18L24R34R34R27L21L47R7L4R1R9L37L13L48L6R31L44R20L37L44R6R33L44R4L43R12R4L42L3L36L48L45R49R42L45L23R15R9R13L42L47L37R16R23R28L26L37L17L47R9L13L16R34L28L26R33L5R18R50L42R46L24L13L25R33L24R49L44R45R25R24L28R41L43R17L15L9L10R10L37R17L1L9R15L43R43R48L19R15R14R16L22L31R11L4L48L45R47L38R1R18R2R44L13R3R42R39R44L46L12L15R38R4L13R36L31L46R43L35L39L40R28L11R36L30R7L13R36L2L12R26L8R50L44R2R18R46R8L37R27R12L20L31L5R44L5R39R42R17R8R46L22L4R42R35L6L3L27R30L24R28L41L5R50R38L23R6R40L28R19L35R35R5R49L23R6L35L35R12L37L3R44L1L42L39L47R11L49R43L42L50R5L40L36R17L20R23R44L34L49R13L20L23R30R37R8L8R5R23L32L27L7R48L49L21L37R5L12R46R20L27R5L40L5L41L6R34R7L24L22R26R16L38R2L14L9R4L29L24L33L5R21R19L43L36R49L29R32L15R22L42R11R37R38R20L8R23L4L5L5R39R16L43L44R1L39R19R15R5R8L20R26R38L16L37L47L38R38R18R30L27L17R29L22R34R25L5L49R39R20L9L31L45R33R41L11R9R45L35L9L28L8R4R19R15L27R11R9R32L38R26L10L47R9R3R31R9R24L12L19L32L49L29R6L24L38L50L27L34L32L36R50L1R27R7R11L4R28L21R41R26L16R26L45R44R45R35R43R28L41L26L30L33R15L31L47R43R32R25L7R37R40L38L46R48R22R1R38L48L35R42L29R44R16R30R24L31L44R31R33R6L10R35L46L11R49R11R25L2R39L49R1R3R28L23R12L20L6R47L2L24L49L42R46R37L3L50R45R50R41R15L22L36L46L15L26R48R48R49L31R38R6R10L41R34L24R20R41L23R47R31L29L24R13L46R23L36L23R32R12L30L49L22R45L28L1L45L24L15R31R32L10L49L16L32R46R15R40L3R35L23R37L36L21R37R27L8R40L37R15R40R3R3R24L47L50R16L37L17L11R19L14R33R1L25R14R20L43R30L50R7R8L2R17R11R36R2R33R8R24R36L1L9R40L29R2L14L41R25L11R21L50L11L45L8R47R44L45L20R2L50L27L42L40L34R23R11L16R21L49L42R10L32R24R15R36L36R46L7L4L1L25L38L41R49R5L3L8R29R4L41L25R28R47L36L50R23L35L43L44R32R33R46R19L41L9R45R39L30R50R9R26L2R30R42R24L34R18L20R47L19R48L37R11L9L4L27R31L47L45L29R47R46L45R12R40R20L28R42R50R1R13R5R40L5L4L23R44L3R28R4R20R2R23R3R19L2R36R28R44L21L37R33R23L1L31R35L37R12L35R8R47L11R21L1L28L20L34R14L36L34L30R34R35R11L3R35L6R15R12L46R30R21R26R43R25R22R11L7L2L43R9L14R25R26R42L1L32L23R13R34L10L16R21R33L17L31R36R2R17R1L41L18R29L21L11L23R11L45L40L34R37R35R11R32L46L24R38R1L37L47R1L45R10L30L15L35L40L19R11L25L48R17R29L10L17L39R43L26R2R5R20R11R41L37R2L22R4R10L31R40L7L34R47R20L29L42L12R19L23R36R34R29R11R47L9L26L50R47L4R14L7R38R32L11L2L11L26L36L1L45L38R19L41R9L25L22R39R10R37L50R34L45L11R47L18L38R33R32L23L1L45L50R9L43L32L35L19L36L6R34L34L33L18L26L37L1R27L50R30L4R38L41R5R18L4L46R29L43L18L40R42L19L41R44R11L5R1L24R20R19R44L7R1L30R29R32L20L43L30L41R22R34R46L22R19L6L40L5R4L33L17R6R10R34L10L15L47L34R15R38L3L24R48R23L7L2L49R44L31R23R11R38R22L48L3R16L1R19R40R15L28R17L43L39R22L5R38R16R8R15L27L41R31L9L11R22R47L11L10L18L31R49L35L26R10L34R45R41R20R28R2L36L40R31R7L26L21L39L19R20L23R22R6R6R1L31R1L40R42R2L40R44L17R36L5L18R29R44L50L14R16L17R7R18R30R29L22R18R26R26L13L21R13R39L43R23L11L7R25L28R40R4R29L30L48L39L16L15R39R19R4L19L21R4R28L39L46L47L19R22L10L42R10L43L44L3L21R30R3L42L43L46R31R1R42R12L37R16L33L21R34L37R18R43L11R27R7R42L14L20R19R18L1L4R7R18L6R47L44L47L11L18R50L15L22L5L5R20L3L39L22R28R21L20R23R17L4L38R42L4R19R24L27L29L37L49R50R17R48R22L28L29L22L44L22R32R26L49R3L1L35L30L48L4R13R49L10L23L37R10L39L49R1L15L35R3L41R14R40R8L23L12R7R32R1R24L24L46R13R43L35L19L22R45R37L50L34L48R49L18L40R5L25L36R16L43R29R17R3L42L44R8L2L29L2R31L30R28R25L50L25R32R37L3R42L37L45L21R31R30L7R11R32R15L20L4L48L23L27L32R27R37L29L13R44R9L49R18L4L38L31L32L1R33L12L14L16L17R47R3R10L45R36L10L26L46R29R32L49L19L7R18L42L39R50R36L36R27L45L45L48L42R34R39L17R20R30R27L21L40L28R7L22L10L27L29L1R37R40R6R30L40L19L40R19R11L5L1R34L20R47R42L37R6R10L7L33R28R36L20R20L39L50R26L24R30L13L7R27L22R40L7L22R2L42R2L10R36R47R10L32L27R46L40R36R42R47R50L15R22L14R29R2L37L19L49R37L1L48L41L13L17R35R7L39R49R17L11L40R31L20L13R28R35R46R13R49R6R21R9"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1();
    expect(actual).toBe(expected)
})



