import {WeekValue} from "../src";

test('WeekValue.constructor()', () => {
    new WeekValue();
});

test('WeekValue.weekListOfMonth()', () => {
    const weeks = WeekValue.weekListOfMonth(2021, 11);

    expect(weeks.map(v => v.week)).toEqual([1, 2, 3, 4, 5]);
});
