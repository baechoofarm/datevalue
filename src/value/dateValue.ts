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

    dateDiff(value: DateValue) {
        return DateValue.dateDiff(this, value);
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

    static dateDiff(value1: DateValue, value2: DateValue) {
        const t1 = value1.dateObj.getTime();
        const t2 = value2.dateObj.getTime();
        const diff = Math.abs(t1 - t2);

        return Math.floor(diff / 1000 / 60 / 60 / 24);
    }
}
