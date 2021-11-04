import {Item} from "../Item/Item.js"
import {useState, useEffect} from "react"
import {arrayDiscos} from "../Item/arrayDiscos.js"
import {NavLink, useParams} from "react-router-dom"




 export const ItemList = () => {
  const {name} = useParams()
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

        <NavLink to={`/item/${id}`} activeStyle={{ textDecoration: "none", color: "lightblue" }} ><Item name={name} band={band} cover={photo} price={price} key={id} /></NavLink>

     )
    }
     </>
     )
     }


