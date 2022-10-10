import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import CostList from './components/CostList'
import ButtonNewCost from './img/nuevo-gasto.svg'
import { generarId } from './helpers'

function App() {
  
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [costs, setCosts] = useState([])
  const [animateModal, setAnimateModal] = useState(false)

  const handleNewCost = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveCost = (cost) => {
    cost.id = generarId()
    cost.date = Date.now()
    setCosts([...costs, cost])

    setAnimateModal(false) 
    
    setTimeout(()=>{
      setModal(false)
    }, 500)
  }

  return (
    <div className={modal && 'fijar'}>  
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
        />
      }    
    </div>  
  )
}

export default App
