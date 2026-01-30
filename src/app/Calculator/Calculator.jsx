import "./Calculator.css";
import Card from "../../components/Card";
import Form from "./components/Form";
import Result from "./components/Result/Result";


const Calculator = () => (
    <Card
        content={
            <div>
                <h2 className="calculator-title">Calculate Tax</h2>
                <Form />
                <Result />
            </div>
        }
    />
);
// <div className="calculator-card">
//     <Card content="Calculator" />
//     <Form />
//     <Result />
// </div>


export default Calculator;