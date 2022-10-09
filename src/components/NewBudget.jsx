import { useState } from "react"
import Message from "./Message"

const NewBudget = ({ budget, setBudget }) => {

  const [message, setMessage] = useState("")

  const handleBudget = (e) => {
    e.preventDefault()

    if(!Number(budget) || Number(budget) < 0) {
      setMessage("No es un presupuesto valido")
    } else {
      console.log("Es valido")
    }

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Your Budget</label>
          <input 
            className="nuevo-presupuesto"
            type="text"
            placeholder="Add your budget" 
            value={budget}
            onChange={ (e) => setBudget(e.target.value) }         
          />
        </div>
        <input type="submit" value="Add" />

        {message && <Message tipo="error">{message}</Message>}

      </form>
    </div>
  )
}

export default NewBudget