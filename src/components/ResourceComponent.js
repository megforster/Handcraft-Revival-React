import {useLocation} from 'react-router-dom'
import {Button} from 'reactstrap';

function addTofavorites(){
    alert("Adding to favorites functionality is in development!")
}

function ResourcePage(props){
    let location = useLocation();
    const resourceInfo = props.allResources.filter(r => r.craft===location.state.craft && r.topic===location.state.topic && r.resourceTitle === location.state.resource);

    return(
        <div className = "container">
            <div className="row">
                <div className="col-md-11">
                <h4>{location.state.resource}</h4>
                </div>
                <div className="col-md-1">
                <Button className = "favorite-button" onClick={addTofavorites}><i class="fas fa-heart"></i></Button>
                </div>
            </div>
            <div className = "row">
                <div className = "col-md-6 resource-box">
                    <h4>Why Is This Important</h4>
                </div>
                <div className = "col-md-6 resource-box">
                    <h4>Video</h4>
                    {/* <iframe width="475" height="275" src={resourceInfo.videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={props.topic}></iframe> */}
                    {/* would need video src for iFrame from resourceInfo */}
                </div>
            </div>
            <div className = "row resource-box">
                <h4>Instructions/Details</h4>
                {/* <p>{resourceInfo.info}</p> */}
            </div>
        </div>
    );
}

export default ResourcePage;