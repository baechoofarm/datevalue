import {CompareResult, YearValue} from "../internal";

export class MonthValue extends YearValue {
    protected _m!: number;

    constructor()
    constructor(year: number)
    constructor(year: number, month: number)
    constructor(year?: number, month?: number) {
        if (year === undefined) {
            super();
            this.setMonth(new Date().getMonth());
        } else {
            super(year);
            this.setMonth(month ?? 0);
        }
    }

    setMonth(month: number) {
        const d = new Date(this.year, month, 1);

        this._y = d.getFullYear();
        this._m = d.getMonth();
    }

    getMonth() {
        return this._m;
    }

    set(year: number): void
    set(year: number, month: number): void
    set(year: number, month?: number): void
    set(year: number, month?: number): void {
        if (typeof month === "number") {
            const d = new Date(year, month, 1);

            this._y = d.getFullYear();
            this._m = d.getMonth();
        } else {
            super.set(year);
        }
    }

    clone() {
        return new MonthValue(this.year, this.month);
    }

    prevYear(count: number = 1) {
        return new MonthValue(this.year - count, this.month);
    }

    nextYear(count: number = 1) {
        return new MonthValue(this.year + count, this.month);
    }

    prevMonth(count: number = 1) {
        return new MonthValue(this.year, this.month - count);
    }

    nextMonth(count: number = 1) {
        return new MonthValue(this.year, this.month + count);
    }

    clampYear(min: YearValue, max: YearValue): MonthValue
    clampYear(minYear: number, max: YearValue): MonthValue
    clampYear(min: YearValue, maxYear: number): MonthValue
    clampYear(minYear: number, maxYear: number): MonthValue
    clampYear(min: YearValue | number, max: YearValue | number): MonthValue
    clampYear(min: YearValue | number, max: YearValue | number): MonthValue  {
        return MonthValue.clampYear(this, min, max);
    }

    clampMonth(min: MonthValue, max: MonthValue): MonthValue
    clampMonth(min: MonthValue, maxYear: number, maxMonth: number): MonthValue
    clampMonth(minYear: number, minMonth: number, max: MonthValue): MonthValue
    clampMonth(minYear: number, minMonth: number, maxYear: number, maxMonth: number): MonthValue
    clampMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): MonthValue
    clampMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): MonthValue {
        return MonthValue.clampMonth(this, v1, v2, v3, v4);
    }

    isInMonthRange(min: MonthValue, max: MonthValue): boolean
    isInMonthRange(min: MonthValue, maxYear: number, maxMonth: number): boolean
    isInMonthRange(minYear: number, minMonth: number, max: MonthValue): boolean
    isInMonthRange(minYear: number, minMonth: number, maxYear: number, maxMonth: number): boolean
    isInMonthRange(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean
    isInMonthRange(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean {
        return MonthValue.isInMonthRange(this, v1, v2, v3, v4);
    }

    monthDiff(another: MonthValue): number
    monthDiff(anotherYear: number, anotherMonth: number): number
    monthDiff(v1: MonthValue | number, v2?: number): number
    monthDiff(v1: MonthValue | number, v2?: number): number {
        return MonthValue.monthDiff(this, v1, v2);
    }

    compareMonth(another: MonthValue): CompareResult
    compareMonth(anotherYear: number, anotherMonth: number): CompareResult
    compareMonth(v1: MonthValue | number, v2?: number): CompareResult
    compareMonth(v1: MonthValue | number, v2?: number): CompareResult {
        return MonthValue.compareMonth(this, v1, v2);
    }

    equalsMonth(another: MonthValue): boolean
    equalsMonth(anotherYear: number, anotherMonth: number): boolean
    equalsMonth(v1: MonthValue | number, v2?: number): boolean
    equalsMonth(v1: MonthValue | number, v2?: number): boolean {
        return MonthValue.equalsMonth(this, v1, v2);
    }

    gtMonth(another: MonthValue): boolean
    gtMonth(anotherYear: number, anotherMonth: number): boolean
    gtMonth(v1: MonthValue | number, v2?: number): boolean
    gtMonth(v1: MonthValue | number, v2?: number): boolean {
        return MonthValue.gtMonth(this, v1, v2);
    }

    gteMonth(another: MonthValue): boolean
    gteMonth(anotherYear: number, anotherMonth: number): boolean
    gteMonth(v1: MonthValue | number, v2?: number): boolean
    gteMonth(v1: MonthValue | number, v2?: number): boolean {
        return MonthValue.gteMonth(this, v1, v2);
    }

    ltMonth(another: MonthValue): boolean
    ltMonth(anotherYear: number, anotherMonth: number): boolean
    ltMonth(v1: MonthValue | number, v2?: number): boolean
    ltMonth(v1: MonthValue | number, v2?: number): boolean {
        return MonthValue.ltMonth(this, v1, v2);
    }

    lteMonth(another: MonthValue): boolean
    lteMonth(anotherYear: number, anotherMonth: number): boolean
    lteMonth(v1: MonthValue | number, v2?: number): boolean
    lteMonth(v1: MonthValue | number, v2?: number): boolean {
        return MonthValue.lteMonth(this, v1, v2);
    }

    toDateObj() {
        return new Date(this.year, this.month, 1);
    }

    get m() {
        return this.getMonth();
    }

    set m(month: number) {
        this.setMonth(month);
    }

    get month() {
        return this.getMonth();
    }

    set month(month: number) {
        this.setMonth(month);
    }

    get realMonth() {
        return this.month + 1;
    }

    get monthIndex() {
        return MonthValue.monthIndex(this);
    }

    get lastDateOfMonth() {
        return MonthValue.lastDateOfMonth(this);
    }

    static fromTime(time: number): MonthValue {
        const d = new Date(time);
        return new MonthValue(d.getFullYear(), d.getMonth());
    }

    static _monthArgs2(v1: MonthValue | number, v2?: number): [number, number] {
        if (typeof v1 === "number" && typeof v2 === "number") {
            return [v1, v2]
        }
        const {year, month} = v1 as MonthValue;
        return [year, month];
    }

    static _monthArgs4(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): [MonthValue, MonthValue] {
        if (typeof v1 === "number" && typeof v2 === "number") {
            return [
                new MonthValue(v1, v2),
                (typeof v3 === "number" && typeof v4 === "number") ? new MonthValue(v3, v4) : (v3 as MonthValue)
            ];
        } else {
            return [
                v1 as MonthValue,
                (typeof v2 === "number" && typeof v3 === "number") ? new MonthValue(v2, v3) : (v2 as MonthValue)
            ];
        }
    }

    static clampYear(target: MonthValue, min: YearValue, max: YearValue): MonthValue
    static clampYear(target: MonthValue, minYear: number, max: YearValue): MonthValue
    static clampYear(target: MonthValue, min: YearValue, maxYear: number): MonthValue
    static clampYear(target: MonthValue, minYear: number, maxYear: number): MonthValue
    static clampYear(target: MonthValue, min: YearValue | number, max: YearValue | number): MonthValue
    static clampYear(target: MonthValue, min: YearValue | number, max: YearValue | number): MonthValue  {
        if (target.ltYear(min)) return new MonthValue(typeof min === 'number' ? min : min.year, 0);
        if (target.gtYear(max)) return new MonthValue(typeof max === 'number' ? max : max.year, 11);
        return target.clone();
    }

    static clampMonth(target: MonthValue, min: MonthValue, max: MonthValue): MonthValue
    static clampMonth(target: MonthValue, min: MonthValue, maxYear: number, maxMonth: number): MonthValue
    static clampMonth(target: MonthValue, minYear: number, minMonth: number, max: MonthValue): MonthValue
    static clampMonth(target: MonthValue, minYear: number, minMonth: number, maxYear: number, maxMonth: number): MonthValue
    static clampMonth(target: MonthValue, v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): MonthValue
    static clampMonth(target: MonthValue, v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): MonthValue {
        const [min, max] = MonthValue._monthArgs4(v1, v2, v3, v4);
        if (target.ltMonth(min)) return new MonthValue(min.year, min.month);
        if (target.gtMonth(max)) return new MonthValue(max.year, max.month);
        return target.clone();
    }

    static isInMonthRange(target: MonthValue, min: MonthValue, max: MonthValue): boolean
    static isInMonthRange(target: MonthValue, min: MonthValue, maxYear: number, maxMonth: number): boolean
    static isInMonthRange(target: MonthValue, minYear: number, minMonth: number, max: MonthValue): boolean
    static isInMonthRange(target: MonthValue, minYear: number, minMonth: number, maxYear: number, maxMonth: number): boolean
    static isInMonthRange(target: MonthValue, v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean
    static isInMonthRange(target: MonthValue, v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean {
        const [min, max] = MonthValue._monthArgs4(v1, v2, v3, v4);
        return target.gteMonth(min) && target.lteMonth(max);
    }

    static lastDateOfMonth(value: MonthValue): number
    static lastDateOfMonth(year: number, month: number): number
    static lastDateOfMonth(v1: MonthValue | number, v2?: number): number
    static lastDateOfMonth(v1: MonthValue | number, v2?: number): number {
        const [year, month] = MonthValue._monthArgs2(v1, v2);
        return new Date(year, month + 1, 0).getDate();
    }

    static monthIndex(value: MonthValue): number
    static monthIndex(year: number, month: number): number
    static monthIndex(v1: MonthValue | number, v2?: number): number
    static monthIndex(v1: MonthValue | number, v2?: number): number {
        const [year, month] = MonthValue._monthArgs2(v1, v2);
        return (year - 1) * 12 + month;
    }

    static monthDiff(value1: MonthValue, value2: MonthValue): number
    static monthDiff(value1: MonthValue, year2: number, month2: number): number
    static monthDiff(year1: number, month1: number, value2: MonthValue): number
    static monthDiff(year1: number, month1: number, year2: number, month2: number): number
    static monthDiff(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): number
    static monthDiff(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): number {
        const [a, b] = MonthValue._monthArgs4(v1, v2, v3, v4);
        return Math.abs(MonthValue.monthIndex(a) - MonthValue.monthIndex(b));
    }

    static compareMonth(value1: MonthValue, value2: MonthValue): CompareResult
    static compareMonth(value1: MonthValue, year2: number, month2: number): CompareResult
    static compareMonth(year1: number, month1: number, value2: MonthValue): CompareResult
    static compareMonth(year1: number, month1: number, year2: number, month2: number): CompareResult
    static compareMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): CompareResult
    static compareMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): CompareResult {
        const [a, b] = MonthValue._monthArgs4(v1, v2, v3, v4);
        const m1 = MonthValue.monthIndex(a);
        const m2 = MonthValue.monthIndex(b);

        if (m1 < m2) return -1;
        if (m1 > m2) return 1;
        return 0;
    }

    static equalsMonth(value1: MonthValue, value2: MonthValue): boolean
    static equalsMonth(value1: MonthValue, year2: number, month2: number): boolean
    static equalsMonth(year1: number, month1: number, value2: MonthValue): boolean
    static equalsMonth(year1: number, month1: number, year2: number, month2: number): boolean
    static equalsMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean
    static equalsMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean {
        return MonthValue.compareMonth(v1, v2, v3, v4) === 0;
    }

    static gtMonth(value1: MonthValue, value2: MonthValue): boolean
    static gtMonth(value1: MonthValue, year2: number, month2: number): boolean
    static gtMonth(year1: number, month1: number, value2: MonthValue): boolean
    static gtMonth(year1: number, month1: number, year2: number, month2: number): boolean
    static gtMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean
    static gtMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean {
        return MonthValue.compareMonth(v1, v2, v3, v4) === 1;
    }

    static gteMonth(value1: MonthValue, value2: MonthValue): boolean
    static gteMonth(value1: MonthValue, year2: number, month2: number): boolean
    static gteMonth(year1: number, month1: number, value2: MonthValue): boolean
    static gteMonth(year1: number, month1: number, year2: number, month2: number): boolean
    static gteMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean
    static gteMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean {
        return MonthValue.compareMonth(v1, v2, v3, v4) >= 0;
    }

    static ltMonth(value1: MonthValue, value2: MonthValue): boolean
    static ltMonth(value1: MonthValue, year2: number, month2: number): boolean
    static ltMonth(year1: number, month1: number, value2: MonthValue): boolean
    static ltMonth(year1: number, month1: number, year2: number, month2: number): boolean
    static ltMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean
    static ltMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean {
        return MonthValue.compareMonth(v1, v2, v3, v4) === -1;
    }

    static lteMonth(value1: MonthValue, value2: MonthValue): boolean
    static lteMonth(value1: MonthValue, year2: number, month2: number): boolean
    static lteMonth(year1: number, month1: number, value2: MonthValue): boolean
    static lteMonth(year1: number, month1: number, year2: number, month2: number): boolean
    static lteMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean
    static lteMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): boolean {
        return MonthValue.compareMonth(v1, v2, v3, v4) <= 0;
    }
}
