export declare class NumberFormatter {
    precision: number;
    thousandSeparator: string;
    decimalSeparator: string;
    /**
     * Create a new number formatter.
     * @param precision The number of decimals to round to.
     */
    constructor(precision?: number);
    /**
     * Set separator strings for a given locale.
     */
    static defineLocale(locale: string, thousandSeparator: string, decimalSeparator: string): void;
    /**
     * Returns a copy of the locales map.
     */
    static getLocales(): Map<string, [string, string]>;
    /**
     * Set the locale for the number formatter.
     */
    locale(locale: string): this;
    /**
     * Format a number to a string.
     */
    format(number: number): string;
    /**
     * Parse a formatted string to a number.
     */
    parse(string: string): number;
}
//# sourceMappingURL=NumberFormatter.d.ts.map