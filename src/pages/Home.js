import React, { Component } from "react";
// import MokshaCountdown from "../components/MokshaCountdown";
import "./Home.css";

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = { showImg: false }

    this.func = this.func.bind(this);
  }

  func() {
    this.setState({ showImg: !this.state.showImg });
  }

  componentDidMount() {
    this.interval = setInterval(this.func, 600);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderImg = () => {
    if (this.state.showImg)
      return <img id="logo1" className="img-fluid mx-auto" src="/images/-1.png" alt=""/>;
  }

  render() {
    return (
      <div id="jumbotron">
        <img id="logo1" className="img-fluid mx-auto" src="/images/1.png" alt=""/>
        {this.renderImg()}
        {/* <MokshaCountdown /> */}
        <img id="logo3" className="img-fluid mx-auto" src="/images/8.png" alt="Est 1983"/>
      </div>
    );
  }
}

export default Home;
