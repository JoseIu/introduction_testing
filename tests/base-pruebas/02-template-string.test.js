import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruenas en 02-template-string", () => {
	test('getSaludo should return "Hola Jose"', () => {
		const name = "Jose";
		const message = getSaludo(name);
	});
});
