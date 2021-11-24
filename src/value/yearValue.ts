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

    yearDiff(value: YearValue): number
    yearDiff(value: number): number
    yearDiff(value: YearValue | number): number {
        if (typeof value === "number") {
            return YearValue.yearDiff(this, value);
        }
        return YearValue.yearDiff(this, value);
    }

    compareYear(another: YearValue): CompareResult
    compareYear(anotherYear: number): CompareResult
    compareYear(another: YearValue | number): CompareResult {
        if (typeof another === 'number') {
            return YearValue.compareYear(this.y, another);
        }
        return YearValue.compareYear(this, another);
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
    static yearDiff(v1: YearValue | number, v2: YearValue | number): number {
        const y1 = typeof v1 === 'number' ? v1 : v1.y;
        const y2 = typeof v2 === 'number' ? v2 : v2.y;

        return Math.abs(y1 - y2);
    }

    static compareYear(year1: YearValue, year2: YearValue): CompareResult
    static compareYear(year1: YearValue, year2: number): CompareResult
    static compareYear(year1: number, year2: YearValue): CompareResult
    static compareYear(year1: number, year2: number): CompareResult
    static compareYear(v1: YearValue | number, v2: YearValue | number): CompareResult {
        const y1 = typeof v1 === 'number' ? v1 : v1.y;
        const y2 = typeof v2 === 'number' ? v2 : v2.y;

        if (y1 < y2) return -1;
        if (y1 > y2) return 1;
        return 0;
    }
}
