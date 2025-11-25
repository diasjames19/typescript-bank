import { DioAccounts } from "../DioAccounts";

export class PeopleAccount extends DioAccounts {
    doc_id: number;
    constructor(name:string, accountNumber:number, doc_id:number){
        super(name,accountNumber)
        this.doc_id = doc_id
    }
}