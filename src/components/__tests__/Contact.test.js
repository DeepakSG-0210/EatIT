import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contatct component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByPlaceholderText("Email");

    expect(button).toBeInTheDocument();
});

test("Should load two input inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes).toBeInTheDocument();
});