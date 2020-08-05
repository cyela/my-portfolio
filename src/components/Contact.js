import React from 'react';
import '../App.css';
import { FaMapMarker, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

class Contact extends React.Component {

    render() {

        return (
            <>
                <section id="contact" className="wow fadeIn">
                    <div className="row">
                        <div className="col-m-12 col-md-12 col-xs-12">
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center" width="100%">
                                            <address >
                                                <p className="w3-text-white"><FaMapMarker style={{ fontSize: "2em" }} /> Miami FL, US</p>
                                                <p className="w3-text-white"><FaPhone style={{ fontSize: "2em" }} /> +1704-777-1069</p>
                                                <p className="w3-text-white"><FaEnvelope style={{ fontSize: "2em" }} /> yelachandrakanth@gmail.com</p>
                                                <a href="mailto:yelachandrakanth@gmail.com" target={"_blank"} rel="noopener noreferrer">
                                                    < FaPaperPlane className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                </a>
                                                <a href="https://www.linkedin.com/in/chandrakanthy" target={"_blank"} rel="noopener noreferrer">
                                                    <FaLinkedin className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                </a>
                                                <a href="https://github.com/cyela" target={"_blank"} rel="noopener noreferrer">
                                                    <FaGithub className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                </a>
                                                <a href="https://www.facebook.com/mahesh.chandu.54" target={"_blank"} rel="noopener noreferrer">
                                                    <FaFacebook className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                </a>
                                                <a href="https://www.instagram.com/yelachandu/" target={"_blank"} rel="noopener noreferrer">
                                                    <FaInstagram className="w3-text-white mr-3" style={{ fontSize: "2em" }} />
                                                </a>
                                            </address>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <br></br>
            </>
        )
    }
}


export default Contact;