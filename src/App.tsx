import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Planets from "./components/Planets/Planets";
import Characters from "./components/Characters/Characters";
import { ReactQueryDevtools } from 'react-query/devtools'

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('planets')
  return (
    <div className="App">
      <h1>React Query Practice</h1>
      <Navbar setPage={setCurrentPage} />
      {currentPage === 'planets' ? <Planets /> : <Characters />}
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
