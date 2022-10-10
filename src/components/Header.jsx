import NewBudget from "./NewBudget"
import ControlPanel from "./ControlPanel"

const Header = ( { 
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget,
  costs
}) => {
  return (
    <header>
      <h1>Cost Planner APP</h1>

      {isValidBudget ? 
      
        <ControlPanel 
          costs={costs}
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