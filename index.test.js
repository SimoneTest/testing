let functions = require("./index.js")
let add = functions.add

test('adds numbers', () => {
    expect(add(1, 2)).toBe(3);
});
