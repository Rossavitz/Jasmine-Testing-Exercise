it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 20000,
    years: 5,
    rate: 3,
  };
  expect(calculateMonthlyPayment(values)).toEqual("359.37");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 1000,
    years: 10,
    rate: 7,
  };
  expect(calculateMonthlyPayment(values)).toEqual("11.61");
});

it("should accept numbers with decimals", function () {
  const values = {
    amount: 1234.5678,
    years: 3.4,
    rate: 5.678,
  };
  expect(calculateMonthlyPayment(values)).toEqual("33.35");
});
