import React from 'react';
import '../App.css';


class Skills extends React.Component {

    state = {
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
                        skills: data[4].skills,
                        loading: false
                    })
            );
    }

    render() {
        return (
            <>
                <section id="skills">
                    <div className="row  mt-5 wow fadeIn">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <table width="100%">
                                <tbody>
                                    <tr align="center" className="row">
                                        {Object.keys(this.state.skills).map((key, i) =>
                                            <td key={i} className="col-lg-3 col-md-6 col-sm-12 col-xs-12"><button type="button" className="btn elegant-color" data-toggle="modal" data-target={['#modal' + i]} style={{ width: "80%" }}>{key}</button></td>
                                        )
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                {Object.keys(this.state.skills).map((key, j) => {
                    return (
                        <div key={j} className="modal fade" id={['modal' + j]} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                                    {this.state.skills[key].map(
                                                        (p, i) => {
                                                            return (
                                                                <td key={i} className="col-4 ">
                                                                    <img src={['/image/' + p + '.jpg']} style={{ width: "70px", height: "70px" }} alt="java" /><br />
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