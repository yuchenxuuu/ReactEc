import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import addItem from "./components/Project/addItem";
import Header from "./components/Layout/Header"
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      <Route exact path = "/Dashboard" component = {Dashboard}/>
      <Route exact path = "/addItem" component = {addItem}/>
    </div>
    </Router>
  );
}

export default App;
