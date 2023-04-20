/**
 * Matches 2 or more consecutive whitespace characters, including line terminators, tabs, etc.
 */
export const repeatingWhiteSpace = /((\r?\r?\n)|\s|\t){2,}/g

/**
 * Matches words in a string
 */
export const words = /\b[^\W]+/g

/**
 * Matches Danish social security numbers with or without the dash.
 * Example: 151199-1512
 */
export const socialSecurityNumbersDK = /(?<dd>[0-3][0-9])(?<mm>[0-1][0-9])(?<yy>[0-9]{2}).?(?<id>[0-9]{4})/g

/**
 * Matches positive or negative integers.
 * Example: -20
 */
export const integers = /-?\d+/g

/**
 * Matches inverted US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412,3461
 */
export const numberNoThousandSepCommaDecimal = /-?\d+,\d+/g

/**
 * Matches US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412.3461
 */
export const numberNoThousandSepDotDecimal = /-?\d+.\d+/g

/**
 * Matches inverted US format positive or negative decimal numbers with thousand separators.
 * Example: -20.412,34
 */
export const numberDotSepCommaDecimal = /-?\d{1,3}(\.\d{3})*(,\d+)?/g

/**
 * Matches US format positive or negative decimal numbers with thousand separators.
 * Example: -20,412.34
 */
export const numberCommaSepDotDecimal = /-?\d{1,3}(,\d{3})*(\.\d+)?/g

/**
 * Prefixes for hex colors, hex decimal and regexp unicode hex
 */
export const isHexPrefix = /^(0x|0h|(\\?u)|#)/i

/**
 * Understands prefixes for hex colors, hex decimal and regexp unicode hex
 */
export const isHex = /^(0x|0h|(\\?u)|#)?[0-9A-F]+$/i

/**
 * For checking if a string is of only alpha characters for a specific locale.
 */
export const isLocaleAlpha = new Map([
  ['en-US', /^[A-Z]+$/i],
  ['az-AZ', /^[A-VXYZÇƏĞİıÖŞÜ]+$/i],
  ['bg-BG', /^[А-Я]+$/i],
  ['cs-CZ', /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i],
  ['da-DK', /^[A-ZÆØÅ]+$/i],
  ['de-DE', /^[A-ZÄÖÜß]+$/i],
  ['el-GR', /^[Α-ώ]+$/i],
  ['es-ES', /^[A-ZÁÉÍÑÓÚÜ]+$/i],
  ['fa-IR', /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i],
  ['fr-FR', /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i],
  ['it-IT', /^[A-ZÀÉÈÌÎÓÒÙ]+$/i],
  ['nb-NO', /^[A-ZÆØÅ]+$/i],
  ['nl-NL', /^[A-ZÁÉËÏÓÖÜÚ]+$/i],
  ['nn-NO', /^[A-ZÆØÅ]+$/i],
  ['hu-HU', /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i],
  ['pl-PL', /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i],
  ['pt-PT', /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i],
  ['ru-RU', /^[А-ЯЁ]+$/i],
  ['sl-SI', /^[A-ZČĆĐŠŽ]+$/i],
  ['sk-SK', /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i],
  ['sr-RS@latin', /^[A-ZČĆŽŠĐ]+$/i],
  ['sr-RS', /^[А-ЯЂЈЉЊЋЏ]+$/i],
  ['sv-SE', /^[A-ZÅÄÖ]+$/i],
  ['th-TH', /^[ก-๐\s]+$/i],
  ['tr-TR', /^[A-ZÇĞİıÖŞÜ]+$/i],
  ['uk-UA', /^[А-ЩЬЮЯЄIЇҐі]+$/i],
  ['vi-VN', /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i],
  ['ku-IQ', /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i],
  // eslint-disable-next-line no-misleading-character-class
  ['ar', /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/],
  ['he', /^[א-ת]+$/],
  ['fa', /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i],
])

/**
 * For checking if a string is of only alpha-numeric characters for a specific locale.
 */
export const isLocaleAlphaNumeric = new Map([
  ['en-US', /^[0-9A-Z]+$/i],
  ['az-AZ', /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i],
  ['bg-BG', /^[0-9А-Я]+$/i],
  ['cs-CZ', /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i],
  ['da-DK', /^[0-9A-ZÆØÅ]+$/i],
  ['de-DE', /^[0-9A-ZÄÖÜß]+$/i],
  ['el-GR', /^[0-9Α-ω]+$/i],
  ['es-ES', /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i],
  ['fr-FR', /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i],
  ['it-IT', /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i],
  ['hu-HU', /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i],
  ['nb-NO', /^[0-9A-ZÆØÅ]+$/i],
  ['nl-NL', /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i],
  ['nn-NO', /^[0-9A-ZÆØÅ]+$/i],
  ['pl-PL', /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i],
  ['pt-PT', /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i],
  ['ru-RU', /^[0-9А-ЯЁ]+$/i],
  ['sl-SI', /^[0-9A-ZČĆĐŠŽ]+$/i],
  ['sk-SK', /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i],
  ['sr-RS@latin', /^[0-9A-ZČĆŽŠĐ]+$/i],
  ['sr-RS', /^[0-9А-ЯЂЈЉЊЋЏ]+$/i],
  ['sv-SE', /^[0-9A-ZÅÄÖ]+$/i],
  ['th-TH', /^[ก-๙\s]+$/i],
  ['tr-TR', /^[0-9A-ZÇĞİıÖŞÜ]+$/i],
  ['uk-UA', /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i],
  ['ku-IQ', /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i],
  ['vi-VN', /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i],
  // eslint-disable-next-line no-misleading-character-class
  ['ar', /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/],
  ['he', /^[0-9א-ת]+$/],
  ['fa', /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i],
])
