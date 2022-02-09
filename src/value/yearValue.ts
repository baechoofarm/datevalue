import {CompareResult} from "./compareResult";
import {Day} from "./day";

export class YearValue {
    protected _y: number;
    protected _startDayOfWeek = Day.SUN;

    constructor()
    constructor(year: number)
    constructor(year?: number)
    constructor(year?: number) {
        this._y = year ?? new Date().getFullYear();
    }

    setYear(year: number) {
        this._y = year;
    }

    getYear() {
        return this._y;
    }

    set(year: number) {
        this.setYear(year);
    }

    clone() {
        return new YearValue(this.year);
    }

    prevYear(count: number = 1) {
        return new YearValue(this.year - count);
    }

    nextYear(count: number = 1) {
        return new YearValue(this.year + count);
    }

    setStartDayOfWeek(startDayOfWeek: Day) {
        this._startDayOfWeek = startDayOfWeek;
    }

    clampYear(min: YearValue, max: YearValue): YearValue
    clampYear(minYear: number, max: YearValue): YearValue
    clampYear(min: YearValue, maxYear: number): YearValue
    clampYear(minYear: number, maxYear: number): YearValue
    clampYear(min: YearValue | number, max: YearValue | number): YearValue
    clampYear(min: YearValue | number, max: YearValue | number): YearValue {
        return YearValue.clampYear(this, min, max);
    }

    isInYearRange(min: YearValue, max: YearValue): boolean
    isInYearRange(minYear: number, max: YearValue): boolean
    isInYearRange(min: YearValue, maxYear: number): boolean
    isInYearRange(minYear: number, maxYear: number): boolean
    isInYearRange(min: YearValue | number, max: YearValue | number): boolean
    isInYearRange(min: YearValue | number, max: YearValue | number): boolean {
        return YearValue.isInYearRange(this, min, max);
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

    equalsYear(another: YearValue): boolean
    equalsYear(anotherYear: number): boolean
    equalsYear(value: YearValue | number): boolean
    equalsYear(value: YearValue | number): boolean {
        return YearValue.equalsYear(this, value);
    }

    gtYear(another: YearValue): boolean
    gtYear(anotherYear: number): boolean
    gtYear(value: YearValue | number): boolean
    gtYear(value: YearValue | number): boolean {
        return YearValue.gtYear(this, value);
    }

    gteYear(another: YearValue): boolean
    gteYear(anotherYear: number): boolean
    gteYear(value: YearValue | number): boolean
    gteYear(value: YearValue | number): boolean {
        return YearValue.gteYear(this, value);
    }

    ltYear(another: YearValue): boolean
    ltYear(anotherYear: number): boolean
    ltYear(value: YearValue | number): boolean
    ltYear(value: YearValue | number): boolean {
        return YearValue.ltYear(this, value);
    }

    lteYear(another: YearValue): boolean
    lteYear(anotherYear: number): boolean
    lteYear(value: YearValue | number): boolean
    lteYear(value: YearValue | number): boolean {
        return YearValue.lteYear(this, value);
    }

    toDateObj() {
        return new Date(this.year, 0, 1);
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

    get isLeapYear() {
        return YearValue.isLeapYear(this);
    }

    set startDayOfWeek(startDayOfWeek) {
        this.setStartDayOfWeek(startDayOfWeek);
    }

    get startDayOfWeek() {
        return this._startDayOfWeek;
    }

    static fromTime(time: number): YearValue {
        return new YearValue(new Date(time).getFullYear());
    }

    static fromDateObj(obj: Date): YearValue {
        return new YearValue(obj.getFullYear());
    }

    static fromDateString(date: string): YearValue {
        return new YearValue(new Date(date).getFullYear());
    }

    static clampYear(target: YearValue, min: YearValue, max: YearValue): YearValue
    static clampYear(target: YearValue, minYear: number, max: YearValue): YearValue
    static clampYear(target: YearValue, min: YearValue, maxYear: number): YearValue
    static clampYear(target: YearValue, minYear: number, maxYear: number): YearValue
    static clampYear(target: YearValue, min: YearValue | number, max: YearValue | number): YearValue
    static clampYear(target: YearValue, min: YearValue | number, max: YearValue | number): YearValue {
        if (target.ltYear(min)) return new YearValue(typeof min === 'number' ? min : min.year);
        if (target.gtYear(max)) return new YearValue(typeof max === "number" ? max : max.year);
        return target.clone();
    }

    static isInYearRange(target: YearValue, min: YearValue, max: YearValue): boolean
    static isInYearRange(target: YearValue, minYear: number, max: YearValue): boolean
    static isInYearRange(target: YearValue, min: YearValue, maxYear: number): boolean
    static isInYearRange(target: YearValue, minYear: number, maxYear: number): boolean
    static isInYearRange(target: YearValue, min: YearValue | number, max: YearValue | number): boolean
    static isInYearRange(target: YearValue, min: YearValue | number, max: YearValue | number): boolean {
        return target.gteYear(min) && target.lteYear(max);
    }

    static isLeapYear(value: YearValue): boolean
    static isLeapYear(year: number): boolean
    static isLeapYear(v: YearValue | number): boolean
    static isLeapYear(v: YearValue | number): boolean {
        const y = typeof v === "number" ? v : v.y;
        return ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0);
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

    static equalsYear(value1: YearValue, value2: YearValue): boolean
    static equalsYear(value1: YearValue, year2: number): boolean
    static equalsYear(year1: number, value2: YearValue): boolean
    static equalsYear(year1: number, year2: number): boolean
    static equalsYear(v1: YearValue | number, v2: YearValue | number): boolean
    static equalsYear(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) === 0;
    }

    static gtYear(value1: YearValue, value2: YearValue): boolean
    static gtYear(value1: YearValue, year2: number): boolean
    static gtYear(year1: number, value2: YearValue): boolean
    static gtYear(year1: number, year2: number): boolean
    static gtYear(v1: YearValue | number, v2: YearValue | number): boolean
    static gtYear(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) === 1;
    }

    static gteYear(value1: YearValue, value2: YearValue): boolean
    static gteYear(value1: YearValue, year2: number): boolean
    static gteYear(year1: number, value2: YearValue): boolean
    static gteYear(year1: number, year2: number): boolean
    static gteYear(v1: YearValue | number, v2: YearValue | number): boolean
    static gteYear(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) >= 0;
    }

    static ltYear(value1: YearValue, value2: YearValue): boolean
    static ltYear(value1: YearValue, year2: number): boolean
    static ltYear(year1: number, value2: YearValue): boolean
    static ltYear(year1: number, year2: number): boolean
    static ltYear(v1: YearValue | number, v2: YearValue | number): boolean
    static ltYear(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) === -1;
    }

    static lteYear(value1: YearValue, value2: YearValue): boolean
    static lteYear(value1: YearValue, year2: number): boolean
    static lteYear(year1: number, value2: YearValue): boolean
    static lteYear(year1: number, year2: number): boolean
    static lteYear(v1: YearValue | number, v2: YearValue | number): boolean
    static lteYear(v1: YearValue | number, v2: YearValue | number): boolean {
        return YearValue.compareYear(v1, v2) <= 0;
    }
}
