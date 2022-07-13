import React from "react";
import Home from "./routes/Home";
import Theme from "./Theme";
import { Component } from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@mui/material";
import StarryBackground from "./starrybackground.mp4";
import "./video.css";
import MeteorMusic from "./Meteor-Music.png";
import Navbar from "./components/Navbar";
import Volume from "./components/Volume";

export class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <div>
            <video autoPlay loop muted id="video">
              <source
                src="https://rr2---sn-a5mlrnek.googlevideo.com/videoplayback?expire=1657686005&ei=lfPNYsTcGY6JxgKL67OgCg&ip=41.139.0.113&id=o-AH4y6v52OczA63CkUQpjcMQyu1Jl7sBQEBlspw3GG2iL&itag=315&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315&source=youtube&requiressl=yes&spc=lT-KhmX095jewOgh-6-zfUg3jseo9ig&vprv=1&mime=video%2Fwebm&ns=W_wr-u6ZkYVO7tSzW9lO2qoH&gir=yes&clen=174937066&dur=240.099&lmt=1643256632751449&keepalive=yes&fexp=9420244,24001373,24007246,24239135&beids=24239135&c=WEB&txp=5316224&n=kUhtwXdqbfr32g&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMbc_-CBy64o6cLqIUF6dWdhEIhmn1lhE0tO5PQMdixfAiEAvzWHLXBDKT-tkN1vipAN-Kry1FWcd86prdYNwltM-U8%3D&rm=sn-bpn25-5jje7z&req_id=5990c17048dba3ee&cmsv=e&ipbypass=yes&redirect_counter=2&cm2rm=sn-avns7l&cms_redirect=yes&mh=SW&mip=2601:204:c501:19a0:98b7:5c14:4925:1ac8&mm=34&mn=sn-a5mlrnek&ms=ltu&mt=1657663961&mv=m&mvi=2&pl=38&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgOGL-gw1zTVWul9cyJZM7L1jVmsuO6LUwIe2vj32ZpUwCIQC4tyCtdOTOqpos7rvKy7Dh3aPCZj-lkuARvX_ZOjUVjw%3D%3D"
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
