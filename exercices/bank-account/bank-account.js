//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  //Attributes
  accountBalance; //Account balance
  isClosed; //Is the account closed

  //Default constructor
  constructor() {
    isClosed = true;
    accountBalance = 0;
  }

  //Method to open the account if it's not already opened
  open() {
    if (isClosed) {
      accountBalance = 0;
      isClosed = false;
    } else {
      throw new ValueError();
    }
  }

  //Method to close the account if it's not already closed
  close() {
    if (!isClosed) {
      isClosed = true;
    } else {
      throw new ValueError();
    }
  }

  //Method to deposit money to the account
  deposit(amountToAdd) {
    if (!isClosed && Math.sign(amountToAdd) != -1) {
      accountBalance += amountToAdd;
    } else {
      throw new ValueError();
    }
  }

  //Method to withdraw money from the account
  withdraw(amountToWithdraw) {
    if (
      !isClosed &&
      accountBalance >= amountToWithdraw &&
      Math.sign(amountToWithdraw) != -1
    ) {
      accountBalance -= amountToWithdraw;
    } else {
      throw new ValueError();
    }
  }

  //Getter of balance
  get balance() {
    if (isClosed) throw new ValueError();
    else return accountBalance;
  }
}

//Custom error message
export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
