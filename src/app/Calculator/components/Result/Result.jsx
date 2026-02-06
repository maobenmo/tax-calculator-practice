import "./Result.css";
import { TAX_TABLES } from "../../../../common/data";

const calculateTax = (taxTable, income) => {
    const bracket = taxTable.find(
        ({ min, max }) => income >= min && income <= max
    );

    if (!bracket) {
        return undefined;
    }

    const tax = bracket.base + (income - bracket.min) * bracket.rate;

    return tax;
};


const Result = ({ financialYear, taxableIncome }) => {
    const tax = calculateTax(TAX_TABLES[financialYear], taxableIncome);
    //console.log(tax);
    if (tax === undefined) {
        return null;
    }

    const netIncome = taxableIncome - tax;
    const effectiveTaxRate = (tax / taxableIncome) * 100;
    return (
        <div className="calculator-results">
            <h3 className="calculator-results-title">Results</h3>
            <div className="calculator-row">
                <span>Taxable Income:</span>
                <span>{Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(taxableIncome)}</span>
            </div>
            <div className="calculator-row">
                <span>Income Tax:</span>
                <span className="calculator-highlight">{Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(tax)}</span>
            </div>
            <div className="calculator-row calculator-row-total">
                <span>Net Income:</span>
                <span>{Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(netIncome)}</span>
            </div>
            <div className="calculator-row">
                <span>Effective Tax Rate:</span>
                <span>{effectiveTaxRate.toFixed(2)}%</span>
            </div>
        </div>
    )
};

export default Result;
