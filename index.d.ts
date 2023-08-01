declare function getCurrentDate(): Date;
declare function isValidDate(date: Date): boolean;
declare function parseDate(dateStr: string): Date;
declare class DateFormatter {
    private date;
    formatTokens: {
        [key: string]: string | number;
    };
    constructor(date?: Date | string);
    private initializeFormatTokens;
    private monthNames;
    private getOrdinalSuffix;
    format(format: string): string;
}
declare function formatDate(date?: Date | string): DateFormatter;
declare function addDays(date: Date, daysToAdd: number): Date;
declare function subtractDays(date: Date, daysToSubtract: number): Date;
declare function getStartOfDay(date: Date): Date;
declare function getEndOfDay(date: Date): Date;
declare function diffInDays(start: Date, end: Date): number;
declare function isBeforeDate(date1: Date, date2: Date): boolean;
declare function isAfterDate(date1: Date, date2: Date): boolean;
declare function isSameDate(date1: Date, date2: Date): boolean;
declare function isSameOrBeforeDate(date1: Date, date2: Date): boolean;
declare function isSameOrAfterDate(date1: Date, date2: Date): boolean;
declare function cloneDate(date: Date): Date;
declare function getUnixTimestamp(date: Date): number;
declare function isLeapYear(year: number): boolean;
declare function getDaysInMonth(year: number, month: number): number;
declare function humanReadableFormat(date: Date): string;
declare function getStartOfWeek(date: Date): Date;
declare function getEndOfWeek(date: Date): Date;
declare function toDateObject(dateStr: string): Date;
declare function convertLocalToUTC(date: Date): Date;
declare function convertUTCToLocal(utcDate: Date): Date;
declare function getCurrentDayTimeYear(): {
    day: number;
    month: number;
    year: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
declare function calculateAge(dateOfBirth: string): number;
