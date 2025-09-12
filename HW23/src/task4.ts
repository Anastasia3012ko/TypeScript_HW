const numbersArray = [1000, 2000, 1500, 3000];

function wait(num: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited ${num} ms`);
        }, num);
    });
}
async function processNumbers(numbers: number[]): Promise<void> {
    try {
        const promises = numbers.map(num => wait(num))
        const results = await Promise.all(promises);

        console.log("Result from all promises:", results);
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}

processNumbers(numbersArray);