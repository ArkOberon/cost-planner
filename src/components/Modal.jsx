import { useState, useEffect } from 'react'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setAnimateModal, saveCost, editCosts, setEditCosts }) => {

  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState('')

  useEffect(()=>{
    if(Object.keys(editCosts).length > 0) {
      setName(editCosts.name)
      setQuantity(editCosts.quantity)
      setCategory(editCosts.category)      
      setId(editCosts.id)
      setDate(editCosts.date)
    }
  },[])

  const hideModal = () => {    
    setAnimateModal(false)
    setEditCosts({})
    
    setTimeout(()=>{
      setModal(false)
    }, 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([name, quantity, category].includes('')){
      setMessage('Please, fill all fields')

      setTimeout(() => {
        setMessage('')
      }, 500)

      return
    }   
    
    saveCost({ name, quantity, category, id, date })
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img 
          src={CloseBtn}          
          alt="button close modal"
          onClick={hideModal}
        />
      </div>
      <form 
        className={`formulario ${animateModal ? "animar" : ""}`}
        onSubmit={handleSubmit}
      >
        <legend>{editCosts.name ? "Edit Cost" : "Add New Cost"}</legend>

        {message && <Message tipo="error">{message}</Message>}

        <div className='campo'>
          <label htmlFor='name'>Cost Description</label>
          <input 
            id="name"
            type="text"
            placeholder="Describe your cost"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='quantity'>Quantity</label>
          <input 
            id="quantity"
            type="number"
            placeholder="Create a new category of cost"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))} 
          />
        </div>

        <div className='campo'>
          <label htmlFor='category'>Category</label>
          <select 
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">--- Select a Category --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="entertainment">Entertainment</option>      
            <option value="health">Health</option> 
            <option value="subscription">Subscription</option>                    
          </select>
        </div>

        <input 
          type="submit"
          value={editCosts.name ? "Save" : "Add Cost"}
        />
      </form>
    </div>
  )
}

export default Modal