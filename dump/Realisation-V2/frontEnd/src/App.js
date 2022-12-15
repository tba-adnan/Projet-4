import logo from './logo.svg';
import './App.css';

import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashbord from './components/DashbordPage/Dashbord';
// import Login from './components/LoginPage/Login';




class App extends React.Component {


render(){
 
  return(
    <div className="">
      <Dashbord/>
        
    </div>
  );

  
}
}

export default App;
