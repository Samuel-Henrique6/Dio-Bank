import { BlackAccount } from "./class/BlackAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  17140897,
  "Vinicius",
  46743,
  5000
);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 29654, 0);

const blackAccount: BlackAccount = new BlackAccount("Samuel", 41235, 100000);

peopleAccount.deposit(40);
peopleAccount.withdraw(61);
console.log(
  `${peopleAccount.getName()}, seu saldo é de: ${peopleAccount.getBalance()}`
);

companyAccount.deposit(40);
companyAccount.withdraw(61);
companyAccount.getLoan(5000);
console.log(
  `${companyAccount.getName()}, seu saldo é de: ${companyAccount.getBalance()}`
);

blackAccount.deposit(51);
blackAccount.withdraw(61);
console.log(
  `${blackAccount.getName()}, seu saldo é de: ${blackAccount.getBalance()}`
);
