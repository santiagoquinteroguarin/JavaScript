const iAmProgrammer = new Promise((resolve, reject) => {
    const validation = true;
    if(validation) {
        resolve('Soy programad@r 😉');
    } else {
        reject('No soy un programad@r 😣');
    }
})

iAmProgrammer
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err));