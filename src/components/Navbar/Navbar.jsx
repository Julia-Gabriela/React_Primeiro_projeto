import React from "react";
import "./styles.css"
import logoImg from "../../assets/imgs/logo.png";

export class Navbar extends React.Component{
    render(){
        return (
            <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="" />
          </div>

          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Casting</a> </li>
            <li><a href="/">Magazine</a></li>

          </ul>
        </nav>

      </header>
        )
    }
}


