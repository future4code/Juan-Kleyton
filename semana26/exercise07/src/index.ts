export const checkAnagram = (string: string, anagram: string): boolean => {
    return string.split("").sort().join("") === anagram.split("").sort().join("")
}