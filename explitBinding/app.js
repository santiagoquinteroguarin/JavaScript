// Explit Binding

function person(product1, product2) {
    console.log(`Mi nombre es: ${this.name} y me gusta el ${product1} y las ${product2}`);
}

const info = {
    name: 'Santiago',
}

const fruits = ['Mango','Fresas'];

// call - recibe de a un argumento
person.call(info, fruits[0], fruits[1]);
// apply - recibe un array
person.apply(info, fruits);
// bind - crea un nueva función y recibe de a un argumento
const newFunction = person.bind(info, fruits[0], fruits[1]);
newFunction();