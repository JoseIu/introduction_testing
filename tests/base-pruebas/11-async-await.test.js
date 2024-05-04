import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba 11-async-await", () => {
	test("should retur a image ", async () => {
		const url = await getImagen();
		expect(typeof url).toBe("string");
	});
});
