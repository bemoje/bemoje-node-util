/**
 * Matches Danish social security numbers with or without the dash.
 * Example: 151199-1512
 */
export const regSocialSecurityNumbersDK = /(?<dd>[0-3][0-9])(?<mm>[0-1][0-9])(?<yy>[0-9]{2}).?(?<id4>[0-9]{4})/g
