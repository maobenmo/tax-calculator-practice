import "./FinancialYearSelect.css";
import Card from "../../components/Card";
import Button from "../../components/Button";
const FinancialYearSelect = ({ financialYear, onFinancialYearChange }) => {
    const setSelectedFY = (year) => {
        onFinancialYearChange(year);
    };
    return (
        <div className="financial-year-container">
            <Card>
                <p className="financial-year-label">Select Financial Year</p>
                <div className="financial-year-buttons">
                    <Button color={financialYear === "FY_2023_24" ? "primary" : "muted"}
                        onClick={() => setSelectedFY("FY_2023_24")}>
                        FY 2023-24
                    </Button>
                    <Button color={financialYear === "FY_2024_25" ? "primary" : "muted"}
                        onClick={() => setSelectedFY("FY_2024_25")}>
                        FY 2024-25
                    </Button>
                </div>
            </Card >
        </div>

    )
};

export default FinancialYearSelect;