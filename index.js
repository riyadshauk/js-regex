const readline = require('readline');

/**
 * @author Riyad Shauk
 * @description This is a quick-and-dirty script and is not exhaustively tested
 * for various use-cases.
 * @param {*} line Some text match with RegEx.
 */
const matchRegex = line => {
  const regex = process.argv[2];
  if (!regex) {
    console.error(`Error: Invalid regex syntax!
       Please provide a regex expression as a string as the argument.`
      .replace(/\s/, ' '));
    return 1;
  }
  const match = line.match(regex);
  if (match) {
    const matchKeys = Object.keys(match).map(v => Number(v)).filter(key => !Number.isNaN(key)).sort((a, b) => a < b ? 1 : -1);
    console.log(match[matchKeys[0]]);
    return match[matchKeys[0]];
  }
};

const rl = readline.createInterface({ input: process.stdin });
rl.on('line', line => matchRegex(line));