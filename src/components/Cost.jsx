import React from 'react'
import { dateFormat } from '../helpers'
import { 
  LeadingActions, 
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import IconAhorro from '../img/icono_ahorro.svg'
import IconCasa from '../img/icono_casa.svg'
import IconComida from '../img/icono_comida.svg'
import IconGastos from '../img/icono_gastos.svg'
import IconOcio from '../img/icono_ocio.svg'
import IconSalud from '../img/icono_salud.svg'
import IconSuscripciones from '../img/icono_suscripciones.svg'

const iconList =  {
  savings: IconAhorro,
  food : IconComida,
  house : IconCasa,
  miscellaneous : IconGastos,
  entertainment : IconOcio,    
  health : IconSalud,
  subscription : IconSuscripciones
}

const Cost = ({costs, setEditCosts, deleteCost}) => {

  const { category, name, quantity, id, date } = costs

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditCosts(costs)}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
        onClick={() => deleteCost(id)}
        destructive={true}
      >
        Delete 
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions(leadingActions)}
        trailingActions={trailingActions(trailingActions)}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img 
              src={iconList[category]}
              alt="cost icon"
            />
            <div className='descripcion-gasto'>
              <p className='categoria'>{category}</p>
              <p className='nombre-gasto'>{name}</p> 
              <p className='fecha-gasto'>
                Added on:{' '}
                <span>{dateFormat(date)}</span>
              </p>                
            </div>        
          </div>
          <p className='cantidad-gasto'>${quantity}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Cost