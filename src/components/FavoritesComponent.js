import React from 'react';
import { Card, CardImg, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom'

function RenderCraftResource({resource}){
    console.log(resource)
    return(
        <Link to ={{pathname:'/resource', state:{craft: `${resource.craft}`, name: `${resource.name}`}}}>
            <Card className = "card-item">
                <CardTitle>{resource.name}</CardTitle>
                <CardImg width="100%" src={resource.imageSrc} alt={resource.name} />
            </Card>
        </Link>
    );
}

function FavoritesPage(props){

    const resourceFavorites = props.favorites.map(resource => {
        return(
            <div key={resource.name} className = "col-md-3">
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