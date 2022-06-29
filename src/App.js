import { useState, useEffect } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import createDigimons from "./digimons";

function App() {
  const [count, setCount] = useState(0);
  const [best, setBest] = useState(0);
  const [digimons, setDigimons] = useState(createDigimons(12))

  const increaseCount = () => {
    // console.log('increaseCount')
    setCount(count + 1)
  }
  const refreshCount = () => {
    setCount(0)
  }
  // const refreshDigimons = () => {
  //   console.log('refreshDigimons')
  //   setDigimons(createDigimons(12))
  //   console.log(digimons)
  // }

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
    
  }

  useEffect(() => {
    console.log('yep')
  }, [digimons]);

  useEffect(() => {
    if (count > best) {
      setBest(count)
    }
  }, [best, count]);

  const handleDigimonClick = (id) => {
    const digimonIndex = digimons.findIndex((digimon) => digimon.id === id);

    if (!digimons[digimonIndex].isClicked) {
      digimons[digimonIndex].isClicked = true;
      increaseCount();
      setDigimons(shuffle(digimons))
    } else {
      refreshCount();
      setDigimons(createDigimons(12))
    }
  } 
  
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Counter count={count} best={best}></Counter>
        <Cards digimons={digimons} handleDigimonClick={handleDigimonClick}></Cards>
      </main>
    </div>
  );
}

export default App;
