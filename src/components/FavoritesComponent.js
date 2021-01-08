import React from 'react';
import { Card, CardImg, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom'

function RenderCraftResource({resource}){
    return(
        <Link to = {`/${resource.craftId}/${resource.topicId}/${resource.resourceId}`}>
            <Card className = "card-item">
                <CardTitle>{resource.name}</CardTitle>
                <CardImg width="100%" src={resource.image} alt={resource.name} />
            </Card>
        </Link>
    );
}

function FavoritesPage(props){

    const resourceFavorites = props.favorites.map(resource => {
        return(
            <div key={resource.resourceId} className = "col-md-3">
                <RenderCraftResource resource = {resource} />
            </div>
        )
    })
    return(
        <div>
            <h1>Favorited Resources</h1>
            <div className="row">
                    {resourceFavorites}
                </div>
        </div>
    );
}

export default FavoritesPage;