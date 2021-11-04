import './ItemDetail.css'

 const ItemDetail = ({ name, band, photo, price, description, genre }) => {

  return (
    <div className="itemDetail">
      <div className="cover">
        <img src={photo} alt="cover" />
      </div>
      <div className="itemDescription">
      <ul className="listaDetail">
        <li><h2>Nombre: {name}</h2> </li>
        <li><h2>Banda: {band}</h2> </li>
        <li><h2>Precio: ${price}</h2> </li>
          <li><h2>Género: {genre}</h2></li>
      </ul>
        <div className="description">
      <p>{description}</p>
      </div>
      </div>

    </div>
  )
}

export default ItemDetail