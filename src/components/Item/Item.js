import './Item.css'

export const Item = (props) =>{

  return (
    <div className="discosCards">
      <div className= "coverDiscos">
        <img src={props.cover} alt="cover"/>
      </div>
      <div className="infoDiscos">
        <h3>Disco: {props.name}</h3>
        <h3>Banda: {props.band}</h3>
        <h4>Precio: {props.price}</h4>
      </div>
    </div>
  )

}