import Input from ".";
import { fireEvent, render, screen } from "@testing-library/react";

test("if Input component is in the screen", () => {
  const mockSetValue = jest.fn(() => {});
  render(<Input setValue={mockSetValue} />);

  // test for the input to be in the document
  const input = screen.getByPlaceholderText("DD/MM/YYYY");
  expect(input).toBeInTheDocument();

  // included just to introduce fireEvent
  fireEvent.change(input, { target: { value: "03/09/2023" } });
  expect(input).toHaveValue("03/09/2023");

  // test for the button to be in the document
  expect(screen.getByText("See Calendar")).toBeInTheDocument();
});
