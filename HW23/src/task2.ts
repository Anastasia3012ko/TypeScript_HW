const stringArray: string[] = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'html/css'];

function processString(str: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(str.toUpperCase());
        }, 1000);
    });
}

async function processStringsArray(strings: string[]): Promise<void> {
    try {
        const results = await Promise.all(strings.map(str => processString(str)));
        console.log('Result of processing all strings: ', results);
    } catch (error) {
        console.error('Error with processing strings', error);
    }
}

processStringsArray(stringArray);