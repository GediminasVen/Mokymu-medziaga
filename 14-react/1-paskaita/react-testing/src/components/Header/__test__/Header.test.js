import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders learn react link", () => {
  render(<Header title="my header" />);
  const header = screen.getByText(/my header/i);
  expect(header).toBeInTheDocument();
});
test("is a heading", () => {
  render(<Header title="my header" />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
});

describe("aritmetiniai skaiciavimai:", () => {
  test("2 + 3 yra 5", () => {
    expect(2 + 3).toBe(5);
  });
});
