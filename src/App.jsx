//import { useState } from 'react'
import './App.css'
import Calculator from "./app/Calculator";
import Disclaimer from "./app/Disclaimer";
import FinancialYearSelect from "./app/FinancialYearSelect";
import Header from "./app/Header";
import TaxRateTableForFinancialYear from "./app/TaxRateTableForFinancialYear";

function App() {

  return (
    <div className="page">
      <div className="page-container">
        <Header />
        <FinancialYearSelect />
        <div className="main-grid">
          <TaxRateTableForFinancialYear />
          <Calculator />
        </div>
        <Disclaimer />
      </div>
    </div>
  )
}

export default App
