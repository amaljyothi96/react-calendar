import Calendar from ".";
import { render, screen } from "@testing-library/react";

test("if Calendar component is in the screen", () => {
  render(<Calendar date={"03/09/2023"} />);

  // test for the title to be in the document
  expect(screen.getByText("September 2023")).toBeInTheDocument();

  // test for the days of week to be in the document
  expect(screen.getByText("We")).toBeInTheDocument();

  // test for last date to be in the document
  expect(screen.getByText("30")).toBeInTheDocument();

  // test for highlighted date
  expect(screen.getByText("3")).toHaveClass("highlight");
});
