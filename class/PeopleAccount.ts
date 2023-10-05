import { Account } from "./Account";

export class PeopleAccount extends Account {
  doc_id: number;

  constructor(
    doc_id: number,
    name: string,
    accountNumber: number,
    balance: number
  ) {
    super(name, accountNumber, balance);
    this.doc_id = doc_id;
  }
}
