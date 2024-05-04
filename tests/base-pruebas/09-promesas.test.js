import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
	test("getHeroeByIdAsync should return a Heroe ", (done) => {
		const heroId = 1;

		getHeroeByIdAsync(heroId).then((heroe) => {
			expect(heroe).toEqual({
				id: 1,
				name: "Batman",
				owner: "DC",
			});
			done();
		});
	});
	test("getHeroeByIdAsync should return an ERROR ", (done) => {
		const heroId = 100;

		getHeroeByIdAsync(heroId).catch((error) => {
			expect(error).toEqual("No se pudo encontrar el héroe");
			done();
		});
	});
});
