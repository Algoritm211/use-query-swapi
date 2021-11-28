import React from 'react';
import {CharacterType} from "../../../types";

type PropsType = {
  character: CharacterType
}

const Character: React.FC<PropsType> = ({character}) => {
  return (
    <div className='card'>
      <h3>{character.name}</h3>
      <p>Eye color: {character.eye_color}</p>
      <p>Height: {character.height}</p>
    </div>
  );
};

export default Character;
