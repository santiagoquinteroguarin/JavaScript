// ? empezando con jest
// un grupo de pruebas, sino quieres crear varios archivos para pruebas, creas un grupo 
describe('grupo de pruebas', () => {
    // first test - recibe un callback
    test('Hola Mundo!' ,() => {});
    // second test - recibe un callback
    it('Esta es otra forma de hacer un test', () => {});
});


//? pruebas para strings
const password = "123456";
describe('grupo de pruebas para strings, validar la longitud de password', () => {
    test('validar longitud', () => {
        expect(password).toHaveLength(6);
    });
    
    test('password no vacio', () => {
        expect(password).not.toHaveLength(0);
    });
});

// ? pruebas para arrays
const carrito = ['product1','product2','product3'];
describe('testing al carrito de compras', () => {
    test('probar que el arrays tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    })
    
    test('varificar que el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0);
    })
});

// ? pruebas para objetos
const cliente = {
    name: 'Santiago',
    dinero: 500,
}

describe('Testing al cliente', () => {
    test('El cliente es premium, si un valor es mayor', () => {
        expect(cliente.dinero).toBeGreaterThan(400);
    })
    
    test('es Santiago', () => {
        expect(cliente.name).toBe('Santiago');
    });
    
    test('No, es otro cliente', () => {
        expect(cliente.name).not.toBe('Camilo')
    });
    
    test('No tiene 400', () => {
        expect(cliente.dinero).not.toBe(400)
    });
    
});

// ? pruebas para funciones
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

describe('Testing a funciones', () => {
    test('suma de 20 y 30', () => {
        expect(suma(20,30)).toBe(50);
    });
    
    test('resta de 50 y 20', () => {
        expect(resta(50,20)).toBe(30)
    });

    test('que la suma de 20 y 20, no sea 10', () => {
        expect(suma(20,20)).not.toBe(10);
    });

    test('que la resta de 5 y 20, no sea 30', () => {
        expect(resta(5,20)).not.toBe(35)
    });
    
});

// ? Snapshots - almacena una data como una bd y empieza a realizar pruebas con esta data
// para actualizar un snapshot npm test -- -u
const persona = {
    name: 'Santiago',
    balance: 400,
    type: 'premium',
}

describe('testing a persona', () => {
    test('Es Santiago', () => {
        expect(persona).toMatchSnapshot();
    });
    
});

// ? importar funciones, clases etc.. para hacer pruebas - para utilizar esto debemos instalar babel
// ? crear archivo .babelrc en la raiz y instalar la dependencia de desarrollo  npm i --save-dev @babel/preset-env
import { multi } from '../js/app.js';

describe('testing a la funcion multiplicar', () => {
    test('validacion de multiplicación 5 * 5 = 25', () => {
        expect(multi(5,5)).toBe(25);
    })
});






