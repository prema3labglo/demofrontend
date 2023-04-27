import logo from './logo.svg';
import './App.css';
import Register from './register';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
 
}   
from 'react-router-dom';  
import Employeelist from './Allemployees/employeelist';
import Login from './Login';

function App() {
  return (
    <div className="App">
    
     <Router>
      <Routes>
        <Route exact path="/" element={ <Login/>}/>
        <Route exact path="/allemployee" element={<Employeelist/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
