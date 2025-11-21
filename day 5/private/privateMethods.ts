class BankAccount {
  private balance: number;
  accountNumber: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  private addInterest(interestRate: number): void {
    this.balance += this.balance * interestRate;
  }

  addYearlyInterest(): void {
    this.addInterest(0.02); // Adds 2% interest
  }

  getBalance(): number {
    return this.balance;
  }
}

const bankAccount = new BankAccount(1234, 100);
bankAccount.addYearlyInterest(); // Works, calling a public method
console.log(bankAccount.getBalance()); // Logs the updated balance
// bankAccount.addInterest(0.1);  // Error: can't call a private method from outside
