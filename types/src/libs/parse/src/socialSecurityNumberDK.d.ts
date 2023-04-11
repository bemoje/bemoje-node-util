export declare const regexMatchSocialSecurityNumberDK: RegExp;
/**
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
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
 */
export declare function isSocialSecurityNumberDK(s: string): boolean;
//# sourceMappingURL=socialSecurityNumberDK.d.ts.map