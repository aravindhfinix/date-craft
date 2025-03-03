function getCurrentDate() {
    return new Date();
}
function isValidDate(date) {
    return !isNaN(date.getTime());
}
function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // Note: months are 0-based in Date objects
}
class DateFormatter {
    constructor(date) {
        this.monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        if (date instanceof Date) {
            this.date = date;
        }
        else if (typeof date === "string") {
            this.date = new Date(date);
        }
        else {
            this.date = new Date();
        }
        this.initializeFormatTokens(); // Initialize formatTokens after date has been set
    }
    initializeFormatTokens() {
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
    getOrdinalSuffix(day) {
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
    format(format) {
        const regex = new RegExp(Object.keys(this.formatTokens).join('|'), 'g');
        const formattedString = format.replace(regex, (match) => this.formatTokens[match]);
        return formattedString;
    }
}
function formatDate(date) {
    return new DateFormatter(date);
}
function addDays(date, daysToAdd) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
}
function subtractDays(date, daysToSubtract) {
    return addDays(date, -daysToSubtract);
}
function getStartOfDay(date) {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}
function getEndOfDay(date) {
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}
function diffInDays(start, end) {
    const oneDayInMilliSeconds = 24 * 60 * 60 * 1000;
    const startTimestamp = start.getTime();
    const endTimestamp = end.getTime();
    return Math.round((endTimestamp - startTimestamp) / oneDayInMilliSeconds);
}
function isBeforeDate(date1, date2) {
    return date1.getTime() < date2.getTime();
}
function isAfterDate(date1, date2) {
    return date1.getTime() > date2.getTime();
}
function isSameDate(date1, date2) {
    return date1.toISOString() === date2.toISOString();
}
function isSameOrBeforeDate(date1, date2) {
    return date1.toISOString() <= date2.toISOString();
}
function isSameOrAfterDate(date1, date2) {
    return date1.toISOString() >= date2.toISOString();
}
function cloneDate(date) {
    return new Date(date);
}
function getUnixTimestamp(date) {
    return Math.floor(date.getTime() / 1000);
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function humanReadableFormat(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function getStartOfWeek(date) {
    const newDate = new Date(date);
    const dayOfWeek = newDate.getDay();
    const diff = newDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    newDate.setDate(diff);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}
function getEndOfWeek(date) {
    const newDate = getStartOfWeek(date);
    newDate.setDate(newDate.getDate() + 6);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}
function toDateObject(dateStr) {
    return new Date(dateStr);
}

function convertLocalToUTC(localDate) {
    // Convert local date to UTC by subtracting the timezone offset
    return new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000);
}

function convertUTCToLocal(utcDate) {
    // Convert UTC date to local date by adding the timezone offset
    return new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
}

function getCurrentDayTimeYear() {
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
function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--; // If the birth month has not occurred yet this year, reduce the age by 1
    }
    return age;
}

function getTimeInTimeZoneAsDateObject(timeZone) {
    const currentDate = new Date();

    // Get the date and time in the specified time zone, including the offset
    const options = {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    const formattedDate = formatter.format(currentDate);

    // Reformat the date and time to ISO format
    const [datePart, timePart] = formattedDate.split(', ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute, second] = timePart.split(':');

    // Create a Date object based on the ISO 8601 string with local time and no timezone shift
    const isoDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);

    return isoDate;
}


function getTimeInTimeZone(timeZone) {
    const currentDate = new Date();
    const options = {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const formattedDate = formatter.format(currentDate);

    return formattedDate;
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
    calculateAge,
    getTimeInTimeZoneAsDateObject,
    getTimeInTimeZone
};
