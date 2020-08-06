import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Employement from './components/Employement';
import Menu from './components/Menu';
import Academic from './components/Academic';
import Project from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skills';

class App extends React.Component {

  constructor() {
    super();
    this.handleScrollTo = this.handleScrollTo.bind(this)
    this.myProfileToFocus = React.createRef()
    this.myAcademicToFocus = React.createRef()
    this.myEmployementToFocus = React.createRef()
    this.mySkillToFocus = React.createRef()
    this.myProjectToFocus = React.createRef()
    this.myContactToFocus = React.createRef()
  }

  handleScrollTo(refElement) {
    const scrollProps = {
      behavior: "smooth",
      block: "start"
    }
    switch (refElement) {
      case 'Profile':
        if (this.myProfileToFocus.current) {
          this.myProfileToFocus.current.scrollIntoView(scrollProps)
        }
        break
      case 'Academic':
        if (this.myAcademicToFocus.current) {
          this.myAcademicToFocus.current.scrollIntoView(scrollProps)
        }
        break
      case 'Skill':
        if (this.mySkillToFocus.current) {
          this.mySkillToFocus.current.scrollIntoView(scrollProps)
        }
        break
      case 'Employement':
        if (this.myEmployementToFocus.current) {
          this.myEmployementToFocus.current.scrollIntoView(scrollProps)
        }
        break
      case 'Project':
        if (this.myProjectToFocus.current) {
          this.myProjectToFocus.current.scrollIntoView(scrollProps)
        }
        break
      case 'Contact':
        if (this.myContactToFocus.current) {
          this.myContactToFocus.current.scrollIntoView(scrollProps)
        }
        break
      default:
        if (this.myProfileToFocus.current) {
          this.myProfileToFocus.current.scrollIntoView(scrollProps)
        }
    }

  }
  render() {

    return (
      <>
        <Menu onScrollSelect={this.handleScrollTo} />
        <div ref={this.myProfileToFocus}>
          <Profile onScrollSelect={this.handleScrollTo}/>
        </div>
        <main>
          <div className="container">
            <div ref={this.myAcademicToFocus}>
              <hr className="my-5" />
              <h2 className="my-5 h3 text-center">Academics</h2>
              <Academic />
            </div>
            <div ref={this.mySkillToFocus}>
              <hr className="my-5" />
              <h2 className="my-5 h3 text-center">Skills</h2>
              <Skills />
            </div>
            <div ref={this.myEmployementToFocus}>
              <hr className="my-5" />
              <h2 className="my-5 h3 text-center">Experience</h2>
              <Employement />
            </div>
            <div ref={this.myProjectToFocus}>
              <hr className="my-5" />
              <h2 className="my-5 h3 text-center">Projects</h2>
              <Project />
            </div>
          </div>
        </main>
        <footer className="page-footer text-center font-small mt-4 wow fadeIn" id="contact" ref={this.myContactToFocus}>
          <hr className="my-4" />
          <h2 className="my-5 h3 text-center w3-text-white" >Contact Me</h2>
          <Contact />
        </footer>
      </>
    );
  }

}

export default App;
