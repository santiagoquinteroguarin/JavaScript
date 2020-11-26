// ?class declaration
class Client {

    // ?constructor method
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }

    // ?getters and setters
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setMoney(money) {
        this.money = money;
    }

    getMoney() {
        return this.money;
    }

    // ?methods
    printData() {
        return `Cliente: ${this.getName()}, tu money es: ${this.getMoney()}`;
    }

    // ?static properties
    static welcome() {
        return `Welcome To ATM`;
    }
}

// ?Class inheritance
class Company extends Client {

    // ?private properties
    #category;

    constructor(name, money, phone, category) {
        super(name, money);
        this.phone = phone;
        this.#category = category;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }   

    setCategory(category) {
        this.#category = category;
    }

    getCategory() {
        return this.#category;
    }

    infoCompany() {
        return `Company: ${this.getName()}, Category: ${this.getCategory()}, and the contact is: ${this.getPhone()}`;
    }

    // ?static properties
    static welcome() {
        return `Welcome To ATM of Companies`;
    } 
}

const santiago = new Client();
const sugarCompany = new Company();


santiago.setName('Santiago');
santiago.setMoney(5000);

sugarCompany.setName('Sugar Company');
sugarCompany.setPhone(123456789);
sugarCompany.setMoney(20000000);
sugarCompany.setCategory('Candies');

console.log(Company.welcome());
console.log(sugarCompany.infoCompany())

console.log(Client.welcome());
console.log(santiago.printData());
