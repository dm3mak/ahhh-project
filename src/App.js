import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import PromotionPage from './pages/PromotionPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import HomeNavbar from './components/HomeNavbar';
import Type from './pages/Type';
import promotionsJSON from './data/promotions.json';
import userJSON from './data/users.json';
import ScrollToTop from './components/ScrollToTops';

class App extends React.Component{
  
  constructor(props) {
    super(props); 


    let usersData = [];
      
      if(localStorage.localUsers) {
        usersData = JSON.parse(localStorage.localUsers);
      }
      else{
        usersData = userJSON;
      }

      let promoData = [];

      if(localStorage.localPromo) {
        promoData = JSON.parse(localStorage.localPromo);
      }
      else{
        promoData = promotionsJSON;
      }


    this.state = {
        allPromos : promoData,
        activeUser: userJSON[0],
        allUsers: usersData
    }
    
  }
  
  addPromo = (newPromo) => {
    const localPromoString = JSON.stringify(this.state.allPromos.concat(newPromo));
    localStorage.localPromo = localPromoString;
    this.setState({
      allPromos: [newPromo].concat(this.state.allPromos)
  
    });
    
  }

  addUser = (newUser) =>{
    const localUsersString = JSON.stringify(this.state.allUsers.concat(newUser));
    localStorage.localUsers = localUsersString;
    this.setState({
      activeUser: newUser,
      allUsers: this.state.allUsers.concat(newUser)
    })
  }
  login = (userObj) => {
    this.setState({
      activeUser: userObj
    });
  }
  logout = () => {
    this.setState({
      activeUser: null,
    })
  }
  
  render(){
    
    return (
      
    <HashRouter>
      <ScrollToTop/>
      <HomeNavbar
        activeUser={this.state.activeUser}
        logout={this.logout}
        allPromos={this.state.allPromos}
      />
      <Route exact path = "/">
        <HomePage
        allPromos={this.state.allPromos}
        />
      
      </Route>
      <Route exact path = "/type/:type">
        <Type
        allPromos={this.state.allPromos}
        activeUser={this.state.activeUser}
        />
      </Route>
      <Route exact path = "/add">
        <AddPage
        activeUser={this.state.activeUser}
        addPromo = {this.addPromo}
        />
      </Route>
      <Route exact path = "/promotion/:id"> 
        <PromotionPage
        allPromos={this.state.allPromos}
        activeUser={this.state.activeUser}
        />
      </Route>
      <Route exact path = "/signin">
        <SigninPage
        allUsers={this.state.allUsers}
        login={this.login}
        />
      </Route>
      <Route exact path = "/signup">
        <SignupPage
        addUser={this.addUser}
        />
      </Route>
    </HashRouter>
    );
  }
}

export default App;
