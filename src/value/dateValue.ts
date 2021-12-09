import {CompareResult, MonthValue, YearValue} from "../internal";

export class DateValue extends MonthValue {
    protected _d!: number;

    constructor()
    constructor(year: number)
    constructor(year: number, month: number)
    constructor(year: number, month: number, date: number)
    constructor(year?: number, month?: number, date?: number) {
        if (year === undefined) {
            super();
            this.setDate(new Date().getDate());
        } else {
            if (month === undefined) {
                super(year);
            } else {
                super(year, month);
            }
            this.setDate(date ?? 1);
        }
    }

    setDate(date: number) {
        const d = new Date(this.year, this.month, date);

        this._y = d.getFullYear();
        this._m = d.getMonth();
        this._d = d.getDate();
    }

    getDate() {
        return this._d;
    }

    setMonth(month: number) {
        super.setMonth(month);
        if (this.date > this.lastDateOfMonth) {
            this._d = this.lastDateOfMonth;
        }
    }

    set(year: number): void
    set(year: number, month: number): void
    set(year: number, month: number, date: number): void
    set(year: number, month?: number, date?: number): void
    set(year: number, month?: number, date?: number): void {
        if (typeof month === "number" && typeof date === "number") {
            const d = new Date(year, month, date);

            this._y = d.getFullYear();
            this._m = d.getMonth();
            this._d = d.getDate();
        } else {
            super.set(year, month);
        }
    }

    clone() {
        return new DateValue(this.year, this.month, this.date);
    }

    prevYear(count: number = 1, ignoreDate: boolean = false) {
        return new DateValue(this.year - count, this.month, ignoreDate ? 1 : this.date);
    }

    nextYear(count: number = 1, ignoreDate: boolean = false) {
        return new DateValue(this.year + count, this.month, ignoreDate ? 1 : this.date);
    }

    prevMonth(count: number = 1, ignoreDate: boolean = false) {
        return new DateValue(this.year, this.month - count, ignoreDate ? 1 : this.date);
    }

    nextMonth(count: number = 1, ignoreDate: boolean = false) {
        return new DateValue(this.year, this.month + count, ignoreDate ? 1 : this.date)
    }

    prevDate(count: number = 1) {
        return new DateValue(this.year, this.month, this.date - count);
    }

    nextDate(count: number = 1) {
        return new DateValue(this.year, this.month, this.date + count);
    }

    clampYear(min: YearValue, max: YearValue): DateValue
    clampYear(minYear: number, max: YearValue): DateValue
    clampYear(min: YearValue, maxYear: number): DateValue
    clampYear(minYear: number, maxYear: number): DateValue
    clampYear(min: YearValue | number, max: YearValue | number): DateValue
    clampYear(min: YearValue | number, max: YearValue | number): DateValue  {
        return DateValue.clampYear(this, min, max);
    }

    clampMonth(min: MonthValue, max: MonthValue): DateValue
    clampMonth(min: MonthValue, maxYear: number, maxMonth: number): DateValue
    clampMonth(minYear: number, minMonth: number, max: MonthValue): DateValue
    clampMonth(minYear: number, minMonth: number, maxYear: number, maxMonth: number): DateValue
    clampMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): DateValue
    clampMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): DateValue {
        return DateValue.clampMonth(this, v1, v2, v3, v4);
    }

    clampDate(min: DateValue, max: DateValue): DateValue
    clampDate(min: DateValue, maxYear: number, maxMonth: number, maxDate: number): DateValue
    clampDate(minYear: number, minMonth: number, minDate: number, value2: DateValue): DateValue
    clampDate(minYear: number, minMonth: number, minDate: number, maxYear: number, maxMonth: number, maxDate: number): DateValue
    clampDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): DateValue
    clampDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): DateValue {
        return DateValue.clampDate(this, v1, v2, v3, v4, v5, v6);
    }

    isInDateRange(min: DateValue, max: DateValue): boolean
    isInDateRange(min: DateValue, maxYear: number, maxMonth: number, maxDate: number): boolean
    isInDateRange(minYear: number, minMonth: number, minDate: number, value2: DateValue): boolean
    isInDateRange(minYear: number, minMonth: number, minDate: number, maxYear: number, maxMonth: number, maxDate: number): boolean
    isInDateRange(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    isInDateRange(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.isInDateRange(this, v1, v2, v3, v4, v5, v6);
    }

    dateDiff(another: DateValue): number
    dateDiff(anotherYear: number, anotherMonth: number, anotherDate: number): number
    dateDiff(v1: DateValue | number, v2?: number, v3?: number): number
    dateDiff(v1: DateValue | number, v2?: number, v3?: number): number {
        return DateValue.dateDiff(this, v1, v2, v3);
    }

    compareDate(another: DateValue): CompareResult
    compareDate(anotherYear: number, anotherMonth: number, anotherDate: number): CompareResult
    compareDate(v1: DateValue | number, v2?: number, v3?: number): CompareResult
    compareDate(v1: DateValue | number, v2?: number, v3?: number): CompareResult {
        return DateValue.compareDate(this, v1, v2, v3);
    }

    equalsDate(another: DateValue): boolean
    equalsDate(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    equalsDate(v1: DateValue | number, v2?: number, v3?: number): boolean
    equalsDate(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.equalsDate(this, v1, v2, v3);
    }

    gtDate(another: DateValue): boolean
    gtDate(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    gtDate(v1: DateValue | number, v2?: number, v3?: number): boolean
    gtDate(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.gtDate(this, v1, v2, v3);
    }

    gteDate(another: DateValue): boolean
    gteDate(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    gteDate(v1: DateValue | number, v2?: number, v3?: number): boolean
    gteDate(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.gteDate(this, v1, v2, v3);
    }

    ltDate(another: DateValue): boolean
    ltDate(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    ltDate(v1: DateValue | number, v2?: number, v3?: number): boolean
    ltDate(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.ltDate(this, v1, v2, v3);
    }

    lteDate(another: DateValue): boolean
    lteDate(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    lteDate(v1: DateValue | number, v2?: number, v3?: number): boolean
    lteDate(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.lteDate(this, v1, v2, v3);
    }

    toDateObj() {
        return new Date(this.y, this.m, this.d);
    }

    get d() {
        return this.getDate();
    }

    set d(date: number) {
        this.setDate(date);
    }

    get date() {
        return this.getDate();
    }

    set date(date: number) {
        this.setDate(date);
    }

    get dateIndex() {
        return DateValue.dateIndex(this);
    }

    static fromTime(time: number): DateValue {
        const d = new Date(time);
        return new DateValue(d.getFullYear(), d.getMonth(), d.getDate());
    }

    private static _dateArgs6(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): [DateValue, DateValue] {
        if (typeof v1 === "number" && typeof v2 === "number" && typeof v3 === "number") {
            return [
                new DateValue(v1, v2, v3),
                (typeof v4 === "number" && typeof v5 === "number" && typeof v6 === "number") ? new DateValue(v4, v5, v6) : (v4 as DateValue)
            ];
        } else {
            return [
                v1 as DateValue,
                (typeof v2 === "number" && typeof v3 === "number" && typeof v4 === "number") ? new DateValue(v2, v3, v4) : (v2 as DateValue)
            ];
        }
    }

    static clampYear(target: DateValue, min: YearValue, max: YearValue): DateValue
    static clampYear(target: DateValue, minYear: number, max: YearValue): DateValue
    static clampYear(target: DateValue, min: YearValue, maxYear: number): DateValue
    static clampYear(target: DateValue, minYear: number, maxYear: number): DateValue
    static clampYear(target: DateValue, min: YearValue | number, max: YearValue | number): DateValue
    static clampYear(target: DateValue, min: YearValue | number, max: YearValue | number): DateValue  {
        if (target.ltYear(min)) return new DateValue(typeof min === 'number' ? min : min.year, 0, 1);
        if (target.gtYear(max)) return new DateValue(typeof max === 'number' ? max : max.year, 11, 31);
        return target.clone();
    }

    static clampMonth(target: DateValue, min: MonthValue, max: MonthValue): DateValue
    static clampMonth(target: DateValue, min: MonthValue, maxYear: number, maxMonth: number): DateValue
    static clampMonth(target: DateValue, minYear: number, minMonth: number, max: MonthValue): DateValue
    static clampMonth(target: DateValue, minYear: number, minMonth: number, maxYear: number, maxMonth: number): DateValue
    static clampMonth(target: DateValue, v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): DateValue
    static clampMonth(target: DateValue, v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): DateValue {
        const [min, max] = MonthValue._monthArgs4(v1, v2, v3, v4);
        if (target.ltMonth(min)) return new DateValue(min.year, min.month, 1);
        if (target.gtMonth(max)) return new DateValue(max.year, max.month + 1, 0);
        return target.clone();
    }

    static clampDate(target: DateValue, min: DateValue, max: DateValue): DateValue
    static clampDate(target: DateValue, min: DateValue, maxYear: number, maxMonth: number, maxDate: number): DateValue
    static clampDate(target: DateValue, minYear: number, minMonth: number, minDate: number, value2: DateValue): DateValue
    static clampDate(target: DateValue, minYear: number, minMonth: number, minDate: number, maxYear: number, maxMonth: number, maxDate: number): DateValue
    static clampDate(target: DateValue, v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): DateValue
    static clampDate(target: DateValue, v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): DateValue {
        const [min, max] = DateValue._dateArgs6(v1, v2, v3, v4, v5, v6);
        if (target.ltDate(min)) return new DateValue(min.year, min.month, min.date);
        if (target.gtDate(max)) return new DateValue(max.year, max.month, max.date);
        return target.clone();
    }

    static isInDateRange(target: DateValue, min: DateValue, max: DateValue): boolean
    static isInDateRange(target: DateValue, min: DateValue, maxYear: number, maxMonth: number, maxDate: number): boolean
    static isInDateRange(target: DateValue, minYear: number, minMonth: number, minDate: number, value2: DateValue): boolean
    static isInDateRange(target: DateValue, minYear: number, minMonth: number, minDate: number, maxYear: number, maxMonth: number, maxDate: number): boolean
    static isInDateRange(target: DateValue, v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static isInDateRange(target: DateValue, v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        const [min, max] = DateValue._dateArgs6(v1, v2, v3, v4, v5, v6);
        return target.gteDate(min) && target.lteDate(max);
    }

    static dateIndex(value: DateValue): number
    static dateIndex(year: number, month: number, date: number): number
    static dateIndex(v1: DateValue | number, v2?: number, v3?: number): number
    static dateIndex(v1: DateValue | number, v2?: number, v3?: number): number {
        let d: Date | null = null;

        if (typeof v1 === "number" && typeof v2 === "number" && typeof v3 === "number") {
            d = new Date(v1, v2, v3);
        }
        if (v1 && typeof v1 !== "number") {
            d = v1.dateObj;
        }
        if (d) {
            const time = d.getTime() - d.getTimezoneOffset() * 1000 * 60;

            return Math.floor(time / 1000 / 60 / 60 / 24);
        }
        return 0;
    }

    static dateDiff(value1: DateValue, value2: DateValue): number
    static dateDiff(value1: DateValue, year2: number, month2: number, date2: number): number
    static dateDiff(year1: number, month1: number, date1: number, value2: DateValue): number
    static dateDiff(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): number
    static dateDiff(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): number
    static dateDiff(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): number {
        const [a, b] = DateValue._dateArgs6(v1, v2, v3, v4, v5, v6);
        return Math.abs(DateValue.dateIndex(a) - DateValue.dateIndex(b));
    }

    static compareDate(value1: DateValue, value2: DateValue): CompareResult
    static compareDate(value1: DateValue, year2: number, month2: number, date2: number): CompareResult
    static compareDate(year1: number, month1: number, date1: number, value2: DateValue): CompareResult
    static compareDate(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): CompareResult
    static compareDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): CompareResult
    static compareDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): CompareResult {
        const [a, b] = DateValue._dateArgs6(v1, v2, v3, v4, v5, v6);
        let d1 = DateValue.dateIndex(a);
        let d2 = DateValue.dateIndex(b);

        if (d1 < d2) return -1;
        if (d1 > d2) return 1;
        return 0;
    }

    static equalsDate(value1: DateValue, value2: DateValue): boolean
    static equalsDate(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static equalsDate(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static equalsDate(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static equalsDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static equalsDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) === 0;
    }

    static gtDate(value1: DateValue, value2: DateValue): boolean
    static gtDate(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static gtDate(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static gtDate(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static gtDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static gtDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) === 1;
    }

    static gteDate(value1: DateValue, value2: DateValue): boolean
    static gteDate(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static gteDate(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static gteDate(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static gteDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static gteDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) >= 0;
    }

    static ltDate(value1: DateValue, value2: DateValue): boolean
    static ltDate(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static ltDate(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static ltDate(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static ltDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static ltDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) === -1;
    }

    static lteDate(value1: DateValue, value2: DateValue): boolean
    static lteDate(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static lteDate(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static lteDate(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static lteDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static lteDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) <= 0;
    }
}
