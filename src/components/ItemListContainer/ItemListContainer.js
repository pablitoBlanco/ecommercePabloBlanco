import {ItemCount} from '../ItemCount/ItemCount.js'
import "../ItemCount/ItemCount.css"

export const ItemListContainer = (props) => {

  const onAdd = (stock, quantity) => {
    console.log(stock, quantity)
  }
  console.log(props)
  return (

    <div className="itemsContainer">
      <ItemCount name="Form and function - Photek" stock={10} initial= {1} onAdd={onAdd} />
    </div>

  )
}