import { Card, CardImg, CardTitle} from 'reactstrap';
import {Link, useLocation} from 'react-router-dom'
import React from 'react';



function TopicPage(props){
    let location = useLocation();
    console.log(location)
        return(
            <div className="container">
                <div className = "row">
                    <h2>{location.state.topic}</h2>
                </div>
                <div className="row">
                <div className="col-md-3">
                        <Link to = {`/${props.title}/supplies-needed-to-begin`}>
                            <Card className = "card-item">
                                <CardTitle>Resource</CardTitle>
                                <CardImg width="100%" src="assets/logo.png" alt="supplies" />
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to = {`/${props.title}/supplies-needed-to-begin`}>
                            <Card className = "card-item">
                                <CardTitle>Resource</CardTitle>
                                <CardImg width="100%" src="assets/logo.png" alt="supplies" />
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to = {`/${props.title}/supplies-needed-to-begin`}>
                            <Card className = "card-item">
                                <CardTitle>Resource</CardTitle>
                                <CardImg width="100%" src="assets/logo.png" alt="supplies" />
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to = {`/${props.title}/the-basics`}>
                            <Card className = "card-item">
                                <CardTitle>Resource</CardTitle>
                                <CardImg width="100%" src="assets/logo.png" alt="basics" />
                            </Card>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Link to = {`/${props.title}/projects-for-beginners`}>
                            <Card className = "card-item">
                                <CardTitle>Resource</CardTitle>
                                <CardImg width="100%" src="assets/logo.png" alt="beginnerProjects" />
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to = {`/${props.title}/${props.title}-history`}>
                            <Card className = "card-item">
                                <CardTitle>Resource</CardTitle>
                                <CardImg width="100%" src="assets/logo.png" alt="history" />
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to = {`/${props.title}/popular-${props.title}`}>
                            <Card className = "card-item">
                                <CardTitle>Resource</CardTitle>
                                <CardImg width="100%" src="assets/logo.png" alt="popular" />
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to = {`/${props.title}/advanced-projects`}>
                            <Card className = "card-item">
                                <CardTitle>Recource</CardTitle>
                                <CardImg width="100%" src="assets/logo.png" alt="advanced" />
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        );
}

export default TopicPage;