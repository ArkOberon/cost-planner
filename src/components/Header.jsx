import NewBudget from "./NewBudget"
import ControlPanel from "./ControlPanel"

const Header = ( { 
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget,
  costs,
  setCosts
}) => {
  return (
    <header>
      <h1>Cost Planner APP</h1>

      {isValidBudget ? 
      
        <ControlPanel 
          setCosts={setCosts}
          setBudget={setBudget}
          costs={costs}
          budget={budget}
          setIsValidBudget={setIsValidBudget}
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