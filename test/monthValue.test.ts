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
