import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Modal from './components/Modal'
import CostList from './components/CostList'
import ButtonNewCost from './img/nuevo-gasto.svg'
import { generarId } from './helpers'

function App() {  
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('Budget')) ?? 0
  )
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [costs, setCosts] = useState(
    localStorage.getItem('Cost') ? JSON.parse(localStorage.getItem('Cost')) : []
  )
  const [editCosts, setEditCosts] = useState({})

  const [filter, setFilter] = useState('')
  const [costFilter, setCostFilter] = useState([])

  useEffect(() => {
    if(Object.keys(editCosts).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }
  }, [editCosts])

  useEffect(() => {    
    localStorage.setItem('Budget', budget ?? 0)
  },[budget])

  useEffect(() => {
    localStorage.setItem('Cost', JSON.stringify(costs) ?? [])
  },[costs])

  useEffect(() => {
    if(filter) {
      const costsFilter = costs.filter( costs => costs.category === filter)
      setCostFilter(costsFilter)
    }
  }, [filter])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('Budget')) ?? 0

    if(budgetLS > 0) {
      setIsValidBudget(true)
    }
  },[])
  
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
      setEditCosts({})
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
        setCosts={setCosts}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}        
      />      

      {isValidBudget && (
        <>
          <main>
            <Filter 
              filter={filter}
              setFilter={setFilter}            
            />
            <CostList
              costs={costs}
              setEditCosts={setEditCosts}
              deleteCost={deleteCost}
              filter={filter}
              costFilter={costFilter}
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
          setEditCosts={setEditCosts}
        />
      }    
    </div>  
  )
}

export default App
