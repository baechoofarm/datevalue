import {CompareResult, MonthValue} from "../internal";

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
        if (typeof v1 === "number" && typeof v2 === "number" && typeof v3 === "number") {
            if (typeof v4 === "number" && typeof v5 === "number" && typeof v6 === "number") {
                return Math.abs(DateValue.dateIndex(v1, v2, v3) - DateValue.dateIndex(v4, v5, v6));
            }
            if (v4 && typeof v4 !== "number") {
                return Math.abs(DateValue.dateIndex(v1, v2, v3) - DateValue.dateIndex(v4));
            }
        }
        if (typeof v1 !== "number") {
            if (typeof v2 === "number" && typeof v3 === "number" && typeof v4 === "number") {
                return Math.abs(DateValue.dateIndex(v1) - DateValue.dateIndex(v2, v3, v4));
            }
            if (v2 && typeof v2 !== "number") {
                return Math.abs(DateValue.dateIndex(v1) - DateValue.dateIndex(v2));
            }
        }
        return 0;
    }

    static compareDate(value1: DateValue, value2: DateValue): CompareResult
    static compareDate(value1: DateValue, year2: number, month2: number, date2: number): CompareResult
    static compareDate(year1: number, month1: number, date1: number, value2: DateValue): CompareResult
    static compareDate(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): CompareResult
    static compareDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): CompareResult
    static compareDate(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): CompareResult {
        let d1 = 0;
        let d2 = 0;

        if (typeof v1 === "number" && typeof v2 === "number" && typeof v3 === "number") {
            d1 = DateValue.dateIndex(v1, v2, v3);
            if (typeof v4 === "number" && typeof v5 === "number" && typeof v6 === "number") {
                d2 = DateValue.dateIndex(v4, v5, v6);
            }
            if (v4 && typeof v4 !== "number") {
                d2 = DateValue.dateIndex(v4);
            }
        }
        if (typeof v1 !== "number") {
            d1 = DateValue.dateIndex(v1);
            if (typeof v2 === "number" && typeof v3 === "number" && typeof v4 === "number") {
                d2 = DateValue.dateIndex(v2, v3, v4);
            }
            if (v2 && typeof v2 !== "number") {
                d2 = DateValue.dateIndex(v2);
            }
        }

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
