import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useStateValue } from './components/context/StateProvider';
import Home from './components/home/Home';

function App() {

  const [{user}] = useStateValue();

  return (
    <div className="app">
    <Router>
    {!user ? (
      <Login/>
    ):(
      <>
        {/* Header */}
      <Header/>
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar/>
        
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/room/:roomId" component={Chat}/>
          </Switch>
        
        {/* React Router ---> chat screen */}
      </div>
      </>
    )}
      
    </Router>
    </div>
  );
}

export default App;
