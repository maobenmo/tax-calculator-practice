import "./FinancialYearSelect.css";
import Card from "../../components/Card";
import Button from "../../components/Button";
const FinancialYearSelect = () => (
    <div className="financial-year-container">
        <Card>
            <p className="financial-year-label">Select Financial Year</p>
            <div className="financial-year-buttons">
                <Button color="primary">
                    FY 2023-24
                </Button>
                <Button color="muted">
                    FY 2024-25
                </Button>
            </div>
        </Card >
    </div>

);

export default FinancialYearSelect;