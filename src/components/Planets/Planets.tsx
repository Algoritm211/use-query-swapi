import React, {useState} from 'react';
import {useQuery, UseQueryResult} from "react-query";
import PlanetsAPI from '../../api/planets'
import Planet from "./Planet/Planet";

const Planets: React.FC = () => {
  const [page, setPage] = useState(1);
  const {data, status} = useQuery(
    ['planets', page],
    () => PlanetsAPI.getPlanets(page),
    { staleTime: 10000}
  )

  const PlanetsBlock = data?.results.map((planet) => {
    return <Planet key={planet.name} planet={planet} />
  })
  return (
    <div>
      <h2>Planets</h2>
      <button
        disabled={page === 1}
        onClick={() => setPage((oldPage) => Math.max(oldPage - 1, 1))}>
        Previous
      </button>
      {page}
      <button
        disabled={!data?.next}
        onClick={() => setPage((oldPage) => data?.next ? oldPage + 1 : oldPage)}
      >
        Next
      </button>
      {PlanetsBlock}
      {status === 'loading' && <p>Loading</p>}
    </div>
  );
};

export default Planets;
