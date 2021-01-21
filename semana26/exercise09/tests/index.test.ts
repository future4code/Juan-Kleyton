import { findNegativeNumbersInMatrix } from "../src"

describe("Testing 'findNegativeNumbersInMatrix'", () => {
    test("Case: [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]", () => {
        const input: number[][] = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
        const result = findNegativeNumbersInMatrix(input)

        expect(result).toBe(8)
    })

    test("Case: [[3,2],[1,0]]", () => {
        const input: number[][] = [[3,2],[1,0]]
        const result = findNegativeNumbersInMatrix(input)

        expect(result).toBe(0)
    })

    test("Case: [[1,-1],[-1,-1]]", () => {
        const input: number[][] = [[1,-1],[-1,-1]]
        const result = findNegativeNumbersInMatrix(input)

        expect(result).toBe(3)
    })

    test("Case: [[-1]]", () => {
        const input: number[][] = [[-1]]
        const result = findNegativeNumbersInMatrix(input)

        expect(result).toBe(1)
    })

})