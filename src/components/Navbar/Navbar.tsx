import React from 'react';

type PropsType = {
  setPage: (page: string) => void
}
const Navbar: React.FC<PropsType> = ({setPage}) => {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('characters')}>Characters</button>
    </nav>
  );
};

export default Navbar;
