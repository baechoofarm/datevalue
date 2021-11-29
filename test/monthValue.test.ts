import {MonthValue} from "../src/internal";

test('MonthValue.constructor()', () => {
    const v1 = new MonthValue(2021, 0);
    const v2 = new MonthValue(2021, 11);
    const v3 = new MonthValue(2021, 10);
    const v4 = new MonthValue(2021, 10 + 5);
    const v5 = new MonthValue(2021, 10 + 2);
    const v6 = new MonthValue(2021, 10 - 11);

    expect(v1.y).toBe(2021);
    expect(v1.m).toBe(0);

    expect(v2.y).toBe(2021);
    expect(v2.m).toBe(11);

    expect(v3.y).toBe(2021);
    expect(v3.m).toBe(10);

    expect(v4.y).toBe(2022);
    expect(v4.m).toBe(3);

    expect(v5.y).toBe(2022);
    expect(v5.m).toBe(0);

    expect(v6.y).toBe(2020);
    expect(v6.m).toBe(11);
});

test('MonthValue.setMonth()', () => {
    const v1 = new MonthValue(2021, 0);

    v1.setYear(2021);
    v1.setMonth(11);
    expect(v1.y).toBe(2021);
    expect(v1.m).toBe(11);

    v1.setYear(2021);
    v1.setMonth(10);
    expect(v1.y).toBe(2021);
    expect(v1.m).toBe(10);

    v1.setYear(2021);
    v1.setMonth(10 + 5);
    expect(v1.y).toBe(2022);
    expect(v1.m).toBe(3);

    v1.setYear(2021);
    v1.setMonth(10 + 2);
    expect(v1.y).toBe(2022);
    expect(v1.m).toBe(0);

    v1.setYear(2021);
    v1.setMonth(10 - 11);
    expect(v1.y).toBe(2020);
    expect(v1.m).toBe(11);
});

test('MonthValue.set()', () => {
    const v1 = new MonthValue(2021, 0);

    v1.set(2021, 11);
    expect(v1.y).toBe(2021);
    expect(v1.m).toBe(11);

    v1.set(2021, 10);
    expect(v1.y).toBe(2021);
    expect(v1.m).toBe(10);

    v1.set(2021, 10 + 5);
    expect(v1.y).toBe(2022);
    expect(v1.m).toBe(3);

    v1.set(2021, 10 + 2);
    expect(v1.y).toBe(2022);
    expect(v1.m).toBe(0);

    v1.set(2021, 10 - 11);
    expect(v1.y).toBe(2020);
    expect(v1.m).toBe(11);

    v1.set(2022);
    expect(v1.y).toBe(2022);
});

test('MonthValue.lastDateOfMonth()', () => {
    const v1 = new MonthValue(1998, 0);
    const v2 = new MonthValue(2021, 1);
    const v3 = new MonthValue(2024, 1);

    expect(MonthValue.lastDateOfMonth(1998, 0)).toBe(31);
    expect(MonthValue.lastDateOfMonth(2021, 1)).toBe(28);
    expect(MonthValue.lastDateOfMonth(2024, 1)).toBe(29);

    expect(v1.lastDateOfMonth).toBe(31);
    expect(v2.lastDateOfMonth).toBe(28);
    expect(v3.lastDateOfMonth).toBe(29);
});

test('MonthValue.monthDiff()', () => {
    const v1 = new MonthValue(2021, 9);
    const v2 = new MonthValue(2022, 2);

    expect(MonthValue.monthDiff(2021, 9, 2022, 2)).toBe(5);
    expect(MonthValue.monthDiff(2022, 2, 2021, 9)).toBe(5);
    expect(MonthValue.monthDiff(2021, 9, 2021, 9)).toBe(0);

    expect(MonthValue.monthDiff(v1, 2022, 2)).toBe(5);
    expect(MonthValue.monthDiff(2021, 9, v2)).toBe(5);
    expect(MonthValue.monthDiff(v1, v1)).toBe(0);
    expect(MonthValue.monthDiff(v1, v2)).toBe(5);

    // error case
    expect(MonthValue.monthDiff(2021, 2022)).toBe(0);

    expect(v1.monthDiff(2022, 2)).toBe(5);
    expect(v2.monthDiff(2022, 2)).toBe(0);
    expect(v1.monthDiff(v2)).toBe(5);
});

test('MonthValue.compareMonth()', () => {
    const v1 = new MonthValue(1998, 0);
    const v2 = new MonthValue(2021, 10);

    expect(MonthValue.compareMonth(1998, 0, 2021, 10)).toBe(-1);
    expect(MonthValue.compareMonth(2021, 10, 1998, 0)).toBe(1);
    expect(MonthValue.compareMonth(1998, 0, 1998, 0)).toBe(0);

    expect(MonthValue.compareMonth(v1, 2021, 10)).toBe(-1);
    expect(MonthValue.compareMonth(v1, 1998, 0)).toBe(0);
    expect(MonthValue.compareMonth(v2, 1998, 0)).toBe(1);
    expect(MonthValue.compareMonth(1998, 0, v2)).toBe(-1);
    expect(MonthValue.compareMonth(2021, 10, v2)).toBe(0);

    expect(MonthValue.compareMonth(v1, v2)).toBe(-1);
    expect(MonthValue.compareMonth(v2, v1)).toBe(1);
    expect(MonthValue.compareMonth(v2, v2)).toBe(0);
});
