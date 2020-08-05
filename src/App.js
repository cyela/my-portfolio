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

  state = {
    profile: {},
    education: [],
    employement: [],
    projects: [],
    skills: {},
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
            education: data[1].education,
            employement: data[2].employement,
            projects: data[3].projects,
            skills: data[4].skills,
            loading: false
          })
      );
  }

  render() {

    return (
      <>
        <Menu url={this.state.profile.url} />
        <Profile profile={this.state.profile} loading={this.state.loading} />
        <main>
          <div className="container">
            <hr className="my-5" />
            <h2 className="my-5 h3 text-center">Academics</h2>
            <Academic education={this.state.education} loading={this.state.loading} />
            <hr className="my-5" />
            <h2 className="my-5 h3 text-center">Skills</h2>
            <Skills skills={this.state.skills} loading={this.state.loading}/> 
            <hr className="my-5" />
            <h2 className="my-5 h3 text-center">Experience</h2>
            <Employement employement={this.state.employement} loading={this.state.loading} />
            <hr className="my-5" />
            <h2 className="my-5 h3 text-center">Projects</h2>
            <Project project={this.state.projects} loading={this.state.loading} />
          </div>
        </main>
        <footer className="page-footer text-center font-small mt-4 wow fadeIn" id="contact">
            <hr className="my-4" />
            <h2 className="my-5 h3 text-center w3-text-white" >Contact Me</h2>
          <Contact profile={this.state.profile} loading={this.state.loading} />
        </footer>
      </>
    );
  }

}

export default App;
