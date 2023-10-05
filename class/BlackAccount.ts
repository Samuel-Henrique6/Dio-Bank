import { Account } from "./Account";

export class BlackAccount extends Account {
  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  deposit = (value: number): void => {
    try {
      const depositValue = value + 10;
      super.deposit(depositValue);
    } catch (error: any) {
      console.log(error.message);
    }
  };
}
