import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPanel = ({ budget, costs, setCosts, setBudget, setIsValidBudget }) => {

  const [percent, setPercent] = useState(0)
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)
  

  useEffect(() => {
    const totalCosts = costs.reduce( (total, cost) => cost.quantity + total, 0)
    
    const totalAvailable = budget - totalCosts

    const newPercent = (((budget - totalAvailable)/budget) * 100).toFixed(2)
    
    setSpent(totalCosts)
    setAvailable(totalAvailable)
    setTimeout(() => {
      setPercent(newPercent)
    }, 1500)
  
  },[costs])

  const formatQuantity = (quantity) => {
    return quantity.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const handleResetApp = () => {
    const resetAll = confirm('Are you sure reset all app?')

    if(resetAll) {
      setCosts([])
      setBudget(0)
      setIsValidBudget(false)
    } 
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          styles={buildStyles({
            pathColor: percent > 100 ? 'red' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percent > 100 ? 'red' : '#3B82F6'
          })}
          value={percent} 
          text={`${percent}% Expended`}         
        />          
      </div>
      <div className="contenido-presupuesto">
        <button 
          className='reset-app' 
          type='button'
          onClick={handleResetApp}
        > 
          Reset App
        </button>
        <p>
          <span>Presupuesto:</span> {formatQuantity(budget)}
        </p>

        <p className={`${available < 0 ? 'negativo' : ''}`}>
          <span>Disponible:</span> {formatQuantity(available)}
        </p>

        <p>
          <span>Gastado:</span> {formatQuantity(spent)}
        </p>

      </div>
    </div>
  )
}

export default ControlPanel