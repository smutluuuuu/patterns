// BankAccount
// Depositing
// Withdrawing
// Balance -- hidden-encapsulated
// bank.balance = 200

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public get balance(): number {
    return this._balance;
  }

  //Method Deposit Money
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this._balance += amount;
  }

  //Mothod to withdraw money
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    } else if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }
    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);

myAccount.deposit(500);
myAccount.withdraw(300);

console.log(myAccount.balance);
