class PaymentMethod{
    pay(amount){
        throw new Error("you should immplement this payment motodh here "); 
    }
}

class CreditCard extends PaymentMethod {
    constructor(cardNum, cvv)
    {
        super()
        this.cardNum = cardNum; 
        this.cvv = cvv; 
    }
    

    pay(amount)
    {
        console.log(`payinng ${amount} , by credit card `);
    }

}

class PayPal extends PaymentMethod 
{
    constructor(email,password)
    {
        super()
        this.email=email; 
        this.password=password;
    }

    pay(amount)
    {
        console.log(`payinng ${amount} , by paypal `);
    }
}

class Bitcoint extends PaymentMethod 
{
    constructor(walletId)
    {
        super()
        this.walletId = walletId; 
    }
    pay(amount)
    {
        console.log(`payinng ${amount} , by Bitcoin `);
    }
}
class Checkout{
    constructor()
    {
        this.payment= null; 
    }
    setPayment(str)
    {
        this.payment = str ; 
    }
    pay(amount)
    {
        this.payment.pay(amount);
    }
}

let credit = new CreditCard("32445542234423","777"); 
let paypal = new PayPal("mohamed@gmail.com","pass"); 
let bitcoin = new Bitcoint("fdds#25kfj234lk09324dkfnasd"); 

let checkout = new Checkout(); 

checkout.setPayment(credit); 
checkout.pay(100); 

checkout.setPayment(paypal);
checkout.pay(200);

checkout.setPayment(bitcoin); 
checkout.pay(300); 