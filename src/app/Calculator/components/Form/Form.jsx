import "./Form.css";
import Button from "../../../../components/Button";

const Form = () => (
    <form className="calculator-form">
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
                />
            </div>
        </div>

        <Button color="primary">
            Calculate Tax
        </Button>
    </form>
);

export default Form;