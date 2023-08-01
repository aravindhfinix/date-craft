
function getCurrentDate() {
    return new Date();
}

function isValidDate(date: Date): boolean {
    return !isNaN(date.getTime());
}

function parseDate(dateStr: string): Date {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // Note: months are 0-based in Date objects
}

class DateFormatter {
    private date: Date;
    public formatTokens: { [key: string]: string | number }; // Declare formatTokens as a public property

    constructor(date?: Date | string) {
        if (date instanceof Date) {
            this.date = date;
        } else if (typeof date === "string") {
            this.date = new Date(date);
        } else {
            this.date = new Date();
        }

        this.initializeFormatTokens(); // Initialize formatTokens after date has been set
    }

    private initializeFormatTokens(): void {
        this.formatTokens = {
            'MMMM': this.date.toLocaleString(undefined, { month: 'long' }),
            'MMM': this.monthNames[this.date.getMonth()],
            'MM': String(this.date.getMonth() + 1).padStart(2, '0'),
            'M': String(this.date.getMonth() + 1),
            'DDDD': this.date.toLocaleString(undefined, { weekday: 'long' }),
            'DD': String(this.date.getDate()).padStart(2, '0'),
            'Do': String(this.date.getDate()) + this.getOrdinalSuffix(this.date.getDate()),
            'D': String(this.date.getDate()),
            'YYYY': this.date.getFullYear(),
            'YY': this.date.getFullYear().toString().slice(-2),
            'hh': String(this.date.getHours()).padStart(2, '0'),
            'h': String(this.date.getHours()),
            'mm': String(this.date.getMinutes()).padStart(2, '0'),
            'm': String(this.date.getMinutes()),
            'ss': String(this.date.getSeconds()).padStart(2, '0'),
            's': String(this.date.getSeconds()),
            'a': (this.date.toLocaleString(undefined, { hour12: true, hour: 'numeric' }).match(/\s(.*)$/) || [])[1] || '',
        };
    }

    private monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    private getOrdinalSuffix(day: number): string {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    public format(format: string): string {
        const regex = new RegExp(Object.keys(this.formatTokens).join('|'), 'g');
        const formattedString = format.replace(regex, (match: string) => this.formatTokens[match] as string);
        return formattedString;
    }
}

function formatDate(date?: Date | string): DateFormatter {
    return new DateFormatter(date);
}

function addDays(date: Date, daysToAdd: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
}

function subtractDays(date: Date, daysToSubtract: number): Date {
    return addDays(date, -daysToSubtract);
}

function getStartOfDay(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

function getEndOfDay(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}

function diffInDays(start: Date, end: Date): number {
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const startTimestamp = start.getTime();
    const endTimestamp = end.getTime();
    return Math.round((endTimestamp - startTimestamp) / oneDayInMillis);
}

function isBeforeDate(date1: Date, date2: Date): boolean {
    return date1.getTime() < date2.getTime();
}

function isAfterDate(date1: Date, date2: Date): boolean {
    return date1.getTime() > date2.getTime();
}

function isSameDate(date1: Date, date2: Date): boolean {
    return date1.toISOString() === date2.toISOString();
}

function isSameOrBeforeDate(date1: Date, date2: Date): boolean {
    return date1.toISOString() <= date2.toISOString();
}

function isSameOrAfterDate(date1: Date, date2: Date): boolean {
    return date1.toISOString() >= date2.toISOString();
}

function cloneDate(date: Date): Date {
    return new Date(date);
}

function getUnixTimestamp(date: Date): number {
    return Math.floor(date.getTime() / 1000);
}

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}

function humanReadableFormat(date: Date): string {
    const year = date.getFullYear();
    const month = date.toLocaleString(undefined, { month: 'long' });
    const day = date.getDate();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    return `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
}


function getStartOfWeek(date: Date): Date {
    const newDate = new Date(date);
    const dayOfWeek = newDate.getDay();
    const diff = newDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    newDate.setDate(diff);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

function getEndOfWeek(date: Date): Date {
    const newDate = getStartOfWeek(date);
    newDate.setDate(newDate.getDate() + 6);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}
function toDateObject(dateStr: string): Date {
    return new Date(dateStr);
}

// Function to convert a local date to UTC date
function convertLocalToUTC(date: Date): Date {
    const timezoneOffsetInMinutes = date.getTimezoneOffset();
    return new Date(date.getTime() + timezoneOffsetInMinutes * 60 * 1000);
}

// Function to convert a UTC date to local date
function convertUTCToLocal(utcDate: Date): Date {
    const timezoneOffsetInMinutes = utcDate.getTimezoneOffset();
    return new Date(utcDate.getTime() - timezoneOffsetInMinutes * 60 * 1000);
}

function getCurrentDayTimeYear(): {
    day: number;
    month: number;
    year: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
} {
    const currentDate = new Date();

    const currentDay = currentDate.getDate(); // Get the current day of the month (1-31)
    const currentMonth = currentDate.getMonth() + 1; // Get the current month (0-based, so we add 1 to get the real month value)
    const currentYear = currentDate.getFullYear(); // Get the current year (e.g., 2023)

    const currentHours = currentDate.getHours(); // Get the current hour (0-23)
    const currentMinutes = currentDate.getMinutes(); // Get the current minute (0-59)
    const currentSeconds = currentDate.getSeconds(); // Get the current second (0-59)
    const currentMilliseconds = currentDate.getMilliseconds(); // Get the current millisecond (0-999)

    return {
        day: currentDay,
        month: currentMonth,
        year: currentYear,
        hours: currentHours,
        minutes: currentMinutes,
        seconds: currentSeconds,
        milliseconds: currentMilliseconds,
    };
}

function calculateAge(dateOfBirth: string): number {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--; // If the birth month has not occurred yet this year, reduce the age by 1
    }

    return age;
}

// Export all the utility functions as a module
module.exports = {
    getCurrentDate,
    isValidDate,
    parseDate,
    formatDate,
    addDays,
    subtractDays,
    getStartOfDay,
    getEndOfDay,
    diffInDays,
    isBeforeDate,
    isAfterDate,
    isSameDate,
    isSameOrBeforeDate,
    isSameOrAfterDate,
    cloneDate,
    getUnixTimestamp,
    isLeapYear,
    getDaysInMonth,
    humanReadableFormat,
    getStartOfWeek,
    getEndOfWeek,
    toDateObject,
    convertLocalToUTC,
    convertUTCToLocal,
    getCurrentDayTimeYear,
    calculateAge
};