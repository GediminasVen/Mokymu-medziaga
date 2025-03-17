const [getName, getNameAndAge] = require("./objectTesting");

test("getName grazina varda", () => {
  expect(getName()).toEqual({
    name: "Jonas",
  });
});

test("getNameandage grazina varda mantas ir amziu - 20", () => {
  expect(getNameAndAge("Mantas", 20)).toEqual({
    name: "Mantas",
    age: 20,
  });
});

