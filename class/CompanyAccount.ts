import { Account } from "./Account";

export class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  getLoan = (value: number): void => {
    try {
      this.deposit(value);
    } catch (error: any) {
      console.error(error.message);
    }
  };
}
