class Store {
    constructor() {
        this.customers = [];
        this.products = [];

    }
    addProduct(product) {
        this.products.push(product);
        this.notifyCoustomers(product);
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    notifyCoustomers(product) {
        this.customers.forEach(customer => customer.notify(product));
    }
}

class Customer {
    constructor(name, contactMethod, contactInfo) {
        this.name = name;
        this.contactMethod = contactMethod;
        this.contactInfo = contactInfo
    }
    notify(product) {
        let msg = `here ${this.name} there is  a new product add to the store :${product.name}`
        if (this.contactMethod == 'sms') {
            this.sendSMS(msg);
        }
        else if(this.contactMethod = 'email')
            {
                this.sendEmail(msg);
            }
    }

    sendSMS(msg)
    {
        console.log(`sending the message to ${this.contactInfo} : ${msg}`);
    }

    sendEmail(msg)
    {
        console.log(`sending email to ${this.contactInfo} : ${msg}`);
    }
}

let store = new Store(); 
let cus1 = new Customer("mohamed","email","mohamed@gmail.com");
let cus2 = new Customer("ahmed","email","ahmed@gmail.com");
let cus3 = new Customer("mohran","email","mohran@gmail.com");
let cus4 = new Customer("mohamed","sms","0101111111111");
let cus5 = new Customer("ail","sms","011000000000000");

store.addCustomer(cus1);
store.addCustomer(cus2);
store.addCustomer(cus3);
store.addCustomer(cus4);
store.addCustomer(cus5);

store.addProduct({name:"new iphone"})
// store.addProduct({name:"new laptop"})
// store.addProduct({name:"new PC"})
// store.addProduct({name:"new TV"})


