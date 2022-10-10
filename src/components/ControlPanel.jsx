import { useEffect } from "react"

const ControlPanel = ({ budget, costs }) => {

  useEffect(() => {
    console.log("gastos")
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
          <span>Disponible:</span> {formatQuantity(0)}
        </p>

        <p>
          <span>Gastado:</span> {formatQuantity(0)}
        </p>

      </div>
    </div>
  )
}

export default ControlPanel