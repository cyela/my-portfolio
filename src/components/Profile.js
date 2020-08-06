import React from 'react';
import '../App.css';


class Profile extends React.Component {

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
                <section id="profile" className="wow fadeIn">
                    {this.state.loading ? "Loading..." :
                        <>
                            <div id="carousel-example-1z" className="carousel slide carousel-fade background-image padding-10">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="view">
                                            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
                                                <div className="text-center white-text mx-5 wow fadeIn">
                                                    <span>
                                                        <h1 className="display-4 top-heading tablet-h1 ">{this.state.profile.fullName}</h1>
                                                        <h2 className=" top-heading tablet-h2" style={{ paddingTop: "2%" }}>{this.state.profile.role}</h2>
                                                        <h2 className=" top-heading tablet-h2" style={{ paddingTop: "2%" }}>{this.state.profile.bio}</h2>
                                                    </span>
                                                    <div className="btn btn-outline-white" id="Academic" onClick={this.scrollTo} style={{ marginTop: "2%", marginBottom: "2%", cursor:"pointer" }}>Know More </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </section>
            </>
        );
    }
}

export default Profile;
