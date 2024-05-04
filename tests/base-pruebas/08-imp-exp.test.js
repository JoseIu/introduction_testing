import {
	getHeroeById,
	getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Test 08-imp-exp", () => {
	test("getHeroeById should return a Hero by ID ", () => {
		const heroId = 1;

		const hero = getHeroeById(heroId);

		expect(hero).toEqual({
			id: expect.any(Number),
			name: expect.any(String),
			owner: expect.any(String),
		});
	});

	test("getHeroeById should return undefine if not exist a Heroe ", () => {
		const heroId = 100;

		const hero = getHeroeById(heroId);

		expect(hero).toBe(undefined);
	});

	test("getHeroesByOwner should return an array of Heroes Marvel ", () => {
		const ownerName = "Marvel";
		const heroesTest = [
			{
				id: 2,
				name: "Spiderman",
				owner: "Marvel",
			},
			{
				id: 5,
				name: "Wolverine",
				owner: "Marvel",
			},
		];

		const heroes = getHeroesByOwner(ownerName);
		expect(heroes.length).toBe(2);

		expect(heroes).toEqual(heroesTest);
	});
	test("getHeroesByOwner should return an array of Heroes DC ", () => {
		const ownerName = "DC";
		const heroesTest = [
			{
				id: 1,
				name: "Batman",
				owner: "DC",
			},
			{
				id: 3,
				name: "Superman",
				owner: "DC",
			},
			{
				id: 4,
				name: "Flash",
				owner: "DC",
			},
		];
		const heroes = getHeroesByOwner(ownerName);
		expect(heroes.length).toBe(3);

		expect(heroes).toEqual(heroesTest);
	});
});
