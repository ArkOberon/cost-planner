import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ButtonNewCost from './img/nuevo-gasto.svg'

function App() {
  
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)

  const [animateModal, setAnimateModal] = useState(false)

  const handleNewCost = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveCost = (cost) => {
    console.log(cost)
  }

  return (
    <>  
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />      

      {isValidBudget && (
        <div className='nuevo-gasto'>
          <img 
            src={ButtonNewCost} 
            alt="icon button"
            onClick={handleNewCost}
          />
        </div>
      )} 

      {modal && 
        <Modal 
          setModal={setModal} 
          animateModal={animateModal} 
          setAnimateModal={setAnimateModal}
          saveCost={saveCost}
        />
      }    
    </>  
  )
}

export default App
