import {MonthValue} from "../src/internal";

test('MonthValue.toDateObject()', () => {
    const v1 = new MonthValue(2021, 10);
    const d1 = v1.toDateObj();

    expect(d1.getFullYear()).toBe(2021);
    expect(d1.getMonth()).toBe(10);

    v1.y = 1998;
    v1.m = 19;

    const d2 = v1.dateObj;

    expect(d2.getFullYear()).toBe(1999);
    expect(d2.getMonth()).toBe(7);
});

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

    const v7 = new MonthValue();

    expect(v7.y).toBe(new Date().getFullYear());
    expect(v7.m).toBe(new Date().getMonth());
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

test('MonthValue.prevMonth()', () => {
    const month = new MonthValue(2021, 10);

    expect(month.prevMonth().year).toBe(2021);
    expect(month.prevMonth().month).toBe(9);
    expect(month.prevMonth(12).year).toBe(2020);
    expect(month.prevMonth(12).month).toBe(10);
});

test('MonthValue.nextMonth()', () => {
    const month = new MonthValue(2021, 10);

    expect(month.nextMonth().year).toBe(2021);
    expect(month.nextMonth().month).toBe(11);
    expect(month.nextMonth(12).year).toBe(2022);
    expect(month.nextMonth(12).month).toBe(10);
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

test('MonthValue.monthIndex()', () => {
    const i1 = MonthValue.monthIndex(2021, 10);
    const i2 = MonthValue.monthIndex(2022, 1);
    const i3 = MonthValue.monthIndex(2020, 6);

    expect(i2 - i1).toBe(3);
    expect(i1 - i3).toBe(16);

    const i4 = new MonthValue(2021, 10).monthIndex;
    const i5 = new MonthValue(2022, 1).monthIndex;
    const i6 = new MonthValue(2020, 6).monthIndex;

    expect(i5 - i4).toBe(3);
    expect(i4 - i6).toBe(16);
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
    const v3 = new MonthValue(1480, 6);

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

    expect(v1.compareMonth(1998, 0)).toBe(0);
    expect(v1.compareMonth(2021, 10)).toBe(-1);
    expect(v1.compareMonth(1480, 6)).toBe(1);

    expect(v1.compareMonth(v1)).toBe(0);
    expect(v1.compareMonth(v2)).toBe(-1);
    expect(v1.compareMonth(v3)).toBe(1);
});

test('MonthValue.equalsMonth()', () => {
    const v1 = new MonthValue(2021, 10);
    const v2 = new MonthValue(1998, 0);
    const v3 = new MonthValue(1480, 6);

    expect(MonthValue.equalsMonth(2021, 10, 2021, 10)).toBeTruthy();
    expect(MonthValue.equalsMonth(2021, 10, 2020, 3)).toBeFalsy();
    expect(MonthValue.equalsMonth(2021, 10, 2021, 11)).toBeFalsy();

    expect(MonthValue.equalsMonth(2021, 10, v1)).toBeTruthy();
    expect(MonthValue.equalsMonth(v1, 2021, 10)).toBeTruthy();
    expect(MonthValue.equalsMonth(v1, 1480, 6)).toBeFalsy();
    expect(MonthValue.equalsMonth(v1, v2)).toBeFalsy();

    expect(MonthValue.equalsMonth(v1, v1)).toBeTruthy();
    expect(MonthValue.equalsMonth(v1, v2)).toBeFalsy();
    expect(MonthValue.equalsMonth(v3, v1)).toBeFalsy();

    expect(v1.equalsMonth(2021, 10)).toBeTruthy();
    expect(v1.equalsMonth(1480, 9)).toBeFalsy();
    expect(v1.equalsMonth(v1)).toBeTruthy();
    expect(v1.equalsMonth(v2)).toBeFalsy();
    expect(v1.equalsMonth(v3)).toBeFalsy();
});

test('MonthValue.gtYear()', () => {
    const v1 = new MonthValue(2021, 10);
    const v2 = new MonthValue(1998, 0);
    const v3 = new MonthValue(2040, 6);

    expect(MonthValue.gtMonth(2021, 10, 2021, 10)).toBeFalsy();
    expect(MonthValue.gtMonth(2021, 10, 2020, 3)).toBeTruthy();
    expect(MonthValue.gtMonth(2021, 10, 2021, 11)).toBeFalsy();

    expect(MonthValue.gtMonth(2021, 10, v1)).toBeFalsy();
    expect(MonthValue.gtMonth(v1, 2021, 10)).toBeFalsy();
    expect(MonthValue.gtMonth(v1, 1480, 6)).toBeTruthy();
    expect(MonthValue.gtMonth(v1, v2)).toBeTruthy();

    expect(MonthValue.gtMonth(v1, v1)).toBeFalsy();
    expect(MonthValue.gtMonth(v1, v2)).toBeTruthy();
    expect(MonthValue.gtMonth(v3, v1)).toBeTruthy();

    expect(v1.gtMonth(2021, 10)).toBeFalsy();
    expect(v1.gtMonth(1480, 9)).toBeTruthy();
    expect(v1.gtMonth(v1)).toBeFalsy();
    expect(v1.gtMonth(v2)).toBeTruthy();
    expect(v1.gtMonth(v3)).toBeFalsy();
});

test('MonthValue.gteMonth()', () => {
    const v1 = new MonthValue(2021, 10);
    const v2 = new MonthValue(1998, 0);
    const v3 = new MonthValue(2050, 6);

    expect(MonthValue.gteMonth(2021, 10, 2021, 10)).toBeTruthy();
    expect(MonthValue.gteMonth(2021, 10, 2020, 3)).toBeTruthy();
    expect(MonthValue.gteMonth(2021, 10, 2021, 11)).toBeFalsy();

    expect(MonthValue.gteMonth(2021, 10, v1)).toBeTruthy();
    expect(MonthValue.gteMonth(v1, 2021, 10)).toBeTruthy();
    expect(MonthValue.gteMonth(v1, 1480, 6)).toBeTruthy();
    expect(MonthValue.gteMonth(v1, 2050, 6)).toBeFalsy();

    expect(MonthValue.gteMonth(v1, v1)).toBeTruthy();
    expect(MonthValue.gteMonth(v1, v2)).toBeTruthy();
    expect(MonthValue.gteMonth(v1, v3)).toBeFalsy();
    expect(MonthValue.gteMonth(v3, v1)).toBeTruthy();

    expect(v1.gteMonth(2021, 10)).toBeTruthy();
    expect(v1.gteMonth(1480, 9)).toBeTruthy();
    expect(v1.gteMonth(v1)).toBeTruthy();
    expect(v1.gteMonth(v2)).toBeTruthy();
    expect(v1.gteMonth(v3)).toBeFalsy();
});

test('MonthValue.ltMonth()', () => {
    const v1 = new MonthValue(2021, 10);
    const v2 = new MonthValue(1998, 0);
    const v3 = new MonthValue(2050, 6);

    expect(MonthValue.ltMonth(2021, 10, 2021, 10)).toBeFalsy();
    expect(MonthValue.ltMonth(2021, 10, 2020, 3)).toBeFalsy();
    expect(MonthValue.ltMonth(2021, 10, 2021, 11)).toBeTruthy();

    expect(MonthValue.ltMonth(2021, 10, v1)).toBeFalsy();
    expect(MonthValue.ltMonth(v1, 2021, 10)).toBeFalsy();
    expect(MonthValue.ltMonth(v1, 1480, 6)).toBeFalsy();
    expect(MonthValue.ltMonth(v1, 2050, 6)).toBeTruthy();

    expect(MonthValue.ltMonth(v1, v1)).toBeFalsy();
    expect(MonthValue.ltMonth(v1, v2)).toBeFalsy();
    expect(MonthValue.ltMonth(v1, v3)).toBeTruthy();
    expect(MonthValue.ltMonth(v3, v1)).toBeFalsy();

    expect(v1.ltMonth(2021, 10)).toBeFalsy();
    expect(v1.ltMonth(1480, 9)).toBeFalsy();
    expect(v1.ltMonth(v1)).toBeFalsy();
    expect(v1.ltMonth(v2)).toBeFalsy();
    expect(v1.ltMonth(v3)).toBeTruthy();
});

test('MonthValue.lteMonth()', () => {
    const v1 = new MonthValue(2021, 10);
    const v2 = new MonthValue(1998, 0);
    const v3 = new MonthValue(2050, 6);

    expect(MonthValue.lteMonth(2021, 10, 2021, 10)).toBeTruthy();
    expect(MonthValue.lteMonth(2021, 10, 2020, 3)).toBeFalsy();
    expect(MonthValue.lteMonth(2021, 10, 2021, 11)).toBeTruthy();

    expect(MonthValue.lteMonth(2021, 10, v1)).toBeTruthy();
    expect(MonthValue.lteMonth(v1, 2021, 10)).toBeTruthy();
    expect(MonthValue.lteMonth(v1, 1480, 6)).toBeFalsy();
    expect(MonthValue.lteMonth(v1, 2050, 6)).toBeTruthy();

    expect(MonthValue.lteMonth(v1, v1)).toBeTruthy();
    expect(MonthValue.lteMonth(v1, v2)).toBeFalsy();
    expect(MonthValue.lteMonth(v1, v3)).toBeTruthy();
    expect(MonthValue.lteMonth(v3, v1)).toBeFalsy();

    expect(v1.lteMonth(2021, 10)).toBeTruthy();
    expect(v1.lteMonth(1480, 9)).toBeFalsy();
    expect(v1.lteMonth(v1)).toBeTruthy();
    expect(v1.lteMonth(v2)).toBeFalsy();
    expect(v1.lteMonth(v3)).toBeTruthy();
});
