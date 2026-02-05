import "./Form.css";
import Button from "../../../../components/Button";
import { useState } from "react";

//state lifting 是一定会带着好的代码写三遍一起出现的: 组件的 props 应该描述组件的行为，而不受其调用者影响
//setIncome其实是onSubmit，至于submit之后干什么，Form这里一概不知，那是调用者的事
const Form = ({ onSubmit }) => {
    const [value, setValue] = useState();
    //const [income, setIncome] = useState();//需要state lifting，需要把income传递给Result组件

    return (
        <form
            onSubmit={(e) => { e.preventDefault(); onSubmit(value); }} className="calculator-form">
            <div className="calculator-field">
                <label className="calculator-label">Annual Taxable Income</label>
                <div className="calculator-input-wrap">
                    <span className="calculator-currency">$</span>
                    <input
                        className="calculator-input"
                        type="number"
                        placeholder="Enter your income"
                        min="0"
                        step="0.01"
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
            </div>

            <Button color="primary">
                Calculate Tax
            </Button>
        </form>
    )
};

export default Form;