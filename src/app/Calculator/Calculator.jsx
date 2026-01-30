import "./Calculator.css";
import Form from "./components/Form";
import Result from "./components/Result/Result";


const Calculator = () => (
    <div className="calculator-card">
        <h2 className="calculator-title">Calculate Tax</h2>
        <Form />
        <Result />
    </div>
);

export default Calculator;