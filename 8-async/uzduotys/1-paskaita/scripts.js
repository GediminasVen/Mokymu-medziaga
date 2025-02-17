console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


setTimeout(() => {
    console.log('ivyko timeout')
}, 5000);


const getSomething = () => {
    return new Promise ((resolve, reject)=> {
        resolve('some data');
        reject('some error')
    })
}

getSomething().then(data => {
    console.log(data);
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log('finally')
})

