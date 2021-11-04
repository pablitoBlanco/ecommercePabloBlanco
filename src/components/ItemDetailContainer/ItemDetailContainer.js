import { React, useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { arrayDiscos } from "../Item/arrayDiscos.js"



export function ItemDetailContainer() {

  const [item, setItem] = useState('')


  useEffect(() => {

    const task = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(arrayDiscos)
      }, 2000)

    })

    task.then(
      (result) => {

        setItem(result.find((disco) => disco.id === 7 ))



      }

    )
      .catch((err) => {

        console.log(err)

      })

  }, [])


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

