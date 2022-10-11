import { useEffect, useState } from "react"

const ControlPanel = ({ budget, costs }) => {

  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const totalCosts = costs.reduce( (total, cost) => cost.quantity + total, 0)
    
    const totalAvailable = budget - totalCosts

    console.log(totalAvailable)

    setSpent(totalCosts)
    setAvailable(totalAvailable)
  
  },[costs])

  const formatQuantity = (quantity) => {
    return quantity.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gráfica</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatQuantity(budget)}
        </p>

        <p>
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