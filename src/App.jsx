import React from "react";
import { useEffect, useState } from "react";

import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fechtData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log("Data", data.results);
      setCharacters(data.results);
    }

    fechtData();
  }, []);
  return (
    <div>
      <h1>Rick and Morty</h1>
      <CharacterList characters={characters}/>
    </div>
  );
}
