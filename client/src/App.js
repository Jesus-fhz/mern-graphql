import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import 'semantic-ui-css/semantic.min.css'
import NavigationBar from './components/Menu';
import { Container } from 'semantic-ui-react'


import './App.css';

function App() {
  return ( 
    <Router>
      <Container>
        <NavigationBar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element ={<Login/>}/>
            <Route exact path='/register' element ={<Register/>}/>
          </Routes>
        </Container>
    </Router>
  );
}

export default App;
