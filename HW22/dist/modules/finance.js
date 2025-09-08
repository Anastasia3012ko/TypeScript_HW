export var Finance;
(function (Finance) {
    class LoanCalculator {
        principal;
        annualRate;
        years;
        constructor(principal, annualRate, years) {
            this.principal = principal;
            this.annualRate = annualRate;
            this.years = years;
        }
        calculateMonthlyPayment() {
            const monthlyRate = this.annualRate / 12 / 100;
            const months = this.years * 12;
            if (monthlyRate === 0) {
                return this.principal / months;
            }
            return (this.principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        income;
        taxRate;
        constructor(income, taxRate) {
            this.income = income;
            this.taxRate = taxRate;
        }
        calculateTax() {
            return (this.income * this.taxRate) / 100;
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (Finance = {}));
//# sourceMappingURL=finance.js.map