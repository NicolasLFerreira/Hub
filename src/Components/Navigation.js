import React, { Component } from 'react';

var sample = {
    "url": "#",
    "text": "foo"
}

var links = [
    {
        "url": "chess",
        "text": "Chess"
    },
    {
        "url": "calendar",
        "text": "Calendar"
    },
    {
        "url": "help",
        "text": "Help"
    }
]

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    navbarItem(url, text) {
        return (
            <div className="navbar-nav">
                <a className="nav-link active fs-3 pe-5" href={"index.html#" + url}>{text}</a>
            </div>
        );
    }
    render() {
        var items = []

        for (let index = 0; index < links.length; index++) {
            items.push(this.navbarItem(links[index].url, links[index].text));
        }

        return (
            <header style={{ "position": "fixed" }, { "zIndex": "999" }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                    <div className="container-fluid">
                        <p className="display-5 p-3 pe-5 ps-0">NicolasLFerreira GitHub</p>
                        <div className="collapse navbar-collapse show">
                            {this.navbarItem('/', 'Home')}
                            {items}
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navigation