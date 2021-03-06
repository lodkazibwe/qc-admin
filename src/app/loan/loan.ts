export interface Loan{
    applicationDate: string,
    approvedBy: string,
    borrower: string,
    disbursedBy: string,
    duration: number,
    durationWeeks: number,
    earlyTopUpCharge: number,
    expressHandling: number,
    firstRepaymentDate: string,
    handlingCharge: number,
    handlingMode: string,
    id: number,
    insuranceFee: number,
    interest: number,
    loanNumber: string,
    penalty: number,
    preparedBy: string,
    principal: number,
    productId: number,
    releaseDate: string,
    remarks: string,
    repaymentCycle: string,
    repaymentMode: string,
    status: string,
    topUpLoanBalance: number,
    topUpLoanId: number,
    topUpMode: string,
    totalDue: number,
    totalPaid: number,
    transferCharge: number,
    securityDto: {
        description: string,
        file: string,
        guarantor: string,
        id: number
    }
    
}