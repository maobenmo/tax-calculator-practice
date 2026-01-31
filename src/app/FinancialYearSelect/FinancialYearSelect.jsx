import "./FinancialYearSelect.css";
import Card from "../../components/Card";
import Button from "../../components/Button";

const FinancialYearSelect = ({ financialYear, setFinancialYear }) => {


    // state lifting
    // 我们将 state 提升到可以给多个组件复用的最小父组件App里
    //const state=useState();
    //const value=state[0];
    //const setValue=state[1];

    return (
        <div className="financial-year-container">
            <Card>
                <p className="financial-year-label">Select Financial Year</p>
                <div className="financial-year-buttons">
                    <Button onClick={() => { setFinancialYear("FY23-24") }} color={financialYear === "FY23-24" ? "primary" : "muted"}>
                        FY 2023-24
                    </Button>
                    <Button onClick={() => { setFinancialYear("FY24-25") }} color={financialYear === "FY24-25" ? "primary" : "muted"}>
                        FY 2024-25
                    </Button>
                </div>
            </Card >
        </div>

    )
};
export default FinancialYearSelect;