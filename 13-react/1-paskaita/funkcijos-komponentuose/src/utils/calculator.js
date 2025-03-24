export const suma = (a, b) => {
  return a + b;
};

export const vidurkisSk = (mas) => {
  let suma = 0;
  mas.forEach((sk) => {
    suma += sk;
  });
  return (suma / mas.length).toFixed(2);
};
