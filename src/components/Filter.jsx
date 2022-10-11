import { useState, useEffect} from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
          <label>Cost Filter</label>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="">--- All Categories ---</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="entertainment">Entertainment</option>      
            <option value="health">Health</option> 
            <option value="subscription">Subscription</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter