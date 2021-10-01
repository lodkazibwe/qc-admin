export interface LoanTransaction {
    acctFrom: string,
    acctTo: string,
    amount: number,
    date: string,
    id: number,
    loanId: number,
    status: string,
    transactionType: string,
    userName: string
  }