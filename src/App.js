import React from 'react';

import './App.css';
import Movies from './pages/Movies'
import LandingPage from './pages/LandingPage';
import Header from './layout/Header';
import TVShows from './pages/TVShows';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/> 
       
         
          <Route path='/movies' component={Movies}/>
          <Route path='/tvshows' component={TVShows}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Router>      
        
      </div>
  );
}

export default App;
