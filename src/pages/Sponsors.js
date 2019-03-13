import React, { Component } from "react";
import "./Sponsors.css";

class Sponsors extends Component {
    render() {
        return (
            <div id="sponsors">
                <div className="row">
                    <div className="col-md-8 offset-md-1">
                        <div className="row">
                            <div className="col-md-4 offset-md-4 text-center">
                                <img src="/images/sponsors/nokia+moksha.png" alt="nokia" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-1">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img src="/images/sponsors/brewhouse.png" alt="brewhouse"/>
                            </div>
                            <div className="col-md-4 text-center">
                                <img src="/images/sponsors/cool-winks.png" alt="cool-winks" />
                            </div>
                            <div className="col-md-4 text-center">
                                <img src="/images/sponsors/LIC.png" alt="LIC" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-1">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img src="/images/sponsors/xoxoday.png" alt="xoxoday"/>
                            </div>
                            <div className="col-md-4 text-center">
                                <img src="/images/sponsors/tinder.png" alt="tinder" />
                            </div>
                            <div className="col-md-4 text-center">
                                <img src="/images/sponsors/uc-browser.png" alt="uc-browser" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sponsors;