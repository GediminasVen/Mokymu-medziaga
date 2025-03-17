const [
  apskritimoPlotas,
  palindrome,
  findMax,
  pridetKaina,
  uzdelsimas,
  grazinaNull,
] = require("./sprendimai");

describe("1uzd", () => {
  test("ar apskritimo plotas teisingai paskaiciuotas", () => {
    expect(apskritimoPlotas(2)).toBe(12.566370614359172);
  });
});
describe("2uzd", () => {
  it("eme", () => {
    expect(palindrome("eme")).toBe(true);
  });
});

describe("2uzd", () => {
  it("Vanagas", () => {
    expect(palindrome("vanagas")).toBe(false);
  });
});
describe("3uzd", () => {
  test("grazina didziausia teigiama skaiciu", () => {
    expect(findMax([1, 2, 3])).toBe(3);
  });
  test("grazina didziausia neigiama skaiciu", () => {
    expect(findMax([-2, -3, -5])).toBe(-2);
  });
  test("masyvas tuscias", () => {
    expect(() => findMax([])).toThrow(
      "neteisingai ivestas parametras skaiciai"
    );
  });

  test("ne masyvas", () => {
    expect(() => findMax("asd")).toThrow(
      "neteisingai ivestas parametras skaiciai"
    );
  });
});
describe("4uzd", () => {
  test("prideta kaina prie objekto", () => {
    const objektas = {};
    expect(pridetKaina(objektas)).toEqual({ kaina: 50 });
  });

  test("rodo klaida, kai objektas jau turi kaina", () => {
    const objektas = { kaina: 30 };
    expect(pridetKaina(objektas)).toBe("Objektas jau turi kainą!");
  });
});
describe("5uzd", () => {
  test("grazina ats po mazo delay iki 1 sek", async () => {
    const result = await uzdelsimas(500);
    expect(result).toBe("Atsakymas gautas!");
  });
  test("grazina ats po mazo delay iki 1 sek", async () => {
    await expect(uzdelsimas(1500)).rejects.toThrow(
      "uzdelsimas mazesnis nei 1 sek"
    );
  });
});
describe("6uzd", () => {
  test("visada bus null", () => {
    expect(grazinaNull()).toBe(null);
  });
});
