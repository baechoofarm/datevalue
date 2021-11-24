import {CompareResult, MonthValue} from "../internal";

export class DateValue extends MonthValue {
    protected _d: number;

    constructor(year: number, month: number, date: number) {
        super(year, month);
        this._d = date;
    }

    setDate(date: number) {
        this._d = date;
    }

    getDate() {
        return this._d;
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

    dateEquals(another: DateValue): boolean
    dateEquals(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    dateEquals(v1: DateValue | number, v2?: number, v3?: number): boolean
    dateEquals(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.dateEquals(this, v1, v2, v3);
    }

    dateGT(another: DateValue): boolean
    dateGT(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    dateGT(v1: DateValue | number, v2?: number, v3?: number): boolean
    dateGT(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.dateGT(this, v1, v2, v3);
    }

    dateGTE(another: DateValue): boolean
    dateGTE(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    dateGTE(v1: DateValue | number, v2?: number, v3?: number): boolean
    dateGTE(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.dateGTE(this, v1, v2, v3);
    }

    dateLT(another: DateValue): boolean
    dateLT(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    dateLT(v1: DateValue | number, v2?: number, v3?: number): boolean
    dateLT(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.dateLT(this, v1, v2, v3);
    }

    dateLTE(another: DateValue): boolean
    dateLTE(anotherYear: number, anotherMonth: number, anotherDate: number): boolean
    dateLTE(v1: DateValue | number, v2?: number, v3?: number): boolean
    dateLTE(v1: DateValue | number, v2?: number, v3?: number): boolean {
        return DateValue.dateLTE(this, v1, v2, v3);
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

    static dateEquals(value1: DateValue, value2: DateValue): boolean
    static dateEquals(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static dateEquals(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static dateEquals(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static dateEquals(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static dateEquals(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) === 0;
    }

    static dateGT(value1: DateValue, value2: DateValue): boolean
    static dateGT(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static dateGT(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static dateGT(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static dateGT(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static dateGT(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) === 1;
    }

    static dateGTE(value1: DateValue, value2: DateValue): boolean
    static dateGTE(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static dateGTE(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static dateGTE(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static dateGTE(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static dateGTE(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) >= 0;
    }

    static dateLT(value1: DateValue, value2: DateValue): boolean
    static dateLT(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static dateLT(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static dateLT(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static dateLT(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static dateLT(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) === -1;
    }

    static dateLTE(value1: DateValue, value2: DateValue): boolean
    static dateLTE(value1: DateValue, year2: number, month2: number, date2: number): boolean
    static dateLTE(year1: number, month1: number, date1: number, value2: DateValue): boolean
    static dateLTE(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): boolean
    static dateLTE(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean
    static dateLTE(v1: DateValue | number, v2: DateValue | number, v3?: number, v4?: DateValue | number, v5?: number, v6?: number): boolean {
        return DateValue.compareDate(v1, v2, v3, v4, v5, v6) <= 0;
    }
}
