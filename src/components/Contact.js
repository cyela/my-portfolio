import React from 'react';
import '../App.css';
import { FaMapMarker, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

class Contact extends React.Component {

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


    render() {

        return (
            <>
                <section id="contact" className="wow fadeIn">
                    {this.state.loading ? "Loading..." :
                        <>
                            <div className="row">
                                <div className="col-m-12 col-md-12 col-xs-12">
                                    <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" width="100%">
                                                    <address >
                                                        <p className="w3-text-white"><FaMapMarker style={{ fontSize: "2em" }} /> {this.state.profile.address}</p>
                                                        <p className="w3-text-white"><FaPhone style={{ fontSize: "2em" }} /> +1{this.state.profile.phone}</p>
                                                        <p className="w3-text-white"><FaEnvelope style={{ fontSize: "2em" }} /> {this.state.profile.gmail}</p>
                                                        <a href={['mailto:' + this.state.profile.gmail]} target={"_blank"} rel="noopener noreferrer">
                                                            < FaPaperPlane className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                        <a href={this.state.profile.linkedIn} target={"_blank"} rel="noopener noreferrer">
                                                            <FaLinkedin className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                        <a href={this.state.profile.github} target={"_blank"} rel="noopener noreferrer">
                                                            <FaGithub className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                        <a href={this.state.profile.facebook} target={"_blank"} rel="noopener noreferrer">
                                                            <FaFacebook className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                        <a href={this.state.profile.instagram} target={"_blank"} rel="noopener noreferrer">
                                                            <FaInstagram className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                    </address>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    }
                </section>
                <br></br>
            </>
        )
    }
}


export default Contact;