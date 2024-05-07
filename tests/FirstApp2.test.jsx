import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
	const title = "Hola, Soy Goku";
	const subTitle = "Soy un subtitulo";
	test("Should to do match with snapshot ", () => {
		const { container } = render(<FirstApp title={title} />);

		expect(container).toMatchSnapshot();
	});

	test('Should show a message "Hola, Soy Goku"', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
	test("Title should show in a H1 ", () => {
		render(<FirstApp title={title} />);

		expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
			title
		);
	});
	test("Should show subtitle sended by PROPS ", () => {
		render(<FirstApp title={title} subTitle={subTitle} />);

		expect(screen.getAllByText(subTitle).length).toBe(2);
	});
	test("The subTitle should be in a H2 ", () => {
		render(<FirstApp title={title} subTitle={subTitle} />);

		const headings = screen.getAllByRole("heading", { level: 2 });

		headings.forEach((heading) =>
			expect(heading.innerHTML).toContain(subTitle)
		);
	});
});
