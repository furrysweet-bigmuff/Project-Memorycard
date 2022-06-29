const createDigimons = (num) => {
  const digimons = [];
  for (let i = 1; i <= num; i++) {
    digimons.push(
      {
        name: `Digimon${i}`,
        isClicked: false,
        id: i,
      }
    )
  }
  return digimons
}

export default createDigimons;
