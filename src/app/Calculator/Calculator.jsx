import "./Calculator.css";
import Card from "../../components/Card";
import Form from "./components/Form";
import Result from "./components/Result/Result";
import { useState } from "react";

// 由于在 JSX 里面，作为组件的方法的调用不是一般的圆括号调用，那么如何传入参数呢？
// JSX 应该非常类似 HTML。那么我们写了这么久的 HTML 都没写过 content，那就说明 content 这个命名一定是有问题的


const Calculator = ({ financialYear }) => {
    const [income, setIncome] = useState();
    return (
        <Card>
            <h2 className="calculator-title">Calculate Tax</h2>
            <Form onSubmit={(value) => setIncome(value)} />
            <Result financialYear={financialYear} income={income} />
        </Card>)
};



export default Calculator;