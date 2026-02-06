import "./Form.css";
import Button from "../../../../components/Button";
import { useState } from "react";


const Form = ({ onTaxableIncomeChange }) => {
    const [incomeInput, setIncomeInput] = useState("")
    return (
        <form onSubmit={(e) => { e.preventDefault(); }} className="calculator-form">

            <div className="calculator-field">
                <label className="calculator-label">Annual Taxable Income</label>
                <div className="calculator-input-wrap">
                    <span className="calculator-currency">$</span>
                    <input
                        className="calculator-input"
                        type="number"
                        placeholder="Enter your income"
                        value={incomeInput}
                        min="0"
                        step="0.01"
                        onChange={(e) => setIncomeInput(e.target.value)}
                    />
                </div>
            </div>

            <Button color="primary" onClick={() => onTaxableIncomeChange(incomeInput)} >
                Calculate Tax
            </Button>
        </form >
    )
};

export default Form;