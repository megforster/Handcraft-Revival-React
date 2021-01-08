import React, { Component }  from 'react';
import { Card, CardImg, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Carousel extends Component{
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: '',
            //carouselImages: [{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"},{url:"assets/logo.png", alt:"pic"}]
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            //alert(this.state.items[index])
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }

        return items

    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    
    render() {
        return(
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.leftClick}><i className="fas fa-arrow-left"></i></div>
                <ReactCSSTransitionGroup 
                    transitionName={this.state.direction} transitionEnterTimeout = {500} transitionLeaveTimeout = {300}>
                    {this.generateItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow arrow-right" onClick={this.rightClick}><i className="fas fa-arrow-right"></i></div>
            </div>
        )
    }
}

class Item extends Component{
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                {/* <img src = {this.state.carouselImages[this.props.id].url} alt = {this.state.carouselImages[this.props.id].alt}/> */}
                {this.props.id}
            </div>
        )
    }
}

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //{url:"assets/logo.png", alt:"pic"}

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

function HomePage(props){

    const craftingFavorites = props.resources.map(resource => {
        return(
            <div key={resource.resourceId} className = "col-md-3">
                <RenderCraftResource resource = {resource} />
            </div>
        )
    })
    return(
        <div className="container">
            <Carousel items={items} active={0}/>
            <div className="row crafting-favorites">
                <h3>Recent Crafting Favorites</h3>
                <div className="row">
                    {craftingFavorites}
                </div>
            </div>
        </div>
    )
}

export default HomePage;