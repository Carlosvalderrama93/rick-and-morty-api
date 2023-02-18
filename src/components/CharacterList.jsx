import React from "react";
import Character from "./Character";

function CharacterList({ characters }) {
  return (
    <div>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

export default CharacterList;
