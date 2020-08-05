import React from 'react';
import '../App.css';
import { FaMapMarker, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

class Contact extends React.Component {

    render() {

        return (
            <>
                <section id="contact" className="wow fadeIn">
                    {this.props.loading ? "Loading..." :
                        <>
                            <div className="row">
                                <div className="col-m-12 col-md-12 col-xs-12">
                                    <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" width="100%">
                                                    <address >
                                                        <p className="w3-text-white"><FaMapMarker style={{ fontSize: "2em" }} /> {this.props.profile.address}</p>
                                                        <p className="w3-text-white"><FaPhone style={{ fontSize: "2em" }} /> +1{this.props.profile.phone}</p>
                                                        <p className="w3-text-white"><FaEnvelope style={{ fontSize: "2em" }} /> {this.props.profile.gmail}</p>
                                                        <a href={['mailto:'+this.props.profile.gmail]} target={"_blank"} rel="noopener noreferrer">
                                                            < FaPaperPlane className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                        <a href={this.props.profile.linkedIn} target={"_blank"} rel="noopener noreferrer">
                                                            <FaLinkedin className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                        <a href={this.props.profile.github} target={"_blank"} rel="noopener noreferrer">
                                                            <FaGithub className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                        <a href={this.props.profile.facebook} target={"_blank"} rel="noopener noreferrer">
                                                            <FaFacebook className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                        </a>
                                                        <a href={this.props.profile.instagram} target={"_blank"} rel="noopener noreferrer">
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