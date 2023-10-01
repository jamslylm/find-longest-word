const findLongestWord = (sentence) => {
    // Local function to count vowels
    const countVowels = (word) => {
        const vowels = ['a', 'e', 'i', 'o', 'u']
        return word.split('').filter(char => vowels.includes(char)).length
    }

    // Split the sentence into words so we can iterate over them
    const words = sentence.split(' ') // Or split(/\s+/)
    let longestWord = '', longestWordVowelsCount = 0
    
    // Iterate over the splitted words
    for(const word of words){
        // Remove all non-english character in the word
        const cleanedWord = word.replace(/[^a-z]/ig, '')

        // First check to find the longest word
        if(cleanedWord.length > longestWord.length){
            longestWord = cleanedWord
            longestWordVowelsCount = countVowels(cleanedWord)
        }
        // In case we find equal length we look for the most contained vowels
        else if(cleanedWord.length === longestWord.length){
            const vowelCount = countVowels(cleanedWord)

            if(vowelCount > longestWordVowelsCount){
                longestWord = cleanedWord
            }
        }
    }

    return longestWord
}

console.log(`\nLongest word is: '${findLongestWord(process.argv[2])}'`);