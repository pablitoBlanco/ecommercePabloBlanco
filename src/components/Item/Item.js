import './Item.css'

export const Item = ( {cover, name, band, price} ) => {

  return (
    <div className="discosCards">
      <div className= "coverDiscos">
        <img src={cover} alt="cover"/>
      </div>
      <div className="infoDiscos">
        <h3>Disco: {name}</h3>
        <h3>Banda: {band}</h3>
        <h4>Precio: $ {price}</h4>

      </div>
    </div>
  )

}