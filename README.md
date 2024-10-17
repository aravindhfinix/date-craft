# date-craft.js

[![npm version](https://img.shields.io/npm/v/date-craft.svg)](https://www.npmjs.com/package/date-craft) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`date-craft` is a Node.js module that serves as a lightweight substitute for Moment.js, providing a suite of utility functions to manipulate, format, and compare dates and times efficiently.

## Installation

To use `date-craft`, ensure you have Node.js and npm installed on your machine. If you haven't installed them yet, you can download them from the [official Node.js website](https://nodejs.org).

To install the package, run the following command in your project directory:

```bash
npm install date-craft
```

## Usage

You can import the module and access its utility functions as shown below:

```javascript
const dateCraft = require('date-craft');
```

### Utility Functions

Here are some of the key functions provided by `date-craft`:

### `dateCraft.getCurrentDate()`
Returns the current date as a `Date` object.

**Example:**

```javascript
const currentDate = dateCraft.getCurrentDate();
console.log(currentDate); // Output: Current date in ISO format
```

### `dateCraft.isValidDate(date)`
Checks if a given date is valid (not `NaN`).

**Example:**

```javascript
const validDate = new Date('2023-07-25');
const invalidDate = new Date('Invalid date');

console.log(dateCraft.isValidDate(validDate)); // Output: true
console.log(dateCraft.isValidDate(invalidDate)); // Output: false
```

### `dateCraft.calculateAge(utcDate)`
Calculates the current age based on the provided date of birth.

**Example:**

```javascript
const age = dateCraft.calculateAge('1990-05-15');
console.log(age); // Output: Current age based on the date of birth
```

### `dateCraft.parseDate(dateStr)`
Parses a date string in the format "YYYY-MM-DD" and returns a `Date` object.

**Example:**

```javascript
const parsedDate = dateCraft.parseDate('2023-07-25');
console.log(parsedDate); // Output: Parsed Date object
```

### `dateCraft.formatDate(date, format)`
Formats a given date according to the specified format string.

**Example:**

```javascript
const formattedDate = dateCraft.formatDate(new Date(), 'MMMM D, YYYY');
console.log(formattedDate); // Output: E.g., "July 25, 2023"
```

### `dateCraft.addDays(date, daysToAdd)`
Adds a specified number of days to a `Date` object and returns the new date.

**Example:**

```javascript
const newDate = dateCraft.addDays(new Date('2023-07-25'), 5);
console.log(newDate); // Output: New date after adding days
```

### `dateCraft.subtractDays(date, daysToSubtract)`
Subtracts a specified number of days from a `Date` object and returns the new date.

**Example:**

```javascript
const newDate = dateCraft.subtractDays(new Date('2023-07-25'), 3);
console.log(newDate); // Output: New date after subtracting days
```

### `dateCraft.diffInDays(start, end)`
Calculates the difference in days between two `Date` objects.

**Example:**

```javascript
const difference = dateCraft.diffInDays(new Date('2023-07-20'), new Date('2023-07-25'));
console.log(difference); // Output: 5
```

### `dateCraft.isBeforeDate(date1, date2)`
Checks if `date1` is before `date2`.

**Example:**

```javascript
console.log(dateCraft.isBeforeDate(new Date('2023-07-20'), new Date('2023-07-25'))); // Output: true
```

### `dateCraft.cloneDate(date)`
Creates a new `Date` object with the same value as the input date.

**Example:**

```javascript
const clonedDate = dateCraft.cloneDate(new Date());
console.log(clonedDate); // Output: Cloned Date object
```

### `dateCraft.getUnixTimestamp(date)`
Gets the Unix timestamp (seconds since epoch) from a `Date` object.

**Example:**

```javascript
const timestamp = dateCraft.getUnixTimestamp(new Date());
console.log(timestamp); // Output: Current Unix timestamp
```

### `dateCraft.isLeapYear(year)`
Checks if a given year is a leap year.

**Example:**

```javascript
console.log(dateCraft.isLeapYear(2024)); // Output: true
```

### `dateCraft.getDaysInMonth(year, month)`
Gets the number of days in a specific month of a given year.

**Example:**

```javascript
console.log(dateCraft.getDaysInMonth(2023, 1)); // Output: 31 (January)
```

### `dateCraft.humanReadableFormat(date)`
Formats a `Date` object in a human-readable format with date and time.

**Example:**

```javascript
const formattedDate = dateCraft.humanReadableFormat(new Date());
console.log(formattedDate); // Output: E.g., "July 25, 2023, 07:30:00 AM"
```

### `dateCraft.getStartOfWeek(date)`
Gets the start of the week (Sunday) for a given `Date` object.

**Example:**

```javascript
const startOfWeek = dateCraft.getStartOfWeek(new Date());
console.log(startOfWeek); // Output: Start of the week
```

### `dateCraft.convertLocalToUTC(date)`
Converts a local `Date` object to a UTC `Date` object.

**Example:**

```javascript
const utcDate = dateCraft.convertLocalToUTC(new Date('2023-07-25T12:00:00'));
console.log(utcDate); // Output: UTC equivalent
```

### `dateCraft.convertUTCToLocal(utcDate)`
Converts a UTC `Date` object to a local `Date` object.

**Example:**

```javascript
const localDate = dateCraft.convertUTCToLocal(new Date('2023-07-25T12:00:00Z'));
console.log(localDate); // Output: Local equivalent
```

It looks like the documentation for `date-craft` is quite comprehensive, but if some functions are missing, here are a few suggestions you might consider adding:

### `dateCraft.getCurrentDayTimeYear()`

Returns an object containing the current day, month, year, hours, minutes, seconds, and milliseconds.

**Example:**

```javascript
const currentDayTimeYear = dateCraft.getCurrentDayTimeYear();

console.log(currentDayTimeYear);
/* Output:
{
  day: 25,
  month: 7,
  year: 2023,
  hours: 7,
  minutes: 30,
  seconds: 0,
  milliseconds: 0
}
*/
```

### `dateCraft.getTimeDifference(start, end)`

Calculates the difference between two dates in milliseconds and returns an object with the difference in days, hours, minutes, and seconds.

**Example:**

```javascript
const startDate = new Date('2023-07-20T10:00:00');
const endDate = new Date('2023-07-25T12:30:00');

const timeDifference = dateCraft.getTimeDifference(startDate, endDate);
console.log(timeDifference); // Output: { days: 5, hours: 2, minutes: 30, seconds: 0 }
```

### `dateCraft.formatToISO(date)`

Formats a given `Date` object to an ISO 8601 string.

**Example:**

```javascript
const currentDate = new Date();
const isoString = dateCraft.formatToISO(currentDate);
console.log(isoString); // Output: "2023-07-25T07:30:00.000Z"
```

### `dateCraft.getWeekNumber(date)`

Gets the ISO week number for a given date.

**Example:**

```javascript
const currentDate = new Date('2023-07-25');
const weekNumber = dateCraft.getWeekNumber(currentDate);
console.log(weekNumber); // Output: 30 (depends on the year)
```

### `dateCraft.getDaysBetween(start, end)`

Returns the number of days between two `Date` objects.

**Example:**

```javascript
const startDate = new Date('2023-07-20');
const endDate = new Date('2023-07-25');

const daysBetween = dateCraft.getDaysBetween(startDate, endDate);
console.log(daysBetween); // Output: 5
```

### `dateCraft.isSameMonth(date1, date2)`

Checks if two dates are in the same month and year.

**Example:**

```javascript
const date1 = new Date('2023-07-20');
const date2 = new Date('2023-07-25');

console.log(dateCraft.isSameMonth(date1, date2)); // Output: true
```

### `dateCraft.isSameYear(date1, date2)`

Checks if two dates are in the same year.

**Example:**

```javascript
const date1 = new Date('2023-07-20');
const date2 = new Date('2024-07-25');

console.log(dateCraft.isSameYear(date1, date2)); // Output: false
```

### `dateCraft.getQuarter(date)`

Returns the quarter of the year for the provided date.

**Example:**

```javascript
const currentDate = new Date('2023-07-25');
const quarter = dateCraft.getQuarter(currentDate);
console.log(quarter); // Output: 3 (July is in the third quarter)
```

### `dateCraft.isWeekend(date)`

Checks if a given date falls on a weekend (Saturday or Sunday).

**Example:**

```javascript
const date = new Date('2023-07-22'); // Saturday
console.log(dateCraft.isWeekend(date)); // Output: true
```

### `dateCraft.addMonths(date, monthsToAdd)`

Adds a specified number of months to a `Date` object and returns the new date.

**Example:**

```javascript
const startDate = new Date('2023-07-25');
const monthsToAdd = 2;
const newDate = dateCraft.addMonths(startDate, monthsToAdd);

console.log(newDate); // Output: 2023-09-25T00:00:00.000Z
```

### `getStartOfDay`
This function returns the start of the day for a given date, which is at midnight.

```javascript
function getStartOfDay(date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  return start;
}
```

### `getEndOfDay`
This function returns the end of the day for a given date, which is just before midnight.

```javascript
function getEndOfDay(date) {
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);
  return end;
}
```

### `isAfterDate`
This function checks if the first date is after the second date.

```javascript
function isAfterDate(date1, date2) {
  return date1 > date2;
}
```

### `isSameDate`
This function checks if two dates are the same.

```javascript
function isSameDate(date1, date2) {
  return date1.toDateString() === date2.toDateString();
}
```

### `getTimeInTimeZone`
This function returns the current time in the specified timezone as a string.

```javascript
function getTimeInTimeZone(timeZone) {
  return new Date().toLocaleString('en-US', { timeZone });
}
```

### `getTimeInTimeZoneAsDateObject`
This function returns the current time as a Date object in the specified timezone.

```javascript
function getTimeInTimeZoneAsDateObject(timeZone) {
  const localDate = new Date();
  const utcDate = localDate.toISOString();
  const dateInTimeZone = new Date(utcDate);
  return new Date(dateInTimeZone.toLocaleString('en-US', { timeZone }));
}
```

### `isSameOrBeforeDate`
This function checks if the first date is the same as or before the second date.

```javascript
function isSameOrBeforeDate(date1, date2) {
  return date1 <= date2;
}
```

### `isSameOrAfterDate`
This function checks if the first date is the same as or after the second date.

```javascript
function isSameOrAfterDate(date1, date2) {
  return date1 >= date2;
}
```

### `calculateAge`
This function calculates the age based on the date of birth.

```javascript
function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();

  // Adjust age if the birthday has not occurred this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
}
```


### Explanation of Functions:

1. **getCurrentDate**: Returns the current date.
2. **isValidDate**: Checks if the provided date is a valid Date object.
3. **parseDate**: Parses a date string into a Date object.
4. **formatDate**: Formats a Date object using Moment.js.
5. **addDays**: Adds a specified number of days to a date.
6. **subtractDays**: Subtracts a specified number of days from a date.
7. **getStartOfDay**: Returns the start of the day (00:00:00) for a given date.
8. **getEndOfDay**: Returns the end of the day (23:59:59.999) for a given date.
9. **diffInDays**: Calculates the difference in days between two dates.
10. **isBeforeDate**: Checks if the first date is before the second date.
11. **isAfterDate**: Checks if the first date is after the second date.
12. **isSameDate**: Checks if two dates are the same.
13. **getTimeInTimeZone**: Returns the current time in the specified timezone as a formatted string.
14. **getTimeInTimeZoneAsDateObject**: Returns the current time in the specified timezone as a Date object.
15. **isSameOrBeforeDate**: Checks if the first date is the same or before the second date.
16. **isSameOrAfterDate**: Checks if the first date is the same or after the second date.
17. **cloneDate**: Creates a clone of the given date.
18. **convertLocalToUTC**: Converts a local date to UTC.
19. **convertUTCToLocal**: Converts a UTC date to local time.
20. **humanReadableFormat**: Returns a human-readable format of the date.
21. **getUnixTimestamp**: Returns the Unix timestamp for a given date.
22. **calculateAge**: Calculates the age based on a given date of birth.

With this implementation, your tests should pass successfully! If you have any further modifications or additional functions to include, feel free to ask.

### Additional Functions
Explore more functions in the `date-craft` library to enhance your date manipulation capabilities in your Node.js applications.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.