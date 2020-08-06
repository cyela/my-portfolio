import React from 'react';
import '../App.css';


class Academic extends React.Component {

    state = {
        education: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch('./data.json')
            .then(data => data.json())
            .then(data =>
                this.setState(
                    {
                        education: data[1].education,
                        loading: false
                    })
            );
    }

    render() {

        return (
            <>
                <section id="academic" className="wow fadeIn">
                    <div className="container mt-5 ">
                        <div className="row ">
                            {this.state.loading ? "loading..." :
                                <>
                                    {this.state.education.map(
                                        (edu, i) => {
                                            return (
                                                <div key={i} className="col-lg-6 col-md-12 col-sm-12 " id="bachelors">
                                                    <div className="card tablet-edu">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-lg-8 col-md-9 col-xs-12">
                                                                    <h4 className="card-title school-title ">{edu.degreeType} | {edu.instituteName}</h4>
                                                                    <h5 className="card-text school-para" style={{ fontStyle: "italic" }}>{edu.concentration}</h5>
                                                                    <p className="card-text school-para" style={{ fontStyle: "italic" }}>({edu.graduatedYear})</p>
                                                                </div>
                                                                <div className="col-lg-4 col-md-3 "
                                                                    style={
                                                                        {
                                                                            backgroundImage: `url(${edu.image})`,
                                                                            backgroundSize: "contain",
                                                                            backgroundRepeat: "no-repeat"
                                                                        }
                                                                    }>
                                                                </div>
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
                    </div>
                </section>
            </>
        );
    }
}

export default Academic;
