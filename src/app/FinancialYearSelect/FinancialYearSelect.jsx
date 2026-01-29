import "./FinancialYearSelect.css";

const FinancialYearSelect = () => {
    return (
        <div className="financial-year-container">
            <p className="financial-year-label">Select Financial Year</p>
            <div className="financial-year-buttons">
                <button>FY10-19</button>
                <button>FY20-26</button>
            </div>
        </div>
    );
};

export default FinancialYearSelect;