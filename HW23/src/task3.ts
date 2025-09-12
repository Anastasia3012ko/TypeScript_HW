function fetchUsers(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Users successfully received');
        }, 1000)
    })
}

function fetchProducts(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Products successfully received');
        }, 1500)
    })
}

function fetchPayments(): Promise<string>{
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            if(Math.random() > 1){    // всегда будет ошибка и результат reject
              resolve(`Payments received successfully`)  
            } else {
                reject('Error with receiving data');
            }
            
        }, 2000)
    })
}

async function allPromises(): Promise<void> {
    try {
        const  result = await Promise.all([fetchUsers(), fetchProducts(), fetchPayments()]);
        console.log(result);
        
    } catch (error) {
        console.error('One of the operations ended with an error', (error as Error).message);
        
    }
}

allPromises();