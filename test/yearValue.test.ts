import {YearValue} from "../src/internal";

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

    expect(YearValue.equalsYear(v1, v2)).toBeTruthy();
    expect(YearValue.equalsYear(v1, 2021)).toBeTruthy();
    expect(YearValue.equalsYear(v1, 1998)).toBeFalsy();
    expect(YearValue.equalsYear(v1, 2024)).toBeFalsy();

    expect(v1.equalsYear(v2)).toBeTruthy();
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

    expect(YearValue.ltYear(v1, v2)).toBeTruthy();
    expect(YearValue.ltYear(v1, v3)).toBeFalsy();
    expect(YearValue.ltYear(v1, v4)).toBeTruthy();
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
});
