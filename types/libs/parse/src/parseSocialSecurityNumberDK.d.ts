/**
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
 * @param ssn - Danish social security number
 */
export declare function parseSocialSecurityNumberDK(ssn: string): {
    year: number;
    month: number;
    day: number;
    id: number;
    sex: string;
};
/**
 * Determine whether a string is a valid Danish social security number.
 * @param s - String to test
 */
export declare function isSocialSecurityNumberDK(s: string): boolean;
//# sourceMappingURL=parseSocialSecurityNumberDK.d.ts.map