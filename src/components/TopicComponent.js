import { Card, CardImg, CardTitle} from 'reactstrap';
import {Link, useLocation} from 'react-router-dom'
import React from 'react';

function RenderTopicResources({resource}){
    return(
        <Link to ={{pathname:'/resource', state:{craft: `${resource.craft}`, name: `${resource.name}`, imageSrc:`${resource.imageSrc}`}}}>
            <Card className="card-item">
                <CardTitle>{resource.name}</CardTitle>
                <CardImg width="100%" src={resource.imageSrc} alt={resource.name}/>
            </Card>
        </Link>
    );
}

function TopicPage(props){
    let location = useLocation();
    const title = location.state.topic;
    const craft = location.state.craft;
    const topicResources = props.topicInfo.filter(r => r.topic === title && r.craft===craft);
    const resources = topicResources.map(r => {
        return(
            <div key = {r.craft+"-"+r.id} className = "col-md-3">
                <RenderTopicResources resource = {r} />
            </div>
        )
    })
        return(
            <div className = "container">
                <div className="row">
                    <h2>{title}</h2>
                </div>
                <div className="row">
                    {resources}
                </div>
            </div>
        );
}

export default TopicPage;