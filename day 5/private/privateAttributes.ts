class BankAccount {
  private balance: number;
  accountNumber: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const bankAccount = new BankAccount(1234, 100);
console.log(bankAccount.getBalance()); // Works: logs 100
// console.log(bankAccount.balance);  // Error: can't access private attribute from outside
