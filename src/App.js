import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AboutComponent from './components/About'
import WorkComponent from './components/Work'
import SkillsComponent from './components/Skills'
import AcademicComponent from './components/Academic'

class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider>
            <AboutComponent />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <WorkComponent />
          </MuiThemeProvider>    
          <MuiThemeProvider>
            <SkillsComponent />
          </MuiThemeProvider>    
          <MuiThemeProvider>
            <AcademicComponent />
          </MuiThemeProvider>                           
      </div>      
    );
  }
}

export default App;


