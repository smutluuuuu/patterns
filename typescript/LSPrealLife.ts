// Payment Processor

// Credit Card

// Debit Card

// PayPal

//LSP - Liskov Substitution Principle

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Credit Card Payments -- Amount $${amount}`);
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Debit Card Payments -- Amount $${amount}`);
  }
}

class PaypalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Paypal Payments -- Amount $${amount}`);
    this.processReceipt(amount);
  }

  processReceipt(amount:number):void{
    console.log(`Amount you declared has paid this is the receipt. $${amount}`);
  }
}

function executePayment(paymentProcessor: PaymentProcessor, amount: number): void {
  paymentProcessor.processPayment(amount);
}


let creditcardprocessor = new CreditCardProcessor();
let debitcardprocessor = new DebitCardProcessor();
let paypalProcessor = new PaypalProcessor();



executePayment(creditcardprocessor,35);
executePayment(debitcardprocessor,500);
executePayment(paypalProcessor,1250);

