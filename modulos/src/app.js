import { Client } from './client.js';
import welcome, { Fruit } from './fruit.js';

welcome();
const client = new Client('Santigo');
console.log(client)
const fruit = new Fruit('Apple','🍎');
console.log(fruit)
