import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({ 
    initialInvestment: 10000, 
    annualInvestment: 1200, 
    expectedReturn: 6, 
    durantion: 10, 
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: newValue,
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChage={handleChange} userInput={userInput}/>
    </>
  )
}

export default App
