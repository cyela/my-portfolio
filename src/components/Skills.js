import React from 'react';
import '../App.css';


class Skills extends React.Component {

    render() {
        console.log(typeof this.props.skills.webDevelopement)
        console.log(Object.keys(this.props.skills))
        return (
            <>
                <section id="skills">
                    <div className="row features-small mt-5 wow fadeIn">
                        <div className="col-12" >
                            <table width="100%" className="system-screen">
                                <tbody>
                                    <tr align="center">
                                        {Object.keys(this.props.skills).map((key, i) =>
                                            <td><button type="button" className="btn elegant-color" data-toggle="modal" data-target={['#modal' + i]} style={{ width: "200px" }}>{key}</button></td>
                                        )
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                {Object.keys(this.props.skills).map((key, j) => {
                    return (
                        <div className="modal fade" id={['modal' + j]} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog cascading-modal" role="document">
                                <div className="modal-content">
                                    <div className="modal-header elegant-color darken-3 white-text">
                                        <h4 className="title">{key}</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div className="modal-body mb-0 text-center">
                                        <table width="100%">
                                            <tbody>
                                                <tr className="row">
                                                    {this.props.skills[key].map(
                                                        (p, i) => {
                                                            return (
                                                                <td className="col-4">
                                                                    <img src={['/image/' + p +'.jpg']} style={{ width: "70px", height: "70px" }} alt="java" /><br />
                                                                    <h5 className="feature-title font-bold mb-1">{p}</h5>
                                                                </td>
                                                            )
                                                        }
                                                    )
                                                    }
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
                }
            </>
        )
    }
}


export default Skills;