class BankAccount {
  constructor(public holderName: string, public balance: number = 0) {}

  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number | string {
    if (0 < amount && amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      return "Insufficent fund";
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount("Bharath", 1000);

console.log(myAccount.getBalance());
console.log(myAccount.deposit(2000));
console.log(myAccount.getBalance());
console.log(myAccount.withdraw(2000));
console.log(myAccount.getBalance());
