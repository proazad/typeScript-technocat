{
  //
  // type assertion
  let anything: any;
  anything = "Next Level Web Development";
  anything = 222;
  // (anything as number).

  const kgtoGm = (value: string | number): number | string | undefined => {
    if (typeof value === "string") {
      const gm = parseFloat(value) * 1000;
      return `The converted Value is ${gm}`;
    } else if (typeof value === "number") {
      const gm = value * 1000;
      return gm;
    }
  };

  const result = kgtoGm(1000) as number;
  const result2 = kgtoGm("1000") as string;

  type customError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as customError).message);
  }
  //
}
