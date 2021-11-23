import {YearValue} from "../internal";

export class MonthValue extends YearValue {
    protected _m: number;

    constructor(year: number, month: number) {
        super(year);
        this._m = month;
    }

    setMonth(month: number) {
        this._m = month;
    }

    getMonth() {
        return this._m;
    }

    monthDiff(value: MonthValue) {
        return MonthValue.monthDiff(this, value);
    }

    toDateObj() {
        return new Date(this.y, this.m, 1);
    }

    get m() {
        return this.getMonth();
    }

    set m(month: number) {
        this.setMonth(month);
    }

    get month() {
        return this.getMonth();
    }

    set month(month: number) {
        this.setMonth(month);
    }

    static monthDiff(value1: MonthValue, value2: MonthValue) {
        const m1 = value1.y * 12 + value1.m;
        const m2 = value2.y * 12 + value2.m;

        return Math.abs(m1 - m2);
    }
}
