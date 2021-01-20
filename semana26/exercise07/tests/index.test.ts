import { checkAnagram } from "../src"

describe("Testing 'checkAnagram'", () => {
    test("Case: anagrama, nagarama", () => {
        const result = checkAnagram("anagrama", "nagarama")

        expect(result).toBe(true)
    })

    test("Case: gato, toga", () => {
        const result = checkAnagram("gato", "toga")

        expect(result).toBe(true)
    })

    test("Case: gato, rato", () => {
        const result = checkAnagram("gato", "rato")

        expect(result).toBe(false)
    })

}) 