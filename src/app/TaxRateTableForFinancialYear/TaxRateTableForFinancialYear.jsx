import "./TaxRateTableForFinancialYear.css";
import Card from "../../components/Card";
import { TAX_TABLES } from "../../common/data";

const TaxRateTableForFinancialYear = ({ financialYear }) => {
    const formatIncomeRange = (min, max) => {
        const formattedMin = min.toLocaleString();

        if (max === Infinity) {
            return `$${formattedMin} and above`;
        }

        const formattedMax = max.toLocaleString();
        return `$${formattedMin} - $${formattedMax}`;
    };

    const formatTaxRate = (rate) => {
        return rate === 0 ? 'Nil' : `${Math.round(rate * 100)}%`;
    };

    const formatFinancialYear = (financialYear) => {
        const [prefix, startYear, endYear] = financialYear.split('_');
        return `${prefix} ${startYear}-${endYear}`;
    };

    return (
        <Card>
            <div>
                <h2 className="tax-title">Tax Rates - {formatFinancialYear(financialYear)}</h2>
                <div className="tax-table-wrapper">
                    <table className="tax-table">
                        <thead>
                            <tr>
                                <th>Taxable Income</th>
                                <th>Tax Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TAX_TABLES[financialYear].map(({ min, max, rate }, index) => (
                                <tr key={index}>
                                    <td>{formatIncomeRange(min, max)}</td>
                                    <td>{formatTaxRate(rate)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Card>
    )
};

export default TaxRateTableForFinancialYear;