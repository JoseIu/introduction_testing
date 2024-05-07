import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
	// test("Should to do match with snapshot", () => {
	// 	const title = "Hola, Soy Vegeta";
	// 	const { container } = render(<FirstApp title={title} />);
	// 	expect(container).toMatchSnapshot();
	// });
	test("Should tos show in a H1", () => {
		const title = "Hola, Soy Vegeta";
		const { container, getByText, getByTestId } = render(
			<FirstApp title={title} />
		);
		expect(getByText(title)).toBeTruthy();

		// const h1 = container.querySelector("h1");
		// expect(h1.innerHTML).toBe(title);
		expect(getByTestId("test-title").innerHTML).toContain(title);
	});

	test("Should show subtitle sended by props ", () => {
		const title = "Hola, Soy Vegeta";
		const subTitle = "Soy un subtítulo";
		const { getAllByText } = render(
			<FirstApp title={title} subTitle={subTitle} />
		);
		expect(getAllByText(subTitle).length).toBe(2);
	});
});
