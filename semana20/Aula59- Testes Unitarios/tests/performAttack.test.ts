import { performAttackV2 } from "../src";
import { Person } from "../src/model/person";

describe("", () => {
    //4)
    //- b)
    test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
            return true
        });
    });
    //4) 
    //- c)
    test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
            return false
        });
    });

    //5) 
    //- a)
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Person = {
            name: "Jubileu",
            life: 1500,
            defense: 500,
            strength: 600,
        };

        const defender: Person = {
            name: "Mocréia",
            life: 1300,
            defense: 400,
            strength: 800,
        };

        performAttackV2(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(1100);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });

    //5)
    //- b)
    test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false;
        });

        const attacker: Person = {
            name: "Tubaina",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Person = {
            name: "Sukita",
            life: 1500,
            defense: 0,
            strength: 800,
        };

        try {
            performAttackV2(attacker, defender, validatorMock as any);
        } catch (e) {
            expect(e.message).toBe("Invalid person");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

    //6 - 
    //1)
    test("Should return dead defender", () => {
        expect.assertions(2);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Person = {
            name: "Lasanha",
            life: 1500,
            defense: 200,
            strength: 1400,
        };

        const defender: Person = {
            name: "Estatua da liberdade",
            life: 1500,
            defense: -100,
            strength: 800,
        };

        try {
            performAttackV2(attacker, defender, validatorMock as any);
        } catch (e) {
            expect(e.message).toBe("You dead!")
            expect(validatorMock).toHaveBeenCalled();
        }
    });

    //6 -
    // 2)
    test("Should return true attacker.strength equal 0, where defender took damage", () => {
        expect.assertions(1);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Person = {
            name: "Lasanha",
            life: 2500,
            defense: 200,
            strength: 0,
        };

        const defender: Person = {
            name: "Statue of Liberty",
            life: 1500,
            defense: -200,
            strength: 800,
        };

        try {
            performAttackV2(attacker, defender, validatorMock as any);

            expect(defender.life).toEqual(1300);
        } catch (e) {
            expect(validatorMock).toHaveBeenCalled();
        }
    });

    //6 - 
    //3)
    test("Should return true attacker.strength and defender.defense negative value", () => {
        expect.assertions(2);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Person = {
            name: "Pet Bottle",
            life: 100,
            defense: -200,
            strength: -500,
        };

        const defender: Person = {
            name: "Window",
            life: 1100,
            defense: -700,
            strength: 800,
        };

        try {
            performAttackV2(attacker, defender, validatorMock as any);

            //Quebou a lógica por algum motivo.
            expect(defender.life).toEqual(0);
        } catch (e) {
            expect(validatorMock).toHaveBeenCalled();
        }
    });

    //6) - 
    //4)
    test("Should return true from defender.life equal negative number", () => {
        expect.assertions(1);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Person = {
            name: "Big old Tree",
            life: 10500,
            defense: 1000,
            strength: 7700,
        };

        const defender: Person = {
            name: "Chapolin",
            life: 300,
            defense: -400,
            strength: -800,
        };

        try {
            performAttackV2(attacker, defender, validatorMock as any);

            //Falta uma mensagem no expect.
            expect(defender.life).toEqual(-7400);
        } catch (e) {
            expect(validatorMock).toHaveBeenCalled();
        }
    });
}) 