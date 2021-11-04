import { React, useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { arrayDiscos } from "../Item/arrayDiscos.js"
import {useParams} from "react-router-dom"



export function ItemDetailContainer() {

  const [item, setItem] = useState('')
  const {id} = useParams()



  useEffect(() => {

    const task = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(arrayDiscos)
      }, 2000)

    })

    task.then(
      (result) => {

        setItem(result.find((disco) => disco.id == id ))

      }

    )
      .catch((err) => {

        console.log(err)

      })

  }, [id])


  return (
    <div>
      {
        item ? (
          <ItemDetail
            name={item.name}
            band={item.band}
            price={item.price}
            photo={item.photo}
            genre={item.genre}
            description={item.description}
          />
        ) : <h1>Cargando...</h1>

      }
    </div>
  )
}

