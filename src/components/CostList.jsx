import React from 'react'
import Cost from './Cost'

const CostList = ({ costs, setEditCosts, deleteCost, filter, costFilter }) => {
  return (
    <div className='listado-gastos contenedor'>
      {
        filter ? (
          <>
            <h2>{costFilter.length ? "Cost List" : "Please, insert your costs"}</h2>
            {costFilter.map(cost => (
                <Cost 
                  key={cost.id}
                  costs={cost}
                  setEditCosts={setEditCosts}
                  deleteCost={deleteCost}
                />
              )
            )}
          </>
        ) : (
          <>
            <h2>{costs.length ? "Cost List" : "Please, insert your costs"}</h2>
            {costs.map( cost => (
                <Cost 
                  key={cost.id}
                  costs={cost}
                  setEditCosts={setEditCosts}
                  deleteCost={deleteCost}
                />
              )
            )}
          </> 
        )          
      }
    </div>
  )
}

export default CostList