import Card from "./Card";

const Cards = (props) => {
  const { digimons, handleDigimonClick } = props;
  return ( 
    <section>
      {digimons.map((digimon) => {
        return <Card key={digimon.id} clickHandler={handleDigimonClick} digimon={digimon}/>
      })}
    </section>
   );
}
 
export default Cards;