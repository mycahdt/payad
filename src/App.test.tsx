import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("renders the header somewhere", () => {
        const linkElement = screen.getByText(/PAYAD Website/i);
        expect(linkElement).toBeInTheDocument();
    });
});
