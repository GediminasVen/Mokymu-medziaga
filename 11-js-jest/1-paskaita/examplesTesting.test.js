const [
  maistoProduktai,
  duokMasyva,
  fakeAPI,
  atmetantiFunkcija,
] = require("./examplesTesting");

describe("maistoProduktai:", () => {
  it("masyve maistoProduktai yra pienas reiksme", () => {
    expect(maistoProduktai).toContain("pienas");
  });
});
it("duokMasyva funkcija teisingai grazina masyvo reiksmes", () => {
  expect(duokMasyva()).toEqual(["pienas", "duona", "vanduo"]);
});

it("duokMasyva funkcijos masyve yra reiksme duona", () => {
  const data = duokMasyva();
  expect(data).toContain("duona");
});

it("fakeAPI teisingai grazina ats iki 2 sec", async () => {
  const result = await fakeAPI(1000);
  expect(result).toBe("Atsakymas");
});

it("fakeapi ismeta klaida kai ats grazina ilgiau nei 2 sec.", async () => {
  try {
    const result = await fakeAPI(3000);
    expect(result).toBe("Atsakymas");
  } catch (error) {
    expect(error).toBe("no data found");
  }
});

it("atmetantiFunkcija error apdorojimas", async () => {
  const result = atmetantiFunkcija();
  await expect(result).rejects.toThrow("bad request");
});
