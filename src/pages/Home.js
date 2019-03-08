import React, { Component } from "react";
// import MokshaCountdown from "../components/MokshaCountdown";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="jumbotron">
        <img id="logo1" className="img-fluid mx-auto" src="/images/1.png" alt=""/>
        {/* <MokshaCountdown /> */}
        <img id="logo3" className="img-fluid mx-auto" src="/images/8.png" alt="Est 1983"/>
      </div>
    );
  }
}

export default Home;
