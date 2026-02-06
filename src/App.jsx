//import { useState } from 'react'
import './App.css'
import Calculator from "./app/Calculator";
import Disclaimer from "./app/Disclaimer";
import FinancialYearSelect from "./app/FinancialYearSelect";
import Header from "./app/Header";
import TaxRateTableForFinancialYear from "./app/TaxRateTableForFinancialYear";
import { useState } from 'react';

function App() {
  const [financialYear, setFinancialYear] = useState("FY_2023_24");
  return (
    <div className="page">
      <div className="page-container">
        <Header />
        <FinancialYearSelect financialYear={financialYear} onFinancialYearChange={setFinancialYear} />
        <div className="main-grid">
          <TaxRateTableForFinancialYear financialYear={financialYear} />
          <Calculator financialYear={financialYear} />
        </div>
        <Disclaimer />
      </div>
    </div>
  )
}

export default App
