class BankAccount {
  constructor(accountType, initialAmount) {
    this.accountType = accountType;
    this.balance = initialAmount;
  }

  deposit(amount) {
    this.balance += amount;
  }

  widthdraw(amount) {
    this.balance -= amount;
  }
}

const bankAcct = new BankAccount("Checking", 500);
console.log(
  `Initial ${bankAcct.accountType} account Balance: ${bankAcct.balance}`
);

bankAcct.deposit(100);
bankAcct.widthdraw(50);

console.log(`New ${bankAcct.accountType} account Balance: ${bankAcct.balance}`);
