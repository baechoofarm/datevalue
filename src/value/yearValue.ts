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
}
