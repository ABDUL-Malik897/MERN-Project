import {BrowserRouter, Routes , Route} from 'react-router-dom'


// Pages and Components Imports

import Home from './pages/Home'
import Navbar from './components/navbar.js';





function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
