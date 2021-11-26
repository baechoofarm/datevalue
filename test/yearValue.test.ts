import {YearValue} from "../src/internal";

test('YearValue.setYear()', () => {
    const v1 = new YearValue(2021);

    v1.setYear(2050);

    expect(v1.y).toBe(2050);
    expect(v1.year).toBe(2050);
    expect(v1.getYear()).toBe(2050);

    v1.y = 3450;

    expect(v1.y).toBe(3450);
    expect(v1.year).toBe(3450);
    expect(v1.getYear()).toBe(3450);

    v1.year = 1790;

    expect(v1.y).toBe(1790);
    expect(v1.year).toBe(1790);
    expect(v1.getYear()).toBe(1790);
});

test('YearValue.toDateObject()', () => {
    const v1 = new YearValue(2021);
    const d1 = v1.toDateObj();

    expect(d1.getFullYear()).toBe(2021);

    v1.y = 1350;

    const d2 = v1.dateObj;
    expect(d2.getFullYear()).toBe(1350);
});

test('YearValue.time', () => {
    const v1 = new YearValue(2021);
    const t1 = v1.time;

    expect(t1).toBe(new Date(2021, 0, 1).getTime());
});

test('YearValue.isLeapYear()', () => {
    const v1 = new YearValue(2024);
    const v2 = new YearValue(2000);
    const v3 = new YearValue(2021);
    const v4 = new YearValue(2100);

    expect(YearValue.isLeapYear(2024)).toBeTruthy();
    expect(YearValue.isLeapYear(2000)).toBeTruthy();
    expect(YearValue.isLeapYear(2021)).toBeFalsy();
    expect(YearValue.isLeapYear(2100)).toBeFalsy();

    expect(v1.isLeapYear).toBeTruthy();
    expect(v2.isLeapYear).toBeTruthy();
    expect(v3.isLeapYear).toBeFalsy();
    expect(v4.isLeapYear).toBeFalsy();
});

test('YearValue.yearDiff()', () => {
    const v1 = new YearValue(1998);
    const v2 = new YearValue(2021);

    expect(YearValue.yearDiff(1998, 2021)).toBe(23);
    expect(YearValue.yearDiff(2021, 2021)).toBe(0);

    expect(YearValue.yearDiff(v1, 2021)).toBe(23);
    expect(YearValue.yearDiff(1998, v2)).toBe(23);

    expect(v1.yearDiff(v2)).toBe(23);
    expect(v2.yearDiff(v1)).toBe(23);

    expect(v1.yearDiff(2021)).toBe(23);
    expect(v2.yearDiff(1998)).toBe(23);
});

test('YearValue.compareYear()', () => {
    const v1 = new YearValue(2021);
    const v2 = new YearValue(1998);
    const v3 = new YearValue(2024);

    expect(YearValue.compareYear(2021, 2021)).toBe(0);
    expect(YearValue.compareYear(2021, 1998)).toBe(1);
    expect(YearValue.compareYear(2021, 2024)).toBe(-1);

    expect(YearValue.compareYear(v1, v1)).toBe(0);
    expect(YearValue.compareYear(v1, v2)).toBe(1);
    expect(YearValue.compareYear(v1, v3)).toBe(-1);

    expect(YearValue.compareYear(v1, 2021)).toBe(0);
    expect(YearValue.compareYear(2021, v2)).toBe(1);
    expect(YearValue.compareYear(2021, v3)).toBe(-1);

    expect(v1.compareYear(2021)).toBe(0);
    expect(v1.compareYear(1998)).toBe(1);
    expect(v1.compareYear(2024)).toBe(-1);

    expect(v1.compareYear(v2)).toBe(1);
    expect(v1.compareYear(v3)).toBe(-1);
});

test('YearValue.equalsYear()', () => {
    const v1 = new YearValue(2021);
    const v2 = new YearValue(2021);
    const v3 = new YearValue(1998);
    const v4 = new YearValue(2024);

    expect(YearValue.equalsYear(2021, 2021)).toBeTruthy();
    expect(YearValue.equalsYear(2021, 1998)).toBeFalsy();
    expect(YearValue.equalsYear(2021, 2024)).toBeFalsy();

    expect(YearValue.equalsYear(v1, 2021)).toBeTruthy();
    expect(YearValue.equalsYear(v1, 1998)).toBeFalsy();
    expect(YearValue.equalsYear(v1, 2024)).toBeFalsy();

    expect(YearValue.equalsYear(v1, v2)).toBeTruthy();
    expect(YearValue.equalsYear(v1, v3)).toBeFalsy();
    expect(YearValue.equalsYear(v1, v4)).toBeFalsy();

    expect(v1.equalsYear(v2)).toBeTruthy();
    expect(v1.equalsYear(v3)).toBeFalsy();
    expect(v1.equalsYear(v4)).toBeFalsy();

    expect(v1.equalsYear(2021)).toBeTruthy();
    expect(v1.equalsYear(1998)).toBeFalsy();
    expect(v1.equalsYear(2024)).toBeFalsy();
});

test('YearValue.gtYear()', () => {
    const v1 = new YearValue(2021);
    const v2 = new YearValue(2021);
    const v3 = new YearValue(1998);
    const v4 = new YearValue(2024);

    expect(YearValue.gtYear(2021, 2021)).toBeFalsy();
    expect(YearValue.gtYear(2021, 1998)).toBeTruthy();
    expect(YearValue.gtYear(2021, 2024)).toBeFalsy();

    expect(YearValue.gtYear(v1, 2021)).toBeFalsy();
    expect(YearValue.gtYear(v1, 1998)).toBeTruthy();
    expect(YearValue.gtYear(v1, 2024)).toBeFalsy();

    expect(YearValue.gtYear(v1, v2)).toBeFalsy();
    expect(YearValue.gtYear(v1, v3)).toBeTruthy();
    expect(YearValue.gtYear(v1, v4)).toBeFalsy();

    expect(v1.gtYear(v2)).toBeFalsy();
    expect(v1.gtYear(v3)).toBeTruthy();
    expect(v1.gtYear(v4)).toBeFalsy();

    expect(v1.gtYear(2021)).toBeFalsy();
    expect(v1.gtYear(1998)).toBeTruthy();
    expect(v1.gtYear(2024)).toBeFalsy();
});

test('YearValue.gteYear()', () => {
    const v1 = new YearValue(2021);
    const v2 = new YearValue(2021);
    const v3 = new YearValue(1998);
    const v4 = new YearValue(2024);

    expect(YearValue.gteYear(2021, 2021)).toBeTruthy();
    expect(YearValue.gteYear(2021, 1998)).toBeTruthy();
    expect(YearValue.gteYear(2021, 2024)).toBeFalsy();

    expect(YearValue.gteYear(v1, 2021)).toBeTruthy();
    expect(YearValue.gteYear(v1, 1998)).toBeTruthy();
    expect(YearValue.gteYear(v1, 2024)).toBeFalsy();

    expect(YearValue.gteYear(v1, v2)).toBeTruthy();
    expect(YearValue.gteYear(v1, v3)).toBeTruthy();
    expect(YearValue.gteYear(v1, v4)).toBeFalsy();

    expect(v1.gteYear(v2)).toBeTruthy();
    expect(v1.gteYear(v3)).toBeTruthy();
    expect(v1.gteYear(v4)).toBeFalsy();

    expect(v1.gteYear(2021)).toBeTruthy();
    expect(v1.gteYear(1998)).toBeTruthy();
    expect(v1.gteYear(2024)).toBeFalsy();
});

test('YearValue.ltYear()', () => {
    const v1 = new YearValue(2021);
    const v2 = new YearValue(2021);
    const v3 = new YearValue(1998);
    const v4 = new YearValue(2024);

    expect(YearValue.ltYear(2021, 2021)).toBeFalsy();
    expect(YearValue.ltYear(2021, 1998)).toBeFalsy();
    expect(YearValue.ltYear(2021, 2024)).toBeTruthy();

    expect(YearValue.ltYear(v1, 2021)).toBeFalsy();
    expect(YearValue.ltYear(v1, 1998)).toBeFalsy();
    expect(YearValue.ltYear(v1, 2024)).toBeTruthy();

    expect(YearValue.ltYear(v1, v2)).toBeFalsy();
    expect(YearValue.ltYear(v1, v3)).toBeFalsy();
    expect(YearValue.ltYear(v1, v4)).toBeTruthy();

    expect(v1.ltYear(v2)).toBeFalsy();
    expect(v1.ltYear(v3)).toBeFalsy();
    expect(v1.ltYear(v4)).toBeTruthy();

    expect(v1.ltYear(2021)).toBeFalsy();
    expect(v1.ltYear(1998)).toBeFalsy();
    expect(v1.ltYear(2024)).toBeTruthy();
});

test('YearValue.lteYear()', () => {
    const v1 = new YearValue(2021);
    const v2 = new YearValue(2021);
    const v3 = new YearValue(1998);
    const v4 = new YearValue(2024);

    expect(YearValue.lteYear(2021, 2021)).toBeTruthy();
    expect(YearValue.lteYear(2021, 1998)).toBeFalsy();
    expect(YearValue.lteYear(2021, 2024)).toBeTruthy();

    expect(YearValue.lteYear(v1, 2021)).toBeTruthy();
    expect(YearValue.lteYear(v1, 1998)).toBeFalsy();
    expect(YearValue.lteYear(v1, 2024)).toBeTruthy();

    expect(YearValue.lteYear(v1, v2)).toBeTruthy();
    expect(YearValue.lteYear(v1, v3)).toBeFalsy();
    expect(YearValue.lteYear(v1, v4)).toBeTruthy();

    expect(v1.lteYear(v2)).toBeTruthy();
    expect(v1.lteYear(v3)).toBeFalsy();
    expect(v1.lteYear(v4)).toBeTruthy();

    expect(v1.lteYear(2021)).toBeTruthy();
    expect(v1.lteYear(1998)).toBeFalsy();
    expect(v1.lteYear(2024)).toBeTruthy();
});
