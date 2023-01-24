const fs = require('fs');
const path = require('path');

const tests = fs
  .readFileSync(path.join(__dirname, 'src', 'libs', 'string.test.ts'), 'utf8')
  .toString();

const source = fs
  .readFileSync(path.join(__dirname, 'src', 'libs', 'string.ts'), 'utf8')
  .toString();

const regTests = /describe\('(?<name>\w+)', \(\) => {\n\s+it\('example', \(\) => {\n\s+(?<code>.*\n)*?\s+\}\);/g;
const regComments = / \* ```js\n(?<code>.*\n)*? \* ```\n \*\/\nexport function (?<name>\w+)/g;
const regSourceFunctionName = /export function (?<name>\w+)\(/g;

let match;

const comments = {};
const split = source.split('```js\n');
split.forEach((str) => {
  console.log(str);
  console.log('-------------');
  const code = str.substring(0, str.indexOf('\n * ```'));
  while ((match = regSourceFunctionName.exec(str)) !== null) {
    comments[match.groups.name] = code;
    break;
  }
});

let result = source + '';

while ((match = regTests.exec(tests)) !== null) {
  match.groups.code = match.groups.code.replace(/\n$/g, '');
  console.log('###########################################');
  console.log(match.groups.name);
  console.log('-------------');
  console.log(comments[match.groups.name]);
  console.log('-------------');
  console.log(match.groups.code);
  result = result.replace(comments[match.groups.name], match.groups.code);
}

// console.log(result);
console.log(comments);
