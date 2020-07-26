import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Navbar  from './components/Navbar.js';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';


const theme = createMuiTheme({"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"#7986cb","main":"rgba(9, 11, 25, 1)","dark":"#303f9f","contrastText":"#fff"},"secondary":{"light":"#ff4081","main":"rgba(48, 115, 46, 1)","dark":"#c51162","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">

    <Router>
    <Navbar/>
    <div className="container">
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/login" component={login}/>
        <Route exact path="/signup" component={signup}/>
      </Switch>
      </div>
    </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
