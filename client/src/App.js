import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import 'semantic-ui-css/semantic.min.css'
import NavigationBar from './components/NavigationBar';
import { Container } from 'semantic-ui-react'
import { AuthProvider } from './context/auth';
import AuthRoute from './Helpers/AuthRoute';

import './App.css';

function App() {
  return ( 
    <AuthProvider>
        <Router>
          <Container>
            <NavigationBar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                {/* Route Protection: we check if user is authticated and redirect them */}
                <Route exact path='/login' element ={ <AuthRoute/> }>
                    <Route exact path='/login' element ={<Login/>}/>
                </Route> 
                {/* Route Protection: we check if user is authticated and redirect them */}
                <Route exact path='/register' element ={ <AuthRoute/> }>
                    <Route exact path='/register' element ={<Register/>}/>
                </Route> 
              </Routes>
            </Container>
        </Router>
     </AuthProvider>
  );
}

export default App;
