import NewBudget from "./NewBudget"
import ControlPanel from "./ControlPanel"

const Header = ( { 
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget 
}) => {
  return (
    <header>
      <h1>Cost Planner APP</h1>

      {isValidBudget ? 
      
        <ControlPanel 
          budget={budget}
        />
      
      :
        <NewBudget 
          budget={budget}
          setBudget={setBudget}    
          setIsValidBudget={setIsValidBudget} 
        />
      }      
    </header>
  )
}

export default Header