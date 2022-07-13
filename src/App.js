import React from "react";
import Home from "./routes/Home";
import Theme from "./Theme";
import { Component } from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./video.css";
import MeteorMusic from "./Meteor-Music.png";

export class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <div>
            <video autoPlay loop muted id="video">
              <source
                src="https://rr2---sn-jvhj5nu-nh4e.googlevideo.com/videoplayback?expire=1657713549&ei=LV_OYu-3FoSxkgaB1rKACA&ip=207.204.228.202&id=o-AOIrgGt4hqe9osgvd_yHvEm4u7XZ4sSwiv2UFrT5Ayyo&itag=315&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315&source=youtube&requiressl=yes&spc=lT-KhvQKTxZAChmwzd74VNBdBvN1Rlg&vprv=1&mime=video%2Fwebm&ns=5Dl3dfuX00okGBQxM7_XIRMH&gir=yes&clen=174937066&dur=240.099&lmt=1643256632751449&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5316224&n=SLpxjqFx91QB5w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAN6RFxl_EQrNm7r_Vl_5AeYEEJJzdwNZu-bgQVlYdjt4AiA5nCOfHdwlBU9rLI4QYK-oYVQG__5L4W16lRaZ5u3u1A%3D%3D&redirect_counter=1&rm=sn-a5myr7s&req_id=a1191f0781e3a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=SW&mip=2601:204:c501:19a0:98b7:5c14:4925:1ac8&mm=31&mn=sn-jvhj5nu-nh4e&ms=au&mt=1657691822&mv=m&mvi=2&pl=38&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgXXwJLIQ_NRkK_T-K9Q01yB5OmFbcZvxkUHFbx89L2t8CIQC94K_2eoLbiiKOdNpBLB2prrHeMOKbcOMXNwb6Rcer_Q%3D%3D"
                type="video/mp4"
              ></source>
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
