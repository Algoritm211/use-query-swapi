import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('planets')
  return (
    <div className="App">
      <h1>React Query Practice</h1>
      <Navbar setPage={setCurrentPage} />
      {currentPage === 'planets'}
    </div>
  );
}

export default App;
