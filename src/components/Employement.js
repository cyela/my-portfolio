import React from 'react';
import '../App.css';
import resumeData from '../assets/resume/data.json';


class Employement extends React.Component {

    state = {
        employement: [],
        loading: false
    }

    componentDidMount() {
        this.setState({
        employement: resumeData[2].employement,
        loading: false
        });
    }

    render() {

        return (
            <>
                <section id="experience" className="wow fadeIn">
                    {this.state.loading ? "Loading..." :
                        <>
                            {this.state.employement.map(
                                (emp, i) => {
                                    return (
                                        <div key={i} className="col-12 card">
                                            <table width="100%">
                                                <tbody>
                                                    <tr><td>&nbsp;</td></tr>
                                                    <tr>
                                                        <td align="left" className="jobname">
                                                            <img src={require(`../assets/image/${emp.image}`)} className="expimg1" alt={emp.companyName} />
                                                        </td>
                                                        <td align="right" className="jobname" >
                                                            <h4 className="exptitle">{emp.position}</h4>
                                                            <h5 style={{ fontStyle: "italic" }} className="exploc">{emp.location}</h5>
                                                            <p style={{ fontStyle: "italic" }} className="exptime">{emp.duration}</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td className="duties" width="100%">
                                                            <ul>
                                                                {emp.roles.map(
                                                                    (role, i) => {
                                                                        return (
                                                                            <li key={i}>{role}</li>
                                                                        )
                                                                    }
                                                                )}
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                }
                            )}
                        </>
                    }
                </section>
            </>
        );

    }

}

export default Employement;