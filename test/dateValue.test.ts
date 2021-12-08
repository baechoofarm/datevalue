import {DateValue} from "../src/internal";

test('DateValue.prevYear()', () => {
    const date = new DateValue(2024, 1, 29);

    expect(date.prevYear().year).toBe(2023);
    expect(date.prevYear().month).toBe(2);
    expect(date.prevYear().date).toBe(1);
    expect(date.prevYear(1, true).year).toBe(2023);
    expect(date.prevYear(1, true).month).toBe(1);
    expect(date.prevYear(1, true).date).toBe(1);
});

test('DateValue.nextYear()', () => {
    const date = new DateValue(2024, 1, 29);

    expect(date.nextYear().year).toBe(2025);
    expect(date.nextYear().month).toBe(2);
    expect(date.nextYear().date).toBe(1);
    expect(date.nextYear(1, true).year).toBe(2025);
    expect(date.nextYear(1, true).month).toBe(1);
    expect(date.nextYear(1, true).date).toBe(1);
});

test('DateValue.prevMonth()', () => {
    const date = new DateValue(2021, 11, 31);

    expect(date.prevMonth().year).toBe(2021);
    expect(date.prevMonth().month).toBe(11);
    expect(date.prevMonth().date).toBe(1);
    expect(date.prevMonth(1, true).year).toBe(2021);
    expect(date.prevMonth(1, true).month).toBe(10);
    expect(date.prevMonth(1, true).date).toBe(1);
});

test('DateValue.nextMonth()', () => {
    const date = new DateValue(2021, 11, 31);

    expect(date.nextMonth().year).toBe(2022);
    expect(date.nextMonth().month).toBe(0);
    expect(date.nextMonth().date).toBe(31);
    expect(date.nextMonth(1, true).year).toBe(2022);
    expect(date.nextMonth(1, true).month).toBe(0);
    expect(date.nextMonth(1, true).date).toBe(1);

    const date2 = new DateValue(2021, 9, 31);

    expect(date2.nextMonth().year).toBe(2021);
    expect(date2.nextMonth().month).toBe(11);
    expect(date2.nextMonth().date).toBe(1);
    expect(date2.nextMonth(1, true).year).toBe(2021);
    expect(date2.nextMonth(1, true).month).toBe(10);
    expect(date2.nextMonth(1, true).date).toBe(1);
});

test('DateValue.prevDate()', () => {
    const date = new DateValue(2021, 10, 28);

    expect(date.prevDate().year).toBe(2021);
    expect(date.prevDate().month).toBe(10);
    expect(date.prevDate().date).toBe(27);
    expect(date.prevDate(28).year).toBe(2021);
    expect(date.prevDate(28).month).toBe(9);
    expect(date.prevDate(28).date).toBe(31);
});

test('DateValue.nextDate()', () => {
    const date = new DateValue(2021, 10, 28);

    expect(date.nextDate().year).toBe(2021);
    expect(date.nextDate().month).toBe(10);
    expect(date.nextDate().date).toBe(29);
    expect(date.nextDate(4).year).toBe(2021);
    expect(date.nextDate(4).month).toBe(11);
    expect(date.nextDate(4).date).toBe(2);
});
