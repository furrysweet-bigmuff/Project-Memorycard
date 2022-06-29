const Card = (props) => {
  const { digimon, clickHandler } = props

  return ( 
    <div onClick={()=> clickHandler(digimon.id)}>
      <img src={require(`../images/${digimon.id}.png`)} alt={digimon.name} />
      <h1>{digimon.name}</h1>
    </div>
   );
}
 
export default Card;