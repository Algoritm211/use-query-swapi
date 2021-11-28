import React from 'react';
import {useQuery} from "react-query";
import PlanetsAPI from '../../api/planets'
import Planet from "./Planet/Planet";

const Planets: React.FC = () => {
  const {data, status} = useQuery('planets', PlanetsAPI.getPlanets, {
    staleTime: 10000,
  })
  const PlanetsBlock = data?.results.map((planet) => {
    return <Planet key={planet.name} planet={planet} />
  })
  return (
    <div>
      <h2>Planets</h2>
      {PlanetsBlock}
      {status === 'loading' && <p>Loading</p>}
    </div>
  );
};

export default Planets;
