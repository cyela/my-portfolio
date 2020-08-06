import React from 'react';
import '../App.css';
import { FaGraduationCap, FaCode, FaPrint, FaHome, FaPaperPlane, FaLaptopCode, FaTasks, FaInbox } from 'react-icons/fa';

class Menu extends React.Component {
    state = {
        profile: {},
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch('./data.json')
            .then(data => data.json())
            .then(data =>
                this.setState(
                    {
                        profile: data[0],
                        loading: false
                    })
            );
    }

    scrollTo = (e) => {
        if (typeof this.props.onScrollSelect === 'function') {
            this.props.onScrollSelect(e.target.getAttribute('id'));
        }
    }

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
                                <li className="nav-item"><div className="nav-link" id="Profile" onClick={this.scrollTo} ><FaHome /> Home</div></li>
                                <li className="nav-item"><div className="nav-link" id="Academic" onClick={this.scrollTo}><FaGraduationCap /> Academic</div></li>
                                <li className="nav-item"><div className="nav-link" id="Skill" onClick={this.scrollTo}><FaCode /> Skills</div></li>
                                <li className="nav-item"><div className="nav-link" id="Employement" onClick={this.scrollTo}><FaLaptopCode /> Experience</div> </li>
                                <li className="nav-item"><div className="nav-link" id="Project" onClick={this.scrollTo}><FaTasks /> Projects</div></li>
                                <li className="nav-item"><div className="nav-link" id="Contact" onClick={this.scrollTo}><FaPaperPlane /> Contact</div></li>
                            </ul>
                            <ul className="navbar-nav nav-flex-icons">
                                <li className="nav-item"><a className="nav-link" href="mailto:yelachandrakanth@gmail.com" ><FaInbox /> Mail</a></li>
                                <li className="nav-item"><a className="nav-link" href={this.state.profile.url} target={"_blank"} rel="noopener noreferrer"><FaPrint /> Resume</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Menu;
