import React from 'react';
import '../App.css';
import {FaGraduationCap, FaCode, FaPrint, FaHome, FaPaperPlane, FaLaptopCode, FaTasks, FaInbox} from 'react-icons/fa';

class Menu extends React.Component  {
  render() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar bg-dark ">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto smooth-scroll ">
                            <li className="nav-item"><a className="nav-link" href="#profile"><FaHome /> Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#academic"><FaGraduationCap/> Academic</a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills"><FaCode/> Skills</a></li>
                            <li className="nav-item"><a className="nav-link" href="#experience"><FaLaptopCode/> Experience</a> </li>
                            <li className="nav-item"><a className="nav-link" href="#projects"><FaTasks/> Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact"><FaPaperPlane /> Contact</a></li>
                        </ul>
                        <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item"><a className="nav-link" href="mailto:yelachandrakanth@gmail.com" ><FaInbox /> Mail</a></li>
                            <li className="nav-item"><a className="nav-link" href={this.props.url} target={"_blank"} rel="noopener noreferrer"><FaPrint/> Resume</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
  }
}

export default Menu;
