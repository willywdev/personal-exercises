import { add, divide, multiply, subtract } from "./index.js";

/* --- test add() function --- */
test("return 5 when called add(2,3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("return -11 when called add(2,-13)", () => {
  const result = add(2, -13);
  expect(result).toBeLessThan(-10);
});

test("returns value close to 0.3 when called add(0.1,0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

/* --- test subtract() function --- */
test("return 10 when called subtract(15,5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("return less than -5 when called subtract(5,15)", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(-5);
});

/* --- test multiply() function --- */
test("return 8 when called multiply(2,4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("return negative value if called multiply(-2,4)", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(-1);
});

test("return negative value if called multiply(2,-4)", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(-1);
});

test("return positive value if called multiply(-2,-4)", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(1);
});

/* --- test divide() function --- */
test("return 3 when called divide(9,3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("return 'You should not do this!' when called divide(24,0)", () => {
  const result = divide(24, 0);
  expect(result).toBe("You should not do this!");
});
