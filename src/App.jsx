import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import CostList from './components/CostList'
import ButtonNewCost from './img/nuevo-gasto.svg'
import { generarId } from './helpers'

function App() {  
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [costs, setCosts] = useState([])
  const [editCosts, setEditCosts] = useState({})

  useEffect(() => {
    if(Object.keys(editCosts).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }
  }, [editCosts])
  
  const handleNewCost = () => {
    setModal(true)
    setEditCosts({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveCost = (cost) => {

    if(cost.id) {
      const updateCost = costs.map((costState) => costState.id === cost.id ? cost : costState)
      setCosts(updateCost)
    } else {
      cost.id = generarId()
      cost.date = Date.now()
      setCosts([...costs, cost])
    }    

    setAnimateModal(false)

    setTimeout(()=>{
      setModal(false)
    }, 500)
  }

  const deleteCost = id => {
    const updateCostList = costs.filter(cost => cost.id !== id)
    setCosts(updateCostList)
  }

  return (
    <div className={modal ? 'fijar' : ''}>  
      <Header 
        costs={costs}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />      

      {isValidBudget && (
        <>
          <main>
            <CostList
              costs={costs}
              setEditCosts={setEditCosts}
              deleteCost={deleteCost}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={ButtonNewCost} 
              alt="icon button"
              onClick={handleNewCost}
            />
          </div>
        </>        
      )} 

      {modal && 
        <Modal 
          setModal={setModal} 
          animateModal={animateModal} 
          setAnimateModal={setAnimateModal}
          saveCost={saveCost}
          editCosts={editCosts}
        />
      }    
    </div>  
  )
}

export default App
