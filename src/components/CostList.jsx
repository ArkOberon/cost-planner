import React from 'react'
import Cost from './Cost'

const CostList = ({ costs }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{costs.length ? "Cost List" : "Please, insert your costs"}</h2>

      {costs.map( cost => (
        <Cost 
          key={cost.id}
          costs={cost}
        />
      ))}

    </div>
  )
}

export default CostList