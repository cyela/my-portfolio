import React from 'react';
import { FaClone } from 'react-icons/fa';
import '../App.css';


class Project extends React.Component {
    state = {
        project: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch('./data.json')
            .then(data => data.json())
            .then(data =>
                this.setState(
                    {
                        project: data[3].projects,
                        loading: false
                    })
            );
    }
    render() {
        return (
            <>
                <section id="projects" className="wow fadeIn">
                    <div className="row">
                        {this.state.loading ? "Loading..." :
                            <>
                                {this.state.project.map(
                                    (proj, i) => {
                                        return (
                                            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="card card-image mb-3" style={{ backgroundImage: `url(${proj.image})`, backgroundSize: "cover" }}>
                                                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                                        <div className="tablet-card transbox" >
                                                            <h4 className="card-title pt-2" ><strong><span >{proj.title}</span></strong></h4>
                                                            <p><span >{proj.description}</span> </p>
                                                            <p><span >Technologies: {proj.tech}</span> </p>
                                                            <a className="btn elegant-color" href={proj.url} target={"_blank"} rel="noopener noreferrer"><FaClone className="left" /> View project</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </>
                        }
                    </div>
                </section>
            </>
        )
    }

}

export default Project;