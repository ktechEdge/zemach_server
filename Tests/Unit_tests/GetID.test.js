const isNotNull = require("./GetID");
const GetCurrID = require("./GetID");

test(`expected ${true}`, () => {
  expect(isNotNull("7")).toBe(true);
});
test(`expected ${true}`, () => {
  expect(GetCurrID("7", "7")).toBe(true);
});
