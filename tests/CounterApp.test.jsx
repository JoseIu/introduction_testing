import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Testing <CounterApp/>", () => {
	const value = 20;

	test("Should match with snapshot ", () => {
		const { container } = render(<CounterApp value={value} />);

		expect(container).toMatchSnapshot();
	});
	test("Should show the initial value", () => {
		const { getByText } = render(<CounterApp value={value} />);

		expect(getByText(value)).toBeTruthy();
	});

	test("Should increment with the button +1", () => {
		render(<CounterApp value={value} />);

		fireEvent.click(screen.getByText("+1"));

		expect(screen.getByText("21")).toBeTruthy();
	});

	test("Should decrement with the button -1", () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText("-1"));

		expect(screen.getByText("19")).toBeTruthy();
	});
	test("Should reset the value to initial value ", () => {
		render(<CounterApp value={value} />);

		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByText("+1"));

		fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

		expect(screen.getByText(value)).toBeTruthy();
	});
});
