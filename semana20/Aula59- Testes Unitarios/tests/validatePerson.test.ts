import { validatePerson } from "../src";

describe("", () => {
    //2) 
    //- a)
    test("Should return false for empty name", () => {
        const result = validatePerson({
            name: "",
            life: 900,
            strength: 3300,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    //2) 
    //- b)
    test("Should return false for life 0", () => {
        const result = validatePerson({
            name: "Samurai Dev",
            life: 0,
            strength: 9000,
            defense: 200,
        });

        expect(result).toBe(false);
    });

    //2) 
    //- c)
    test("Should return false for strength 0", () => {
        const result = validatePerson({
            name: "Junin da Quebrada",
            life: 5500,
            strength: 0,
            defense: 1500,
        });

        expect(result).toBe(false);
    })

    //2)
    //- d)
    test("Should return false for defense 0", () => {
        const result = validatePerson({
            name: "My Little Pony",
            life: 300,
            strength: 500,
            defense: 0,
        });

        expect(result).toBe(false);
    })

    //2) 
    //- e)
    test("Should return false for life/strength/defense equal 0 or negative number", () => {
        const result = validatePerson({
            name: "Atum de Patoquinho",
            life: - 700,
            strength: - 300,
            defense: - 10,
        });

        expect(result).toBe(false);
    })

    //2 - f)
    test("Should return true for all valid injecteds", () => {
        const result = validatePerson({
            name: "Bananinha com Açai",
            life: 5500,
            strength: 300,
            defense: 1500,
        });

        expect(result).toBe(true);
    })

}) 