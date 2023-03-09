import CalendarView from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("if Calendar component is in the screen", () => {
  render(<CalendarView />);

  // test for the input to be in the document
  const input = screen.getByPlaceholderText("DD/MM/YYYY");
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "03/09/2023" } });
  expect(input).toHaveValue("03/09/2023");

  // test for the button to be in the document
  const button = screen.getByText("See Calendar");
  expect(button).toBeInTheDocument();
  userEvent.click(button);

  // test for the title to be in the document
  expect(screen.getByText("September 2023")).toBeInTheDocument();
  expect(screen.getByText("We")).toBeInTheDocument();
  expect(screen.getByText("30")).toBeInTheDocument();
  expect(screen.getByText("3")).toHaveClass("highlight");
});
