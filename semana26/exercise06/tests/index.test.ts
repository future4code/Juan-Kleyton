import { lonelyNumber } from "../src"

describe("Testing 'lonelyNumber'", () => {
    test("Case: '[2,2,1]", () => {
        const input = [2,2,1]
        const result = lonelyNumber(input)

        expect(result).toBe(1)
    })

    test("Case: '[4,1,2,1,2]", () => {
        const input = [4,1,2,1,2]
        const result = lonelyNumber(input)

        expect(result).toBe(4)
    })    
}) 