import React, { Component } from 'react';

var sample = {
    "url":"#",
    "text":"foo"
}

var links = [
    {
        "url":"/",
        "text":"Home"
    },
    {
        "url":"about",
        "text":"About me"
    },
    {
        "url":"help",
        "text":"Help"
    }
]

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    navbarItem(url, text) {
        return (
            <div className="navbar-nav">
                <a className="nav-link active fs-3 pe-5" href={url}>{text}</a>
            </div>
        )
    }
    render() {
        
        var items = []

        for (let index = 0; index < links.length; index++) {
            items.push(this.navbarItem(links[index].url, links[index].text))
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                <div className="container-fluid">
                    <p className="display-5 p-3 pe-5 ps-0">NicolasLFerreira GitHub</p>
                    <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
                        {items}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation