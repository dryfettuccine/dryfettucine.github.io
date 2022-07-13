import React from "react";
import Home from "./routes/Home";
import Theme from "./Theme";
import { Component } from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stars from "./finalstars.mp4";
import "./video.css";
import MeteorMusic from "./Meteor-Music.png";

export class App extends Component {
  render() {
    return (
      <Router basename="/dryfettucine.github.io">
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <div>
            <video autoPlay loop muted id="video">
              <source src={Stars} type="video/mp4"></source>
            </video>
          </div>
          <img src={MeteorMusic} className="titleimage"></img>

          <GlobalStyles
            styles={{
              body: { backgroundColor: "#121212" },
            }}
          />
          <Route exact path="/" component={Home} />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
