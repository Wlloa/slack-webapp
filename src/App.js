import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Router>
      {/* Header */}
      <Header/>
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar/>
        
          <Switch>
            <Route path="/"/>
            <Route path="/room/:roomId"/>
          </Switch>
        
        {/* React Router ---> chat screen */}
      </div>
      
    </Router>
    </div>
  );
}

export default App;
