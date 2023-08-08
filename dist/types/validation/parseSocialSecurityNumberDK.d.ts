import { ParsedSocialSecurityNumberDK } from './types/ParsedSocialSecurityNumberDK';
/**
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
 * @returns An object containing the birth year, month, day, id, and sex of the individual.
 * @throws Will throw an error if the SSN is not a valid Danish Social Security Number.
 * @param ssn Danish social security number
 * @example ```ts
 * const ssn = '010203-1234'
 * parseSocialSecurityNumberDK(ssn)
 * //=> { year: 2003, month: 2, day: 1, id: 1234, sex: 'F' }
 * ```
 */
export declare function parseSocialSecurityNumberDK(ssn: string): ParsedSocialSecurityNumberDK | undefined;
//# sourceMappingURL=parseSocialSecurityNumberDK.d.ts.map