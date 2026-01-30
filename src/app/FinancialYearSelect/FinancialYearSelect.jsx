import "./FinancialYearSelect.css";

const FinancialYearSelect = () => (
    <div className="financial-year-card">
        <p className="financial-year-label">Select Financial Year</p>
        <div className="financial-year-buttons">
            <button className="financial-year-button is-active" type="button">
                FY 2023-24
            </button>
            <button className="financial-year-button" type="button">
                FY 2024-25
            </button>
        </div>
    </div>
);

export default FinancialYearSelect;