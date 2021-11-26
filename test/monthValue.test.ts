import {MonthValue} from "../src/internal";

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
