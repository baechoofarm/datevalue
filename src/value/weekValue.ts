import {DateValue, Day, MonthValue} from "../internal";

export class WeekValue extends MonthValue {
    protected _w!: number;

    constructor()
    constructor(year: number)
    constructor(year: number, month: number)
    constructor(year: number, month: number, week: number, startDateOfWeek?: Day)
    constructor(year?: number, month?: number, week?: number, startDateOfWeek?: Day) {
        if (year === undefined) {
            super();
        } else if (month === undefined) {
            super(year);
        } else {
            super(year, month);
        }
        this._startDayOfWeek = startDateOfWeek ?? Day.SUN;
        this.setWeek(week ?? 1);
    }

    setWeek(week: number) {
        const startDate = WeekValue.startDateOfWeek(this.y, this.m, 1, this.startDayOfWeek);

        startDate.date += (week - 1) * 7;

        let year: number = this.y;
        let month: number = this.m;

        if (week >= 1) {
            const firstDate = WeekValue.startDateOfDateWeek(this.y, this.m, 1, this.startDayOfWeek);
            const lastDate = WeekValue.startDateOfDateWeek(this.y, this.m, MonthValue.lastDateOfMonth(this), this.startDayOfWeek);
            const lastWeek = Math.floor(lastDate.dateDiff(firstDate) / 7) + 1;

            if (week > lastWeek) {
                year = startDate.year
                month = startDate.month;
            }
        }

        const firstDate = WeekValue.startDateOfDateWeek(year, month, 1, startDate.startDayOfWeek);
        const w = Math.ceil((startDate.dateDiff(firstDate) + 7) / 7);

        this._y = year;
        this._m = month;
        this._w = w;
    }

    getWeek() {
        return this._w;
    }

    prevYear(count: number = 1) {
        return new WeekValue(this.year - count, this.month, this.week);
    }

    nextYear(count: number = 1) {
        return new WeekValue(this.year + count, this.month, this.week);
    }

    prevMonth(count: number = 1) {
        return new WeekValue(this.year, this.month - count, this.week);
    }

    nextMonth(count: number = 1) {
        return new WeekValue(this.year, this.month + count, this.week);
    }

    prevWeek(count: number = 1) {
        return new WeekValue(this.year, this.month, this.week - count);
    }

    nextWeek(count: number = 1) {
        return new WeekValue(this.year, this.month, this.week + count);
    }

    toDateObj(): Date {
        return this.startDateOfWeek.dateObj;
    }

    get week() {
        return this.getWeek();
    }

    set week(week: number) {
        this.setWeek(week);
    }

    get w() {
        return this.getWeek();
    }

    set w(week: number) {
        this.setWeek(week);
    }

    get startDateOfWeek() {
        return WeekValue.startDateOfWeek(this);
    }

    get endDateOfWeek() {
        return WeekValue.endDateOfWeek(this);
    }

    get dateListOfWeek() {
        return WeekValue.dateListOfWeek(this);
    }

    protected static _weekArgs4(v1: WeekValue | number, v2?: number, v3?: number, v4?: Day): [number, number, number, Day] {
        if (typeof v1 === "number" && typeof v2 === "number" && typeof v3 === "number") {
            return [v1, v2, v3, (v4 as Day) ?? Day.SUN];
        } else {
            const {year, month, week, startDayOfWeek} = (v1 as WeekValue);
            return [year, month, week, startDayOfWeek];
        }
    }

    protected static _weekArgs6(v1: WeekValue | number, v2: WeekValue | number, v3?: number, v4?: WeekValue | number, v5?: number, v6?: number): [number, number, number, Day, number, number, number, Day] {
        if (typeof v1 === "number" && typeof v2 === "number" && typeof v3 === "number") {
            if (typeof v4 === "number" && typeof v5 === "number" && typeof v6 === "number") {
                return [v1, v2, v3, Day.SUN, v4, v5, v6, Day.SUN];
            } else {
                const {y, m, w, startDayOfWeek} = v4 as WeekValue;
                return [v1, v2, v3, startDayOfWeek, y, m, w, startDayOfWeek];
            }
        } else {
            const {y, m, w, startDayOfWeek} = v1 as WeekValue;

            if (typeof v2 === "number" && typeof v3 === "number" && typeof v4 === "number") {
                return [y, m, w, startDayOfWeek, v2, v3, v4, startDayOfWeek];
            } else {
                const {y: y2, m: m2, w: w2, startDayOfWeek: startDayOfWeek2} = v2 as WeekValue;
                return [y, m, w, startDayOfWeek, y2, m2, w2, startDayOfWeek2];
            }
        }
    }

    protected static _weekArgs8(v1: WeekValue | number, v2: WeekValue | number, v3?: number, v4?: Day | number, v5?: WeekValue | Day | number, v6?: number, v7?: number, v8?: Day): [number, number, number, Day, number, number, number, Day] {
        if (typeof v1 === "number" && typeof v2 === "number" && typeof v3 === "number") {
            if (typeof v5 === "number" && typeof v6 === "number" && typeof v7 === "number") {
                return [v1, v2, v3, v4 as Day, v5, v6, v7, v8 as Day];
            } else {
                const {y, m, w, startDayOfWeek} = v5 as WeekValue;
                return [v1, v2, v3, v4 as Day, y, m, w, startDayOfWeek];
            }
        } else {
            const {y, m, w, startDayOfWeek} = v1 as WeekValue;

            if (typeof v2 === "number" && typeof v3 === "number" && typeof v4 === "number") {
                return [y, m, w, startDayOfWeek, v2, v3, v4, v5 as Day];
            } else {
                const {y: y2, m: m2, w: w2, startDayOfWeek: startDayOfWeek2} = v2 as WeekValue;
                return [y, m, w, startDayOfWeek, y2, m2, w2, startDayOfWeek2];
            }
        }
    }

    protected static _dateArgs4W(v1: DateValue | number, v2?: number, v3?: number, v4?: Day): [number, number, number, Day] {
        if (typeof v1 === "number" && typeof v2 === "number" && typeof v3 === "number") {
            return [v1, v2, v3, (v4 as Day) ?? Day.SUN];
        } else {
            const {year, month, date, startDayOfWeek} = (v1 as DateValue);
            return [year, month, date, startDayOfWeek];
        }
    }

    protected static _monthArgs3W(v1: MonthValue | number, v2?: number, v3?: Day): [number, number, Day] {
        if (typeof v1 === "number" && typeof v2 === "number") {
            return [v1, v2, (v3 as Day) ?? Day.SUN];
        } else {
            const {year, month, startDayOfWeek} = (v1 as MonthValue);
            return [year, month, startDayOfWeek];
        }
    }

    static fromDate(value: DateValue): WeekValue
    static fromDate(year: number, month: number, date: number, startDayOfWeek?: Day): WeekValue
    static fromDate(v1: DateValue | number, v2?: number, v3?: number, v4?: Day): WeekValue {
        const [year, month, date, startDayOfWeek] = WeekValue._dateArgs4W(v1, v2, v3, v4);
        const startDate = WeekValue.startDateOfDateWeek(year, month, date, startDayOfWeek);
        const firstDate = WeekValue.startDateOfDateWeek(startDate.year, startDate.month, 1, startDayOfWeek);

        const week = Math.floor((startDate.dateDiff(firstDate) + 7) / 7);

        return new WeekValue(startDate.year, startDate.month, week, startDayOfWeek);
    }

    static weekDiff(value1: WeekValue, value2: WeekValue): number
    static weekDiff(year1: number, month1: number, date1: number, value2: WeekValue): number
    static weekDiff(value1: WeekValue, year2: number, month2: number, date2: number): number
    static weekDiff(year1: number, month1: number, date1: number, year2: number, month2: number, date2: number): number
    static weekDiff(v1: WeekValue | number, v2: WeekValue | number, v3?: number, v4?: WeekValue | number, v5?: number, v6?: number): number {
        const [y1, m1, d1, sdow1, y2, m2, d2, sdow2] = WeekValue._weekArgs6(v1, v2, v3, v4, v5, v6);
        const start = WeekValue.startDateOfDateWeek(y1, m1, d1, sdow1);
        const end = WeekValue.endDateOfDateWeek(y2, m2, d2, sdow2);

        const dateDiff = DateValue.dateDiff(start, end);

        return Math.ceil((dateDiff + 7) / 7) - 1;
    }

    static startDateOfWeek(value: WeekValue): DateValue
    static startDateOfWeek(year: number, month: number, week: number, startDayOfWeek?: Day): DateValue
    static startDateOfWeek(v1: WeekValue | number, v2?: number, v3?: number, v4?: Day): DateValue {
        const [year, month, week, sdow] = WeekValue._weekArgs4(v1, v2, v3, v4);
        const firstDate = new DateValue(year, month, 1);

        firstDate.setDate(firstDate.date - firstDate.day + sdow + (week - 1) * 7);

        return firstDate;
    }

    static endDateOfWeek(value: WeekValue): DateValue
    static endDateOfWeek(year: number, month: number, week: number, startDayOfWeek?: Day): DateValue
    static endDateOfWeek(v1: WeekValue | number, v2?: number, v3?: number, v4?: Day): DateValue {
        const [year, month, week, sdow] = WeekValue._weekArgs4(v1, v2, v3, v4);
        const res = WeekValue.startDateOfWeek(year, month, week, sdow);

        res.date += 6;

        return res;
    }

    static startDateOfDateWeek(value: DateValue): DateValue
    static startDateOfDateWeek(year: number, month: number, date: number, startDayOfWeek?: Day): DateValue
    static startDateOfDateWeek(v1: DateValue | number, v2?: number | Day, v3?: number, v4?: Day): DateValue {
        const [y, m, d, sdow] = WeekValue._dateArgs4W(v1, v2, v3, v4);
        const date = new DateValue(y, m, d);

        date.setDate(date.d - date.day + sdow);

        return date;
    }

    static endDateOfDateWeek(value: DateValue): DateValue
    static endDateOfDateWeek(year: number, month: number, date: number, startDayOfWeek?: Day): DateValue
    static endDateOfDateWeek(v1: DateValue | number, v2?: number, v3?: number, v4?: Day): DateValue {
        const [y, m, d, sdow] = WeekValue._dateArgs4W(v1, v2, v3, v4);
        const date = WeekValue.startDateOfDateWeek(y, m, d, sdow);

        date.date += 6;

        return date;
    }

    static firstWeekOfMonth(value: MonthValue): WeekValue
    static firstWeekOfMonth(year: number, month: number, startDayOfWeek?: Day): WeekValue
    static firstWeekOfMonth(v1: MonthValue | number, v2?: number, v3?: Day): WeekValue {
        const [year, month, startDayOfWeek] = WeekValue._monthArgs3W(v1, v2, v3);
        return new WeekValue(year, month, 1, startDayOfWeek);
    }

    static lastWeekOfMonth(value: MonthValue): WeekValue
    static lastWeekOfMonth(year: number, month: number, startDayOfWeek?: Day): WeekValue
    static lastWeekOfMonth(v1: MonthValue | number, v2?: number, v3?: Day): WeekValue {
        const [year, month, startDayOfWeek] = WeekValue._monthArgs3W(v1, v2, v3);

        return WeekValue.fromDate(year, month + 1, 0, startDayOfWeek);
    }

    static weekCountOfMonth(value: MonthValue): number
    static weekCountOfMonth(year: number, month: number, startDayOfWeek?: Day): number
    static weekCountOfMonth(v1: MonthValue | number, v2?: number, v3?: Day): number {
        const [y, m, sdow] = WeekValue._monthArgs3W(v1, v2, v3);
        const first = WeekValue.startDateOfDateWeek(y, m, 1, sdow);
        const dayCount = DateValue.dateDiff(first, y, m + 1, 0) + 1;

        return Math.ceil(dayCount / 7);
    }

    static weekListOfMonth(value: MonthValue): WeekValue[]
    static weekListOfMonth(year: number, month: number, startDayOfWeek?: Day): WeekValue[]
    static weekListOfMonth(v1: MonthValue | number, v2?: number, v3?: Day): WeekValue[] {
        const [year, month, startDayOfWeek] = WeekValue._monthArgs3W(v1, v2, v3);
        const last = WeekValue.lastWeekOfMonth(year, month, startDayOfWeek);
        const weeks: WeekValue[] = [];

        for (let w = 1; w <= last.week; w++) {
            weeks.push(new WeekValue(year, month, w));
        }
        return weeks;
    }

    static dateListOfWeek(value: WeekValue): DateValue[]
    static dateListOfWeek(year: number, month: number, week: number, startDayOfWeek?: Day): DateValue[]
    static dateListOfWeek(v1: WeekValue | number, v2?: number, v3?: number, v4?: Day): DateValue[] {
        const [y, m, w, sdow] = WeekValue._weekArgs4(v1, v2, v3, v4);
        const start = WeekValue.startDateOfWeek(y, m, w, sdow);

        const dates: DateValue[] = [start];

        for (let i = 1; i < 7; i++) {
            dates.push(new DateValue(start.y, start.m, start.d + i));
        }
        return dates;
    }
}
