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

    yearDiff(value: YearValue) {
        return YearValue.yearDiff(this, value);
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

    static yearDiff(value1: YearValue, value2: YearValue) {
        return Math.abs(value1.y - value2.y);
    }
}
