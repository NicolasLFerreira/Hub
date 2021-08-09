import { STRING_UNARY_OPERATORS } from "@babel/types";
import React, { Component } from "react";

class ProjectInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div id={this.props.id} className="d-flex flex-row bd-highlight">
                <div className="p-2 bd-highlight">
                    <div className="d-flex flex-column bd-highlight">
                        <div className="p-2 bd-highlight">
                            <img src="/"></img>
                        </div>
                        <div className="p-2 bd-highlight">
                            <p>{this.props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectInfo;