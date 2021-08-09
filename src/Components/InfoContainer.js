import React, { Component } from "react";
import logo from "../logo.svg"

class InfoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div id={this.props.id} className="d-flex">
                <div className="flex-shrink-1 p-2">
                    <img className="w-75" src={logo}></img>
                </div>
                <div className="flex-fill p-2 display-3">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default InfoContainer;