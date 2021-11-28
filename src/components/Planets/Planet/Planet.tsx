import React from 'react';
import {PlanetType} from "../../types";

type PropsType = {
  planet: PlanetType
}

const Planet: React.FC<PropsType> = ({planet}) => {
  return (
    <div>
      <h3>{planet.name}</h3>
      <p>Diameter: {planet.diameter}</p>
      <p>Mass: {planet.rotation_period}</p>
    </div>
  );
};

export default Planet;
