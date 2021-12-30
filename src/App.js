import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddElement } from './components/AddElement';
import { EditElement } from './components/EditElement';
import { Home } from './components/Home';
import { AllElement } from './components/AllElement';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


    <div style = {{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        
        <Routes>
          <Route exact path="/Home" element={<Home/>} />

          <Route path="/add" element={<AddElement/>} />

          <Route path="/edit" element={<EditElement/>} /> 

          <Route path="/allElement" element={<AllElement/>} />

        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
