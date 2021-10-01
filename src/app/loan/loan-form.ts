export interface LoanForm{
    borrower: string,
    description: string,
    duration: number,
    durationWeeks: number,
    file: string,
    firstRepaymentDate: string,
    guarantor: string,
    principal: number,
    
    productId: number,
    remarks: string,
    repaymentCycle: string,
    
}
/*


product: "product.id"
remarks: "salary loan"
repaymentCycle: "DAILY"
*/