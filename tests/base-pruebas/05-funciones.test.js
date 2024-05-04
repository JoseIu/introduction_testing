import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funcions", () => {
	test("getUser should return a object", () => {
		const testUser = {
			uid: "ABC123",
			username: "El_Papi1502",
		};
		const user = getUser();

		expect(testUser).toEqual(user);
	});

	test("getUsuarioActivo should return a object", () => {
		const name = "Joselu";

		const userActive = getUsuarioActivo(name);

		expect(userActive).toEqual({
			uid: "ABC567",
			username: name,
		});
	});
});
