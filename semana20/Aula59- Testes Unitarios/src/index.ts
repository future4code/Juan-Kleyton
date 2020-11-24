mport { Person } from "./model/person";

//1) 
//- b)
export const validatePerson = (injected: Person): boolean => {
    if (
        !injected.name ||
        injected.life === undefined ||
        injected.strength === undefined ||
        injected.defense === undefined
    ) {
        return false
    }
    if (injected.life <= 0 || injected.strength <= 0 || injected.defense <= 0) {
        return false
    }
    return true
}

//3) 
//- a)
export const performAttack = (
    attacker: Person,
    defender: Person
) => {
    if (!validatePerson(attacker) || !validatePerson(defender)) {
        throw new Error("Invalid person");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};

//3 - b)
export const performAttackV2 = (
    attacker: Person,
    defender: Person,
    validator: (injected: Person) => boolean
) => {
    let message
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid person");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
    if (defender.life <= 0) {
        throw new Error("You dead!");
    }
}; 