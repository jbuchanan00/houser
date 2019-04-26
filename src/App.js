import React from 'react';
import './App.css';
import routes from "./routes"
import Header from "./components/Header"
import {HashRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      {routes}     
    </div>
    </Router>
  );
}

export default App;
