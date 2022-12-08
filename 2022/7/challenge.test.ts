import {createCalculator} from './challenge'

test('parse small', () => {
    const input = "$ cd /\n" +
        "$ ls\n" +
        "dir a\n" +
        "14848514 b.txt\n" +
        "8504156 c.dat\n" +
        "dir d"

    const expected = "- / (dir)\n" +
        "   - b.txt (file, size=14848514)\n" +
        "   - c.dat (file, size=8504156)\n" +
        "  - a (dir)\n" +
        "  - d (dir)\n"
    const calculator = createCalculator(input)
    const actual = calculator.printTree()
    expect(actual).toStrictEqual(expected)
})

test('parse medium', () => {
    const input = "$ cd /\n" +
        "$ ls\n" +
        "dir a\n" +
        "14848514 b.txt\n" +
        "8504156 c.dat\n" +
        "dir d\n" +
        "$ cd a\n" +
        "$ ls\n" +
        "dir e\n" +
        "29116 f\n" +
        "2557 g\n" +
        "62596 h.lst"


    const expected = "- / (dir)\n" +
        "   - b.txt (file, size=14848514)\n" +
        "   - c.dat (file, size=8504156)\n" +
        "  - a (dir)\n" +
        "     - f (file, size=29116)\n" +
        "     - g (file, size=2557)\n" +
        "     - h.lst (file, size=62596)\n" +
        "    - e (dir)\n" +
        "  - d (dir)\n"
    const calculator = createCalculator(input)
    const actual = calculator.printTree()
    expect(actual).toStrictEqual(expected)
})

test('parse mediumish', () => {
    const input = "$ cd /\n" +
        "$ ls\n" +
        "dir a\n" +
        "14848514 b.txt\n" +
        "8504156 c.dat\n" +
        "dir d\n" +
        "$ cd a\n" +
        "$ ls\n" +
        "dir e\n" +
        "29116 f\n" +
        "2557 g\n" +
        "62596 h.lst\n" +
        "$ cd e\n" +
        "$ ls\n" +
        "584 i"


    const expected = "- / (dir)\n" +
        "   - b.txt (file, size=14848514)\n" +
        "   - c.dat (file, size=8504156)\n" +
        "  - a (dir)\n" +
        "     - f (file, size=29116)\n" +
        "     - g (file, size=2557)\n" +
        "     - h.lst (file, size=62596)\n" +
        "    - e (dir)\n" +
        "       - i (file, size=584)\n" +
        "  - d (dir)\n"
    const calculator = createCalculator(input)
    const actual = calculator.printTree()
    expect(actual).toStrictEqual(expected)
})

test('parse full sample 1', () => {
    const input = "$ cd /\n" +
        "$ ls\n" +
        "dir a\n" +
        "14848514 b.txt\n" +
        "8504156 c.dat\n" +
        "dir d\n" +
        "$ cd a\n" +
        "$ ls\n" +
        "dir e\n" +
        "29116 f\n" +
        "2557 g\n" +
        "62596 h.lst\n" +
        "$ cd e\n" +
        "$ ls\n" +
        "584 i\n" +
        "$ cd ..\n" +
        "$ cd ..\n" +
        "$ cd d\n" +
        "$ ls\n" +
        "4060174 j\n" +
        "8033020 d.log\n" +
        "5626152 d.ext\n" +
        "7214296 k"
    const expected = "- / (dir)\n" +
        "   - b.txt (file, size=14848514)\n" +
        "   - c.dat (file, size=8504156)\n" +
        "  - a (dir)\n" +
        "     - f (file, size=29116)\n" +
        "     - g (file, size=2557)\n" +
        "     - h.lst (file, size=62596)\n" +
        "    - e (dir)\n" +
        "       - i (file, size=584)\n" +
        "  - d (dir)\n" +
        "     - j (file, size=4060174)\n" +
        "     - d.log (file, size=8033020)\n" +
        "     - d.ext (file, size=5626152)\n" +
        "     - k (file, size=7214296)\n"
    const calculator = createCalculator(input)
    const actual = calculator.printTree()
    expect(actual).toStrictEqual(expected)
})

test('get directory sizes small', () => {
    const input = "$ cd /\n" +
        "$ ls\n" +
        "dir a\n" +
        "14848514 b.txt\n" +
        "8504156 c.dat\n" +
        "dir d"

    const expected = [0,0,23352670]
    const calculator = createCalculator(input)
    const actual = calculator.getDirectorySizes()
    expect(actual).toStrictEqual(expected)
})
test('get directory sizes full', () => {
    const input = "$ cd /\n" +
        "$ ls\n" +
        "dir a\n" +
        "14848514 b.txt\n" +
        "8504156 c.dat\n" +
        "dir d\n" +
        "$ cd a\n" +
        "$ ls\n" +
        "dir e\n" +
        "29116 f\n" +
        "2557 g\n" +
        "62596 h.lst\n" +
        "$ cd e\n" +
        "$ ls\n" +
        "584 i\n" +
        "$ cd ..\n" +
        "$ cd ..\n" +
        "$ cd d\n" +
        "$ ls\n" +
        "4060174 j\n" +
        "8033020 d.log\n" +
        "5626152 d.ext\n" +
        "7214296 k"

    const expected = [584,94853,24933642,48381165]
    const calculator = createCalculator(input)
    const actual = calculator.getDirectorySizes()
    expect(actual).toStrictEqual(expected)
})
test('total size of directories at most 100000', () => {
    const input = "$ cd /\n" +
        "$ ls\n" +
        "dir a\n" +
        "14848514 b.txt\n" +
        "8504156 c.dat\n" +
        "dir d\n" +
        "$ cd a\n" +
        "$ ls\n" +
        "dir e\n" +
        "29116 f\n" +
        "2557 g\n" +
        "62596 h.lst\n" +
        "$ cd e\n" +
        "$ ls\n" +
        "584 i\n" +
        "$ cd ..\n" +
        "$ cd ..\n" +
        "$ cd d\n" +
        "$ ls\n" +
        "4060174 j\n" +
        "8033020 d.log\n" +
        "5626152 d.ext\n" +
        "7214296 k"

    const expected = 95437
    const calculator = createCalculator(input)
    const actual = calculator.totalSizeOfDirectoriesAtMost(100000)
    expect(actual).toStrictEqual(expected)
})
test('part 2', () => {
    const input = "$ cd /\n" +
        "$ ls\n" +
        "dir a\n" +
        "14848514 b.txt\n" +
        "8504156 c.dat\n" +
        "dir d\n" +
        "$ cd a\n" +
        "$ ls\n" +
        "dir e\n" +
        "29116 f\n" +
        "2557 g\n" +
        "62596 h.lst\n" +
        "$ cd e\n" +
        "$ ls\n" +
        "584 i\n" +
        "$ cd ..\n" +
        "$ cd ..\n" +
        "$ cd d\n" +
        "$ ls\n" +
        "4060174 j\n" +
        "8033020 d.log\n" +
        "5626152 d.ext\n" +
        "7214296 k"

    const expected = 24933642
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2()
    expect(actual).toStrictEqual(expected)
})
