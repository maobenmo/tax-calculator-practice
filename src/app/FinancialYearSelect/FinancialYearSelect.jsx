import "./FinancialYearSelect.css";
import Card from "../../components/Card";
const FinancialYearSelect = () => (
    <div className="financial-year-container">
    <Card content={
        <div>
            <p className="financial-year-label">Select Financial Year</p>
            <div className="financial-year-buttons">
                <button className="financial-year-button is-active" type="button">
                    FY 2023-24
                </button>
                <button className="financial-year-button" type="button">
                    FY 2024-25
                </button>
            </div>
        </div>}
    />
    </div>
);

export default FinancialYearSelect;