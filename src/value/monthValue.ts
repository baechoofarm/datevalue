import {CompareResult, YearValue} from "../internal";

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

    monthDiff(value: MonthValue): number
    monthDiff(year: number, month: number): number
    monthDiff(v1: MonthValue | number, v2?: number): number {
        if (typeof v1 !== 'number') {
            return MonthValue.monthDiff(this, v1);
        }
        if (typeof v2 === 'number') {
            return MonthValue.monthDiff(this, v1, v2);
        }
        return 0;
    }

    compareMonth(another: MonthValue): CompareResult
    compareMonth(anotherYear: number, anotherMonth: number): CompareResult
    compareMonth(v1: MonthValue | number, v2?: number): CompareResult {
        if (typeof v1 !== 'number') {
            return MonthValue.compareMonth(this, v1);
        }
        if (typeof v2 === 'number') {
            return MonthValue.compareMonth(this, v1, v2);
        }
        return 0;
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

    get monthIndex() {
        return MonthValue.monthIndex(this);
    }

    static monthIndex(value: MonthValue): number
    static monthIndex(year: number, month: number): number
    static monthIndex(v1: MonthValue | number, v2?: number): number {
        if (typeof v1 !== "number") {
            return (v1.y - 1) * 12 + v1.m;
        }
        if (typeof v2 === "number") {
            return (v1 - 1) * 12 + v2;
        }
        return (v1 - 1) * 12;
    }

    static monthDiff(value1: MonthValue, value2: MonthValue): number
    static monthDiff(value1: MonthValue, year2: number, month2: number): number
    static monthDiff(year1: number, month1: number, value2: MonthValue): number
    static monthDiff(year1: number, month1: number, year2: number, month2: number): number
    static monthDiff(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): number {
        if (typeof v1 === 'number' && typeof v2 === 'number') {
            if (typeof v3 === 'number' && typeof v4 === 'number') {
                return Math.abs(MonthValue.monthIndex(v1, v2) - MonthValue.monthIndex(v3, v4));
            }
            if (v3 && typeof v3 !== 'number') {
                return Math.abs(MonthValue.monthIndex(v1, v2) - MonthValue.monthIndex(v3));
            }
        }
        if (v1 && typeof v1 !== 'number') {
            if (typeof v2 === 'number' && typeof v3 === 'number') {
                return Math.abs(MonthValue.monthIndex(v1) - MonthValue.monthIndex(v2, v3));
            }
            if (v2 && typeof v2 !== 'number') {
                return Math.abs(MonthValue.monthIndex(v1) - MonthValue.monthIndex(v2));
            }
        }
        return 0;
    }

    static compareMonth(value1: MonthValue, value2: MonthValue): CompareResult
    static compareMonth(value1: MonthValue, year2: number, month2: number): CompareResult
    static compareMonth(year1: number, month1: number, value2: MonthValue): CompareResult
    static compareMonth(year1: number, month1: number, year2: number, month2: number): CompareResult
    static compareMonth(v1: MonthValue | number, v2: MonthValue | number, v3?: MonthValue | number, v4?: number): CompareResult {
        let m1 = 0;
        let m2 = 0;

        if (typeof v1 === 'number' && typeof v2 === 'number') {
            m1 = MonthValue.monthIndex(v1, v2);
            if (typeof v3 === 'number' && typeof v4 === 'number') {
                m2 = MonthValue.monthIndex(v3, v4);
            }
            if (v3 && typeof v3 !== 'number') {
                m2 = MonthValue.monthIndex(v3);
            }
        }
        if (v1 && typeof v1 !== 'number') {
            m1 = MonthValue.monthIndex(v1);
            if (typeof v2 === 'number' && typeof v3 === 'number') {
                m2 = MonthValue.monthIndex(v2, v3);
            }
            if (v2 && typeof v2 !== 'number') {
                m2 = MonthValue.monthIndex(v2);
            }
        }

        if (m1 < m2) return -1;
        if (m1 > m2) return 1;
        return 0;
    }
}
