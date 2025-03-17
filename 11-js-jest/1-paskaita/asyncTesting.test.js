const fetchData = require("./asyncTesting");

test("fetches data succesfuly", async () => {
    const data = await fetchData();
    console.log(data)

    expect(data).toBe('DataLoaded')
}

);
