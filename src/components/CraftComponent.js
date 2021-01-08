import { Card, CardImg, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom'

function CraftPage(props){

    let videoSrc = '';
    switch(props.title){
        case 'Crochet':
            videoSrc="https://www.youtube.com/embed/KqH5gsGV8GM" 
            break;
        case 'Knitting':
            videoSrc = "https://www.youtube.com/embed/p_R1UDsNOMk" 
            break;
        case 'Embroidery':
            videoSrc = "https://www.youtube.com/embed/2ATJuHN-C9A" 
            break;
        default:
            videoSrc="https://www.youtube.com/embed/QMDiyYPmDus" 
    }

    return(
        <div className="container">
            <div className = "row">
                <h2>{props.title}</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <iframe width="475" height="275" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={props.topic}></iframe>
                </div>
                <div className="col-md-3">
                    <Link to = {{pathname:'/topic', state:{craft:`${props.title}`, topic:"Supplies Needed To Begin"}}}>
                        <Card className = "card-item">
                            <CardTitle>Supplies Needed To Begin</CardTitle>
                            <CardImg width="100%" src="assets/logo.png" alt="supplies" />
                        </Card>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to = {{pathname:'/topic', state:{craft:`${props.title}`, topic:"The Basics"}}}>
                        <Card className = "card-item">
                            <CardTitle>The Basics</CardTitle>
                            <CardImg width="100%" src="assets/logo.png" alt="basics" />
                        </Card>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Link to = {{pathname:'/topic', state:{craft:`${props.title}`, topic:"Beginner Projects"}}}>
                        <Card className = "card-item">
                            <CardTitle>Projects For Beginners</CardTitle>
                            <CardImg width="100%" src="assets/logo.png" alt="beginnerProjects" />
                        </Card>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to = {{pathname:'/topic', state:{craft:`${props.title}`, topic:`History of ${props.title}`}}}>
                        <Card className = "card-item">
                            <CardTitle>History Of {props.title}</CardTitle>
                            <CardImg width="100%" src="assets/logo.png" alt="history" />
                        </Card>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to = {{pathname:'/topic', state:{craft:`${props.title}`, topic:`Popular ${props.title}ers`}}}>
                        <Card className = "card-item">
                            <CardTitle>Popular {props.title}ers</CardTitle>
                            <CardImg width="100%" src="assets/logo.png" alt="popular" />
                        </Card>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to = {{pathname:'/topic', state:{craft:`${props.title}`, topic:"More Advanced Projects"}}}>
                        <Card className = "card-item">
                            <CardTitle>More Advanced Projects</CardTitle>
                            <CardImg width="100%" src="assets/logo.png" alt="advanced" />
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CraftPage;