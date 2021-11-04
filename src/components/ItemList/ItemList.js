import {Item} from "../Item/Item.js"
import {useState, useEffect} from "react"
import {arrayDiscos} from "../Item/arrayDiscos.js"




 export const ItemList = () => {

  const [discos, setDiscos] = useState()

  useEffect( () => {

     const task = new Promise( (resolve, reject) => {

       setTimeout( () => {
         resolve(arrayDiscos)
       }, 2000)

     })

     task.then(
       (result) => {

         setDiscos(result)
        /*  console.log(result) */

       }

     )
     .catch( (err)=>{

        console.log(err)

     })

   }, [])


  return(

      <>
     {

      discos?.map( ({name, band, photo, price, id } ) =>

        <Item name={name} band={band} cover={photo} price={price} key={id}/>

     )
    }
     </>
     )
     }


