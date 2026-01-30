import "./Result.css";

const Result = () => (
    <div className="calculator-results">
        <h3 className="calculator-results-title">Results</h3>
        <div className="calculator-row">
            <span>Taxable Income:</span>
            <span>$85,000.00</span>
        </div>
        <div className="calculator-row">
            <span>Income Tax:</span>
            <span className="calculator-highlight">$15,850.00</span>
        </div>
        <div className="calculator-row calculator-row-total">
            <span>Net Income:</span>
            <span>$69,150.00</span>
        </div>
        <div className="calculator-row">
            <span>Effective Tax Rate:</span>
            <span>18.65%</span>
        </div>
    </div>
);

export default Result;
