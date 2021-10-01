export interface Client {
    id: number;
    userName: string;
    status: string;

        accountDto:{
            id:	number;
            memberNo:	string;
            pendingFee:	number;
            position:	string;
            totalSavings:	number;
            totalShares:	number;
        }

        bankDto:{
            accountName:	string;
            accountNumber:	string;
            branch:	string;
            id:	number;
            name:	string
        }

        personDto:{
            dob:	string
            email:	string
            firstName:	string
            gender:	string
            id:	number
            lastName:	string
            mobile:	string
            nin:	string
            residence:	string
        }

        workDto:{
            basicSalary:	number
            companyName:	string
            employeeId:	string
            id:	number
            job: string
            payrollSaving:	number
            payrollShares:	number
            toe:	string
        }
        
        
  }