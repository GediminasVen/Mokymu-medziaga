function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("DataLoaded"), 1000);
  });
}

module.exports = fetchData
