export const lonelyNumber = (array: number[]): number => {
    const lonely: number[] = array.filter(number => {
        return array.indexOf(number) === array.lastIndexOf(number)
    })

    return lonely[0]
}