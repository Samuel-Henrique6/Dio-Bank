//Dio Bank
export abstract class Account {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number;
  private status: boolean = true;

  constructor(name: string, accountNumber: number, balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  getName = (): string => {
    return this.name;
  };

  deposit(value: number): void {
    try {
      if (this.validateStatus()) {
        this.balance += value;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  withdraw = (value: number): void => {
    try {
      if (this.validateStatus() && this.validadeSaldo(value)) {
        this.balance -= value;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  getBalance = (): number => this.balance;

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta inativa");
  };

  private validadeSaldo = (value: number): boolean => {
    if (value <= this.balance) {
      return true;
    }
    throw new Error("Saldo insuficiente!");
  };
}
