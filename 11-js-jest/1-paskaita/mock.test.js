const app = require("./mock");

describe("mokomes mock veikimo", () => {
  it("testuojam mock", () => {
    const app = require("./mock");
    const mock = jest.fn().mockReturnValue("Kazys Grinius");
    app.getFullName = mock;
    const snipas = jest.spyOn(app, "getFullName");

    const result = app.greet("Kazys", "Grinius");
    expect(result).toBe("Labas, Kazys Grinius");
    expect(snipas).toHaveBeenCalled();
    expect(snipas).toHaveBeenCalledWith("Kazys", "Grinius");
  });

  test("testuojam kainos skaiciav su uzmockintu getprice", () => {
    const mock = jest.fn().mockReturnValue(10);
    app.getPrice = mock
    const result = app.countPrice(3, 1.1)
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(result).toBe(11)
  });
});
