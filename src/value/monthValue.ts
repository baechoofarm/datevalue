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
}
