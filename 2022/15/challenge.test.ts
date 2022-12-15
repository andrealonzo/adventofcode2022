import {createCalculator} from './challenge'

test('sample test 1', () => {
    const expected = 26
    const input = "Sensor at x=2, y=18: closest beacon is at x=-2, y=15\n" +
        "Sensor at x=9, y=16: closest beacon is at x=10, y=16\n" +
        "Sensor at x=13, y=2: closest beacon is at x=15, y=3\n" +
        "Sensor at x=12, y=14: closest beacon is at x=10, y=16\n" +
        "Sensor at x=10, y=20: closest beacon is at x=10, y=16\n" +
        "Sensor at x=14, y=17: closest beacon is at x=10, y=16\n" +
        "Sensor at x=8, y=7: closest beacon is at x=2, y=10\n" +
        "Sensor at x=2, y=0: closest beacon is at x=2, y=10\n" +
        "Sensor at x=0, y=11: closest beacon is at x=2, y=10\n" +
        "Sensor at x=20, y=14: closest beacon is at x=25, y=17\n" +
        "Sensor at x=17, y=20: closest beacon is at x=21, y=22\n" +
        "Sensor at x=16, y=7: closest beacon is at x=15, y=3\n" +
        "Sensor at x=14, y=3: closest beacon is at x=15, y=3\n" +
        "Sensor at x=20, y=1: closest beacon is at x=15, y=3"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(10);
    expect(actual).toBe(expected)
})
test('sample test 2', () => {
    const expected = 56000011
    const input = "Sensor at x=2, y=18: closest beacon is at x=-2, y=15\n" +
        "Sensor at x=9, y=16: closest beacon is at x=10, y=16\n" +
        "Sensor at x=13, y=2: closest beacon is at x=15, y=3\n" +
        "Sensor at x=12, y=14: closest beacon is at x=10, y=16\n" +
        "Sensor at x=10, y=20: closest beacon is at x=10, y=16\n" +
        "Sensor at x=14, y=17: closest beacon is at x=10, y=16\n" +
        "Sensor at x=8, y=7: closest beacon is at x=2, y=10\n" +
        "Sensor at x=2, y=0: closest beacon is at x=2, y=10\n" +
        "Sensor at x=0, y=11: closest beacon is at x=2, y=10\n" +
        "Sensor at x=20, y=14: closest beacon is at x=25, y=17\n" +
        "Sensor at x=17, y=20: closest beacon is at x=21, y=22\n" +
        "Sensor at x=16, y=7: closest beacon is at x=15, y=3\n" +
        "Sensor at x=14, y=3: closest beacon is at x=15, y=3\n" +
        "Sensor at x=20, y=1: closest beacon is at x=15, y=3"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2(20);
    expect(actual).toBe(expected)
})
test('real input 1', () => {
    const expected = 26
    const input = "Sensor at x=2662540, y=1992627: closest beacon is at x=1562171, y=2000000\n" +
        "Sensor at x=3577947, y=3994226: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=34015, y=3658022: closest beacon is at x=-48386, y=3887238\n" +
        "Sensor at x=3951270, y=2868430: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=3136779, y=3094333: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=3415109, y=2591103: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=277465, y=3971183: closest beacon is at x=-48386, y=3887238\n" +
        "Sensor at x=3697201, y=1834735: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=874397, y=1535447: closest beacon is at x=1562171, y=2000000\n" +
        "Sensor at x=2996230, y=3508199: closest beacon is at x=3251079, y=3709457\n" +
        "Sensor at x=2754388, y=3147571: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=524580, y=2640616: closest beacon is at x=-73189, y=1870650\n" +
        "Sensor at x=2718599, y=3106610: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=2708759, y=3688992: closest beacon is at x=3251079, y=3709457\n" +
        "Sensor at x=2413450, y=3994713: closest beacon is at x=3251079, y=3709457\n" +
        "Sensor at x=1881113, y=495129: closest beacon is at x=1562171, y=2000000\n" +
        "Sensor at x=3792459, y=3827590: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=3658528, y=641189: closest beacon is at x=4097969, y=-110334\n" +
        "Sensor at x=1379548, y=3381581: closest beacon is at x=1562171, y=2000000\n" +
        "Sensor at x=3480959, y=3069234: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=3871880, y=3531918: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=2825206, y=2606984: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=3645217, y=2312011: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=3485320, y=3509352: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=56145, y=3879324: closest beacon is at x=-48386, y=3887238\n" +
        "Sensor at x=148776, y=433043: closest beacon is at x=-73189, y=1870650\n" +
        "Sensor at x=3368682, y=3929248: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=3330787, y=2481990: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=2802875, y=3209067: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=2679788, y=3102108: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=3326846, y=3767097: closest beacon is at x=3251079, y=3709457\n" +
        "Sensor at x=3111518, y=1310720: closest beacon is at x=3499312, y=2620002"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer1(2000000);
    expect(actual).toBe(expected)
})

test('real input 2', () => {
    const expected = 26
    const input = "Sensor at x=2662540, y=1992627: closest beacon is at x=1562171, y=2000000\n" +
        "Sensor at x=3577947, y=3994226: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=34015, y=3658022: closest beacon is at x=-48386, y=3887238\n" +
        "Sensor at x=3951270, y=2868430: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=3136779, y=3094333: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=3415109, y=2591103: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=277465, y=3971183: closest beacon is at x=-48386, y=3887238\n" +
        "Sensor at x=3697201, y=1834735: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=874397, y=1535447: closest beacon is at x=1562171, y=2000000\n" +
        "Sensor at x=2996230, y=3508199: closest beacon is at x=3251079, y=3709457\n" +
        "Sensor at x=2754388, y=3147571: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=524580, y=2640616: closest beacon is at x=-73189, y=1870650\n" +
        "Sensor at x=2718599, y=3106610: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=2708759, y=3688992: closest beacon is at x=3251079, y=3709457\n" +
        "Sensor at x=2413450, y=3994713: closest beacon is at x=3251079, y=3709457\n" +
        "Sensor at x=1881113, y=495129: closest beacon is at x=1562171, y=2000000\n" +
        "Sensor at x=3792459, y=3827590: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=3658528, y=641189: closest beacon is at x=4097969, y=-110334\n" +
        "Sensor at x=1379548, y=3381581: closest beacon is at x=1562171, y=2000000\n" +
        "Sensor at x=3480959, y=3069234: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=3871880, y=3531918: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=2825206, y=2606984: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=3645217, y=2312011: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=3485320, y=3509352: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=56145, y=3879324: closest beacon is at x=-48386, y=3887238\n" +
        "Sensor at x=148776, y=433043: closest beacon is at x=-73189, y=1870650\n" +
        "Sensor at x=3368682, y=3929248: closest beacon is at x=3468220, y=3832344\n" +
        "Sensor at x=3330787, y=2481990: closest beacon is at x=3499312, y=2620002\n" +
        "Sensor at x=2802875, y=3209067: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=2679788, y=3102108: closest beacon is at x=2731027, y=3076619\n" +
        "Sensor at x=3326846, y=3767097: closest beacon is at x=3251079, y=3709457\n" +
        "Sensor at x=3111518, y=1310720: closest beacon is at x=3499312, y=2620002"
    const calculator = createCalculator(input)
    const actual = calculator.calculateAnswer2();
    expect(actual).toBe(expected)
})



