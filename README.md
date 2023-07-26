# date-craft.js

[![npm version](https://badge.fury.io/js/date-craft.svg)](https://badge.fury.io/js/date-craft)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`date-craft` is a Node.js module which can act as an subsitute for moment.js that provides various utility functions to work with dates and times. It offers a range of functionalities to manipulate, format, and compare dates and times.

## Installation

To use `date-craft`, you need to have Node.js and npm installed on your machine. If you don't have them, you can download and install them from the official Node.js website (https://nodejs.org).

To install the package, run the following command in your project directory:

```
npm install date-craft
```

## Usage

Here are the utility functions provided by `date-craft` along with examples:

```javascript
const dateCraft = require('date-craft');
```

### `dateCraft.getCurrentDate()`

Returns the current date as a `Date` object.

**Example:**

```javascript
const currentDate = dateCraft.getCurrentDate();
console.log(currentDate); // Output: 2023-07-25T07:30:00.000Z (Sample output; may vary based on the current date and time)
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

Calculates the current age based on the provided date of birth, considering the birth `month` and `date` for accurate results

**Example:**

```javascript
const dateOfBirth = '1990-05-15';
const age = dateCraft.calculateAge(dateOfBirth);
console.log(age); // Output: Current age based on the date of birth (e.g., 32)

```

### `dateCraft.parseDate(dateStr)`

Parses a date string in the format "YYYY-MM-DD" and returns a `Date` object.

**Example:**

```javascript
const dateString = '2023-07-25';
const parsedDate = dateCraft.parseDate(dateString);

console.log(parsedDate); // Output: 2023-07-25T00:00:00.000Z
```

### `dateCraft.formatDate(date)`

The `formatDate` function takes a `Date` object and a format string as arguments and returns a formatted date string based on the provided format.

Formats a given date according to the specified format.

- `date` (Date): The date to be formatted.
- `format` (string): The format string specifying how to format the date.

Supported format tokens:

- `MMMM`: Full month name (e.g., "July")
- `MMM`: Abbreviated month name (e.g., "Jul")
- `MM`: Two-digit month (e.g., "07")
- `M`: Single-digit month (e.g., "7")
- `DDDD`: Full day of the week (e.g., "Monday")
- `DD`: Two-digit day (e.g., "25")
- `D`: Single-digit day (e.g., "5")
- `YYYY`: Full year (e.g., "2023")
- `YY`: Two-digit year (e.g., "23")
- `hh`: Two-digit hour (e.g., "07")
- `h`: Single-digit hour (e.g., "7")
- `mm`: Two-digit minute (e.g., "30")
- `m`: Single-digit minute (e.g., "30")
- `ss`: Two-digit second (e.g., "00")
- `s`: Single-digit second (e.g., "0")
- `a`: AM/PM representation (e.g., "AM")
**Example:**

```javascript
const dateCraft = require('date-craft');

const currentDate = new Date();

console.log(dateCraft.formatDate(currentDate, 'YYYY-MM-DD')); // Output: "2023-07-25"
console.log(dateCraft.formatDate(currentDate, 'DD/MM/YYYY')); // Output: "25/07/2023"
console.log(dateCraft.formatDate(currentDate, 'MMM DD, YYYY')); // Output: "Jul 25, 2023"
console.log(dateCraft.formatDate(currentDate, 'MMMM D, YYYY')); // Output: "July 25, 2023"
console.log(dateCraft.formatDate(currentDate, 'D MMMM YYYY')); // Output: "25 July 2023"
console.log(dateCraft.formatDate(currentDate, 'DDDD, MMMM D, YYYY')); // Output: "Monday, July 25, 2023"
console.log(dateCraft.formatDate(currentDate, 'h:mm:ss a')); // Output: "7:30:00 AM"
console.log(dateCraft.formatDate(currentDate, 'HH:mm:ss')); // Output: "07:30:00"
console.log(dateCraft.formatDate(currentDate, 'hh:mm:ss a')); // Output: "07:30:00 AM"
console.log(dateCraft.formatDate(currentDate, 'HH:mm')); // Output: "07:30"
console.log(dateCraft.formatDate(currentDate, 'YYYY-MM-DD HH:mm:ss')); // Output: "2023-07-25 07:30:00"
console.log(dateCraft.formatDate(currentDate, 'MMMM D, YYYY h:mm:ss a')); // Output: "July 25, 2023 7:30:00 AM"
console.log(dateCraft.formatDate(currentDate, 'MM/DD/YY h:mm a')); // Output: "07/25/23 7:30 AM"
console.log(dateCraft.formatDate(currentDate, 'YYYY/MM/DD HH:mm:ss')); // Output: "2023/07/25 07:30:00"
console.log(dateCraft.formatDate(currentDate, 'D MMMM, YYYY [at] h:mm:ss a')); // Output: "25 July, 2023 at 7:30:00 AM"

```

Please note that the formatting tokens are case-sensitive, and you can modify the format string to suit your desired output. Ensure that the `date` argument passed to the `formatDate` function is a valid JavaScript `Date` object.

Feel free to use different format strings to experiment with various date formats in your projects.

### `dateCraft.addDays(date, daysToAdd)`

Adds a specified number of days to a `Date` object and returns the new date.

**Example:**

```javascript
const startDate = new Date('2023-07-25');
const daysToAdd = 5;
const newDate = dateCraft.addDays(startDate, daysToAdd);

console.log(newDate); // Output: 2023-07-30T00:00:00.000Z
```

### `dateCraft.subtractDays(date, daysToSubtract)`

Subtracts a specified number of days from a `Date` object and returns the new date.

**Example:**

```javascript
const startDate = new Date('2023-07-25');
const daysToSubtract = 3;
const newDate = dateCraft.subtractDays(startDate, daysToSubtract);

console.log(newDate); // Output: 2023-07-22T00:00:00.000Z
```

### `dateCraft.getEndOfDay(date)`

Returns a new `Date` object with the time set to the end of the day (23:59:59.999).

**Example:**

```javascript
const currentDate = new Date();
const endOfDay = dateCraft.getEndOfDay(currentDate);

console.log(endOfDay); // Output: 2023-07-25T23:59:59.999Z
```

### `dateCraft.diffInDays(start, end)`

Calculates the difference in days between two `Date` objects.

**Example:**

```javascript
const startDate = new Date('2023-07-20');
const endDate = new Date('2023-07-25');

const difference = dateCraft.diffInDays(startDate, endDate);
console.log(difference); // Output: 5
```

### `dateCraft.isBeforeDate(date1, date2)`

Checks if `date1` is before `date2`.

**Example:**

```javascript
const date1 = new Date('2023-07-20');
const date2 = new Date('2023-07-25');

console.log(dateCraft.isBeforeDate(date1, date2)); // Output: true
```

### `dateCraft.isAfterDate(date1, date2)`

Checks if `date1` is after `date2`.

**Example:**

```javascript
const date1 = new Date('2023-07-20');
const date2 = new Date('2023-07-25');

console.log(dateCraft.isAfterDate(date1, date2)); // Output: false
```

### `dateCraft.isSameDate(date1, date2)`

Checks if `date1` is the same as `date2`.

**Example:**

```javascript
const date1 = new Date('2023-07-25');
const date2 = new Date('2023-07-25');

console.log(dateCraft.isSameDate(date1, date2)); // Output: true
```

### `dateCraft.isSameOrBeforeDate(date1, date2)`

Checks if `date1` is the same as or before `date2`.

**Example:**

```javascript
const date1 = new Date('2023-07-20');
const date2 = new Date('2023-07-25');

console.log(dateCraft.isSameOrBeforeDate(date1, date2)); // Output: true
```

### `dateCraft.isSameOrAfterDate(date1, date2)`

Checks if `date1` is the same as or after `date2`.

**Example:**

```javascript
const date1 = new Date('2023-07-20');
const date2 = new Date('2023-07-25');

console.log(dateCraft.isSameOrAfterDate(date1, date2)); // Output: false
```

### `dateCraft.cloneDate(date)`

Creates a new `Date` object with the same value as the input date.

**Example:**

```javascript
const currentDate = new Date();
const clonedDate = dateCraft.cloneDate(currentDate);

console.log(clonedDate); // Output: 2023-07-25T07:30:00.000Z (Same as currentDate)
```

### `dateCraft.getUnixTimestamp(date)`

Gets the Unix timestamp (seconds since epoch) from a `Date` object.

**Example:**

```javascript
const currentDate = new Date();
const timestamp = dateCraft.getUnixTimestamp(currentDate);

console.log(timestamp); // Output: 1674595800 (Sample output; actual value may vary)
```

### `dateCraft.isLeapYear(year)`

Checks if a given year is a leap year.

**Example:**

```javascript
const year = 2024;
console.log(dateCraft.isLeapYear(year)); // Output: true
```

### `dateCraft.getDaysInMonth(year, month)`

Gets the number of days in a specific month of a given year.

**Example:**

```javascript
const year = 2023;
const month = 1; // January is 0-based (0-11)
console.log(dateCraft.getDaysInMonth(year, month)); // Output: 31
```

### `dateCraft.formatHumanReadable(date)`

Formats a `Date` object in a human-readable format with date and time.

**Example:**

```javascript
const currentDate = new Date();
const formattedDate = dateCraft.formatHumanReadable(currentDate);

console.log(formattedDate); // Output: July 25, 2023, 07:30:00 AM
```

### `dateCraft.getStartOfWeek(date)`

Gets the start of the week (Sunday) for a given `Date` object.

**Example:**

```javascript
const currentDate = new Date();
const startOfWeek = dateCraft.getStartOfWeek(currentDate);

console.log(startOfWeek); // Output: 2023-07-23T00:00:00.000Z
```

### `dateCraft.getEndOfWeek(date)`

Gets the end of the week (Saturday) for a given `Date` object.

**Example:**

```javascript
const currentDate = new Date();
const endOfWeek = dateCraft.getEndOfWeek(currentDate);

console.log(endOfWeek); // Output: 2023-07-29T23:59:59.999Z
```

### `dateCraft.toDateObject(dateStr)`

Converts a date string to a `Date` object.

**Example:**

```javascript
const dateString = '2023-07-25';
const dateObject = dateCraft.toDateObject(dateString);

console.log(dateObject); // Output: 2023-07-25T00:00:00.000Z
```

### `dateCraft.convertLocalToUTC(date)`

Converts a local `Date` object to a UTC `Date` object.

**Example:**

```javascript
const localDate = new Date('2023-07-25T12:00:00');
const utcDate = dateCraft.convertLocalToUTC(localDate);

console.log(utcDate); // Output: 2023-07-25T12:00:00.000Z (UTC equivalent of localDate)
```

### `dateCraft.convertUTCToLocal(utcDate)`

Converts a UTC `Date` object to a local `Date` object.

**Example:**

```javascript
const utcDate = new Date('2023-07-25T12:00:00Z');
const localDate = dateCraft.convertUTCToLocal(utcDate);

console.log(localDate); // Output: 2023-07-25T08:00:00.000Z (Local equivalent of utcDate in UTC+4 timezone)
```

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
  milliseconds:
  milliseconds: 0
}
*/

