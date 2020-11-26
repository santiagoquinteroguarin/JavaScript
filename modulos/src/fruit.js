import { Client } from './client.js';

export class Fruit extends Client {
    constructor(name, emoji) {
        super(name);
        this.emoji = emoji;
    }
}

export default function welcome() {
    console.log('Bienvenido a la fruteria');
}