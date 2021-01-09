import { Card, CardImg, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom'

function RenderCraftResource({topic}){
    return(
        <Link to = {{pathname:'/topic', state:{craft:`${topic.craft}`, topic:`${topic.topic}`}}}>
            <Card className = "card-item">
                <CardTitle>{topic.topic}</CardTitle>
                <CardImg width="100%" src={topic.imageSrc} alt={topic.topic} />
            </Card>
        </Link>
    );
}

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

    const title = props.title;
    const craftTopics = props.craftInfo.filter(c => c.craft === props.title);
    const topics = craftTopics.map(t => {
        return(
            <div key={t.craft+"-"+t.topic} className = "col-md-3">
                <RenderCraftResource topic = {t}/>
            </div>
        )
    })

    return(
        <div className="container">
            <div className = "row">
                <h2>{title}</h2>
            </div>
            <div className="row"> 
                <div className="col-md-6">
                    <iframe width="475" height="275" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={props.topic}></iframe>
                </div>
                {topics}
            </div> 
        </div>
    )
}

export default CraftPage;