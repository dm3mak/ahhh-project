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
import PromotionsJSON from './data/promotions.json';
import userJSON from './data/users.json';

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


    this.state = {
        allPromos : PromotionsJSON,
        activeUser: null,
        allUsers: usersData
    }
    
  }
  
  addPromo = (newPromo, index) => {
    
    this.setState({
      allPromos: this.state.allPromos[index].concat(newPromo)
  
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
      <HomeNavbar
        activeUser={this.state.activeUser}
        logout={this.logout}
      />
      <Route exact path = "/">
        <HomePage
        />
      
      </Route>
      <Route exact path = "/type/:type">
        <Type
        
        />
      </Route>
      <Route exact path = "/add">
        <AddPage
        activeUser={this.state.activeUser}
        />
      </Route>
      <Route exact path = "/promotion/:index"> 
        <PromotionPage
        
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
