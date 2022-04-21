import React from "react";
//import { Container, Jumbotron } from "reactstrap";

class Header extends React.Component {

    constructor (props){
        super(props);
        this.ac = React.createRef();
        this.state = {

        }
    }

    render(){

        return (
            <header>
                <div className="intro-logo jumbo-bg">
                    <h1>Welcome to Timino</h1>
                    <h3>Accompany your Activities, Projects & Memories</h3>
                    <img
                        src="https://bootstrapmade.com/demo/themes/eStartup/img/hero-img.png"
                        className=""
                        alt=""
                    />
                    <div className="intro-button">
                        <a href="/sign-up/">Get Started</a>
                    </div>
                    <div className="company-icons">
          <span className="company-icons__item">
            <i className="fab fa-apple" />
            contact us
          </span>
                        <span className="company-icons__item">
            <i className="fab fa-google-play" />
            telegram
          </span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;