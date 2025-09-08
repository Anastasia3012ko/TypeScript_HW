export function generateFibonacci(lastNumber) {
    if (lastNumber < 0)
        return [];
    const sequence = [0, 1];
    Array.from({ length: lastNumber }, () => {
        const next = sequence.at(-1) + sequence.at(-2);
        if (next <= lastNumber)
            sequence.push(next);
    });
    return sequence.filter(n => n <= lastNumber);
}
export function generatePrimeNumbers(lastNumber) {
    const primes = [];
    for (let num = 2; num <= lastNumber; num++) {
        if (num === 2 ||
            Array.from({ length: Math.floor(Math.sqrt(num)) - 1 }, (_, i) => i + 2)
                .every(div => num % div !== 0)) {
            primes.push(num);
        }
    }
    return primes;
}
//# sourceMappingURL=sequenceUtils.js.map