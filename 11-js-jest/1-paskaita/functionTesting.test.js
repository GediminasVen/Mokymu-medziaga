const [suma, atimti, daugyba] = require("./functionTesting");

test("suma grazina 5", () => {
  expect(suma(2, 3)).toBe(5);
});
test("funkcija teisingai skaiciuoj", () => {
  expect(suma(2, 3)).not.toBe(4);
});
test("funkcija atimti su parametrais 10 ir 8 grazina 2", () => {
  expect(atimti(10, 8)).toBe(2);
});
test("funkcija atimti su parametrais 10 ir 8 grazina 80", () => {
  expect(daugyba(10, 8)).toBe(80);
});
