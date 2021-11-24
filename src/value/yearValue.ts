import {CompareResult} from "./compareResult";

export class YearValue {
    protected _y: number;

    constructor(year: number) {
        this._y = year;
    }

    setYear(year: number) {
        this._y = year;
    }

    getYear() {
        return this._y;
    }

    yearDiff(another: YearValue): number
    yearDiff(anotherYear: number): number
    yearDiff(value: YearValue | number): number
    yearDiff(value: YearValue | number): number {
        return YearValue.yearDiff(this, value);
    }

    compareYear(another: YearValue): CompareResult
    compareYear(anotherYear: number): CompareResult
    compareYear(another: YearValue | number): CompareResult
    compareYear(another: YearValue | number): CompareResult {
        return YearValue.compareYear(this, another);
    }

    yearEquals(another: YearValue): boolean
    yearEquals(anotherYear: number): boolean
    yearEquals(value: YearValue | number): boolean
    yearEquals(value: YearValue | number): boolean {
        return YearValue.yearEquals(this, value);
    }

    yearGT(another: YearValue): boolean
    yearGT(anotherYear: number): boolean
    yearGT(value: YearValue | number): boolean
    yearGT(value: YearValue | number): boolean {
        return YearValue.yearGT(this, value);
    }

    yearGTE(another: YearValue): boolean
    yearGTE(anotherYear: number): boolean
    yearGTE(value: YearValue | number): boolean
    yearGTE(value: YearValue | number): boolean {
        return YearValue.yearGTE(this, value);
    }

    yearLT(another: YearValue): boolean
    yearLT(anotherYear: number): boolean
    yearLT(value: YearValue | number): boolean
    yearLT(value: YearValue | number): boolean {
        return YearValue.yearLT(this, value);
    }

    yearLTE(another: YearValue): boolean
    yearLTE(anotherYear: number): boolean
    yearLTE(value: YearValue | number): boolean
    yearLTE(value: YearValue | number): boolean {
        return YearValue.yearLTE(this, value);
    }

    toDateObj() {
        return new Date(this.y, 0, 1);
    }

    set y(year) {
        this.setYear(year);
    }

    get y() {
        return this.getYear();
    }

    set year(year) {
        this.setYear(year);
    }

    get year() {
        return this.getYear();
    }

    get dateObj() {
        return this.toDateObj();
    }

    get time() {
        return this.dateObj.getTime();
    }

    static yearDiff(value1: YearValue, value2: YearValue): number
    static yearDiff(value1: YearValue, year2: number): number
    static yearDiff(year1: number, value2: YearValue): number
    static yearDiff(year1: number, year2: number): number
    static yearDiff(v1: YearValue | number, v2: YearValue | number): number
    static yearDiff(v1: YearValue | number, v2: YearValue | number): number {
        const y1 = typeof v1 === 'number' ? v1 : v1.y;
        const y2 = typeof v2 === 'number' ? v2 : v2.y;

        return Math.abs(y1 - y2);
    }

    static compareYear(year1: YearValue, year2: YearValue): CompareResult
    static compareYear(year1: YearValue, year2: number): CompareResult
    static compareYear(year1: number, year2: YearValue): CompareResult
    static compareYear(year1: number, year2: number): CompareResult
    static compareYear(v1: YearValue | number, v2: YearValue | number): CompareResult
    static compareYear(v1: YearValue | number, v2: YearValue | number): CompareResult {
        const y1 = typeof v1 === 'number' ? v1 : v1.y;
        const y2 = typeof v2 === 'number' ? v2 : v2.y;

        if (y1 < y2) return -1;
        if (y1 > y2) return 1;
        return 0;
    }

    static yearEquals(value1: YearValue, value2: YearValue): boolean
    static yearEquals(value1: YearValue, year2: number): boolean
    static yearEquals(year1: number, value2: YearValue): boolean
    static yearEquals(year1: number, year2: number): boolean
    static yearEquals(v1: YearValue | number, v2: YearValue | number): boolean
    static yearEquals(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) === 0;
    }

    static yearGT(value1: YearValue, value2: YearValue): boolean
    static yearGT(value1: YearValue, year2: number): boolean
    static yearGT(year1: number, value2: YearValue): boolean
    static yearGT(year1: number, year2: number): boolean
    static yearGT(v1: YearValue | number, v2: YearValue | number): boolean
    static yearGT(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) === 1;
    }

    static yearGTE(value1: YearValue, value2: YearValue): boolean
    static yearGTE(value1: YearValue, year2: number): boolean
    static yearGTE(year1: number, value2: YearValue): boolean
    static yearGTE(year1: number, year2: number): boolean
    static yearGTE(v1: YearValue | number, v2: YearValue | number): boolean
    static yearGTE(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) >= 0;
    }

    static yearLT(value1: YearValue, value2: YearValue): boolean
    static yearLT(value1: YearValue, year2: number): boolean
    static yearLT(year1: number, value2: YearValue): boolean
    static yearLT(year1: number, year2: number): boolean
    static yearLT(v1: YearValue | number, v2: YearValue | number): boolean
    static yearLT(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) === -1;
    }

    static yearLTE(value1: YearValue, value2: YearValue): boolean
    static yearLTE(value1: YearValue, year2: number): boolean
    static yearLTE(year1: number, value2: YearValue): boolean
    static yearLTE(year1: number, year2: number): boolean
    static yearLTE(v1: YearValue | number, v2: YearValue | number): boolean
    static yearLTE(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) <= 0;
    }
}
