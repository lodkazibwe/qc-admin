export interface DueLoan {
    borrower: string,
    due: number,
    interest: number,
    lastDueDate: string,
    loanId: number,
    nextDue: number,
    nextDueDate: string,
    penalty: number,
    principal: number,
    product: string,
    repaymentMode: string,
    totalBalance: number,
    totalPaid: number

}