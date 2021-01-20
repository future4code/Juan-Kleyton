export const sumTwo = (nums: any, target: any) => {
    let numsIndexes: any = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (numsIndexes[diff] !== undefined && numsIndexes !== i) {
            return [numsIndexes[diff], i]
        } else {
            numsIndexes[nums[i]] = i
        }
    }
}

