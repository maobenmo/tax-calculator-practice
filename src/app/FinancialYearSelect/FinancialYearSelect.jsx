import "./FinancialYearSelect.css";
import Card from "../../components/Card";
import Button from "../../components/Button";


//state lifting 是一定会带着好的代码写三遍一起出现的，如：
// 组件的 props 应该描述组件的行为，而不受其调用者影响
// FinancialYearSelect.jsx里没办法强制要求 setFinancialYear 一定是 useState 的 setter，但是通过命名约定可以让代码更易读
//setFinancialYear其实是onFinancialYearClick，至于click之后干什么，FinancialYearSelect这里一概不知，那是调用者的事
//onFinancialYearClick是反向数据流，正向流是从父到子，反向流是从子到父，这里指子组件FinancialYearSelect通过调用onFinancialYearClick把数据传递给父组件App


const FinancialYearSelect = ({ financialYear, onFinancialYearClick }) => {


    // state lifting
    // 我们将 state 提升到可以给多个组件复用的最小父组件(即App）里
    //const state=useState();
    //const value=state[0];
    //const setValue=state[1];

    return (
        <div className="financial-year-container">
            <Card>
                <p className="financial-year-label">Select Financial Year</p>
                <div className="financial-year-buttons">
                    <Button onClick={() => { onFinancialYearClick("FY23-24") }} color={financialYear === "FY23-24" ? "primary" : "muted"}>
                        FY 2023-24
                    </Button>
                    <Button onClick={() => { onFinancialYearClick("FY24-25") }} color={financialYear === "FY24-25" ? "primary" : "muted"}>
                        FY 2024-25
                    </Button>
                </div>
            </Card >
        </div>

    )
};
export default FinancialYearSelect;