import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import PromotionPage from './pages/PromotionPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

class App extends React.Component{
  
  constructor(props) {
    super(props); 
  
  }
  render(){
    return (
      
    <HashRouter>
      {/* <Route exact path="/">
        <Redirect to="/eat"></Redirect>
      </Route> */}
      <Route exact path = "/">
        <HomePage

        />
      </Route>
      <Route exact path = "/add">
        <AddPage
        
        />
      </Route>
      <Route exact path = "/promotion"> {/*Here will use by id i.e. /promotion/:id */}
        <PromotionPage
        
        />
      </Route>
      <Route exact path = "/signin">
        <SigninPage
        
        />
      </Route>
      <Route exact path = "/signup">
        <SignupPage
        
        />
      </Route>
    </HashRouter>
    );
  }
}

export default App;
