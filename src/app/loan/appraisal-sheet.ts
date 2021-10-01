import {Loan} from './loan';
import {DueLoan} from './due-loan';
import { Client } from '../clients/client';

export interface AppraisalSheet {
    loanRequest: Loan,
    outstandingLoans: DueLoan[],
    userDto: Client

}