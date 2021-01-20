import { sumTwo } from "../src"

describe("Testing 'sumOfTwo'", () => {
    test("Case: nums=[2, 7, 11, 15], target=9", () => {
        const result = sumTwo([2, 7, 11, 15], 9) as number[]

        expect(result[0]).toEqual(0)
        expect(result[1]).toEqual(1)

    })

    test("Case: nums=[4, 5, 10, 12, 21], target=17", () => {
        const result = sumTwo([4, 5, 10, 12, 21], 17) as number[]

        expect(result[0]).toEqual(1)
        expect(result[1]).toEqual(3)
    })

    test("Case: nums=[4, 5, 10, 12, 21], target=170", () => {
        const result = sumTwo([4, 5, 10, 12, 21], 170)

        expect(result).toEqual(undefined)
    })
})