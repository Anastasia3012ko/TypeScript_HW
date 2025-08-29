interface ConcatStrings {
    (str1: string, str2: string): string
}

const  concatStrings: ConcatStrings = (str1, str2) => {
    return str1 + str2;
}

console.log(`String 1 with string 2: ${concatStrings('Type', 'Script')}`);
