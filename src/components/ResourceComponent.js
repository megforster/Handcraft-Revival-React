import {useLocation} from 'react-router-dom'
import {Button} from 'reactstrap';
import parse from 'html-react-parser';

let location;
let listOfFavorites = [];

function addTofavorites(){
    if(listOfFavorites.filter(f => f.name === location.state.name).length ===0){
        listOfFavorites.push({
            name: location.state.name, 
            imageSrc: location.state.imageSrc, 
            craft: location.state.craft
        })
    }else{
        let index = listOfFavorites.indexOf({ name: location.state.name, 
            imageSrc: location.state.imageSrc, 
            craft: location.state.craft});
        listOfFavorites.splice(index, 1)
    }
}

function RenderResource({resource}){
    return( 
        <div>
            <div className = "row">
                <div className = "col-md-6">
                    {parse(`${resource.importance}`)}
                </div>
                <div className = "col-md-6">
                    <iframe width="475" height="275" src={resource.videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={resource.name}></iframe>
                </div>
            </div>
            <div className="row">
                {parse(`${resource.instructions}`)}
            </div>
        </div>
    );
}
function ResourcePage(props){
    listOfFavorites = props.favorites;
    location = useLocation();
    let resourceInfo = props.resources.filter(r => r.craft===location.state.craft && r.name === location.state.name)[0];
    return(
        <div className = "container">
            <div className="row">
                <div className="col-md-11">
                    <h1>{location.state.name}</h1>
                </div>
                <div className="col-md-1">
                    <Button className = "favorite-button" onClick={addTofavorites}><i className="fas fa-heart"></i></Button>
                </div>
            </div>
            <br/>
            <RenderResource resource = {resourceInfo}/>
        </div>
    );
}

export default ResourcePage;