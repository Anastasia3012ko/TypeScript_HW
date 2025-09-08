export namespace Finance {
  export class LoanCalculator {
    constructor(
      public principal: number,
      public annualRate: number,
      public years: number
    ) {}

    calculateMonthlyPayment(): number {
      const monthlyRate = this.annualRate / 12 / 100;
      const months = this.years * 12;

      if (monthlyRate === 0) {
        return this.principal / months;
      }

      return (this.principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      
    }
  }

  export class TaxCalculator {

    constructor(public income: number, public taxRate: number) {}

    calculateTax(): number {
      return (this.income * this.taxRate) / 100;
    }
  }

}
