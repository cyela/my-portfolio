import React from 'react';
import '../App.css';


class Profile extends React.Component {

    render() {
        return (
            <>
                <section id="profile" className="wow fadeIn">
                    {this.props.loading ? "Loading..." :
                        <>
                            <div id="carousel-example-1z" className="carousel slide carousel-fade background-image padding-10">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="view">
                                            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
                                                <div className="text-center white-text mx-5 wow fadeIn">
                                                    <span>
                                                        <h1 className="display-4 top-heading tablet-h1 ">{this.props.profile.fullName}</h1>
                                                        <h2 className=" top-heading tablet-h2" style={{ paddingTop: "2%" }}>{this.props.profile.role}</h2>
                                                        <h2 className=" top-heading tablet-h2" style={{ paddingTop: "2%" }}>{this.props.profile.bio}</h2>
                                                    </span>
                                                    <a href="#academic" className="btn btn-outline-white" style={{ marginTop: "2%",marginBottom: "2%" }}>Know More </a>
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
