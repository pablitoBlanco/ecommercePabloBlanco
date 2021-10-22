/* import {ItemCount} from '../ItemCount/ItemCount.js'
 */import "../ItemCount/ItemCount.css"
import {ItemList} from "../ItemList/ItemList.js"

export const ItemListContainer = (props) => {

  /* const onAdd = (stock, quantity) => {
    console.log(stock, quantity)
  } */

  return (

    <div className="itemsContainer">
      {/* <ItemCount name= "Form and function - Photek" stock= {10} initial= {1} onAdd={onAdd} /> */}
      <ItemList/>

    </div>

  )
}