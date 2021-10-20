
import {useState, useEffect} from 'react'
export const ItemCount = (props) =>{


  const [quantity, setQuantity] = useState(props.initial);
  const [disabled, setDisabled] = useState(false)

  const addItem = () =>{

    setQuantity(quantity + 1)
  }

 const restItem = () =>{

   if (quantity > 0) setQuantity(quantity - 1)

 }

useEffect( () => {
  if (quantity > props.stock || quantity === 0) {
    setDisabled(true)
  } else {
    setDisabled(false)
  }
}, [disabled, quantity, props.stock])

  return (
    <div className = "itemsCounterCard">
      <h2 className="itemName">
        {props.name}
      </h2>
      <p className="stock"> Stock {props.stock} </p>
      <div className="theButtons">
         <span className="add" onClick = {addItem}>+</span> {quantity} <span className="rest" onClick={restItem}>-</span>
      </div>
      <button onClick= {() => props.onAdd(quantity, props.stock)} disabled={disabled}> Agregar al carrito </button>
    </div>
  )
}

