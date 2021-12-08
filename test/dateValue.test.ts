import {DateValue} from "../src/internal";

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
