const person = {
    name: 'Santiago',
    age: 23,
    info() {
        console.log(`Mi nombre es ${this.name} y mi edad es ${this.age}`);
    },
    pet: {
        name: 'Luna',
        age: 5,
        info() {
            console.log(`Mi mascota se llama ${this.name} y tiene una edad de ${this.age} años`);
        }
    }
}

person.info();
person.pet.info();