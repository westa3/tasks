/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return numbers;
    } else if (numbers.length == 1) {
        return [...numbers, ...numbers];
    } else {
        const cpyNum = [...numbers];
        const numLen = numbers.length;
        cpyNum.splice(1, numLen - 2);
        numbers = cpyNum;
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const cpyNum = numbers.map((num: number): number => num * 3);
    numbers = cpyNum;
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const cpyStr = numbers.map((str: string): number => parseInt(str));
    const cpyNum = cpyStr.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return cpyNum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const cpyStr = amounts.map((str: string): string =>
        str.includes("$") ? str.replace("$", "") : str
    );
    const cpyStr2 = cpyStr.map((str: string): number => parseInt(str));
    const cpyNum = cpyStr2.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return cpyNum;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shouting = messages.map((str: string): string =>
        str.includes("!") ? str.toUpperCase() : str
    );
    const nonQuestions = shouting.filter(
        (str: string): boolean => !str.includes("?")
    );
    return nonQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const cpyFilt = words.filter((str: string): boolean => str.length < 4);
    return cpyFilt.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    } else {
        const checked = colors.map(
            (color: string): boolean =>
                color == "red" || color == "blue" || color == "green"
        );
        if (checked.includes(false)) {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const adding = addends.reduce((a, b) => a + b, 0);
    if (addends.length == 0) {
        return "0=0";
    } else {
        const len = addends.length;
        const add = addends.map((num: number): string =>
            addends.indexOf(num) != len - 1
                ? num.toString() + "+"
                : num.toString()
        );
        const result = "".concat(...add);
        const sum = adding.toString();
        return sum + "=" + result;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const hasNegative = values.some((num) => num < 0);
    if (hasNegative == false) {
        const sum = values.reduce((a, b) => a + b, 0);
        const cpyValues = [...values, sum];
        return cpyValues;
    } else {
        const cpyValues = [...values];
        const len = cpyValues.length;
        const negIdx = cpyValues.findIndex((num: number): boolean => num < 0);
        if (negIdx == 0) {
            cpyValues.splice(1, 0, 0);
            return cpyValues;
        } else {
            cpyValues.splice(negIdx, len - 1);
            const sum2 = cpyValues.reduce((a, b) => a + b);
            const cpyValues2 = [...values];
            const insertIdx = negIdx + 1;
            cpyValues2.splice(insertIdx, 0, sum2);
            return cpyValues2;
        }
    }
}
