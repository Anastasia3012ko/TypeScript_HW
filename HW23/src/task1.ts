function fetchUser(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('User successfully received');
        }, 1000)
    })
}

function fetchProduct(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Product successfully received');
        }, 2000)
    })
}

function fetchPayment(): Promise<string> {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
               resolve('Payment successfully received') ;
            } else {
                reject('Error fetching data');
            }
            
        }, 3000)
    })
} 

async function main(): Promise<void> {
    try {
        const user =  await fetchUser();
        console.log(user);
        
        const product =  await fetchProduct();
        console.log(product);

        const payment = await fetchPayment();
        console.log(payment);
        
    } catch (error) {
        console.error('Error: ', error);
        
    }
}

main();
