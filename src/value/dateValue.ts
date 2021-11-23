import {MonthValue} from "../internal";

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
}
