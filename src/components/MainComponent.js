import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { RESOURCES } from '../shared/resources';
import {FAVORITES} from '../shared/favorites'
import CraftPage from './CraftComponent';
import FavoritesPage from './FavoritesComponent';
import Header from './HeaderComponent';
import HomePage from './HomeComponent';
import ResourcePage from './ResourceComponent';
import SuggestionsPage from './SuggestionsComponent';
import TopicPage from './TopicComponent';

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
          favorites: FAVORITES,
          resources: RESOURCES
        };
      }

    render(){

        // const Craft = ({match}) => {
        //     return(
        //         <CraftPage 
        //             //crafts = {this.state.crafts.filter(craft => craft.id === +match.params.)}
        //         />
        //     );
        // }

        // const CraftWithTopicId = () => {
        //     return(
        //         <TopicPage />
        //     )
        // }

        // const CraftWithTopicAndResourceId = () => {
        //     return(
        //     <ResourcePage/>
        //     )
        // }

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path = '/favorites' render = {() => <FavoritesPage favorites = {this.state.favorites}/>}/>
                    <Route exact path = '/suggestions' component={SuggestionsPage} />
                    <Route exact path = '/crochet' render = {() => <CraftPage title = "Crochet"/>}/>
                    <Route exact path = '/knitting' render = {() => <CraftPage title = "Knitting"/>}/>
                    <Route exact path = '/embroidery' render = {() => <CraftPage title = "Embroidery"/>}/>
                    <Route exact path = '/topic' render = {() => <TopicPage allResources = {this.state.resources}/>}/>
                    <Route exact path = '/resource' render = {() => <ResourcePage allResources = {this.state.resources}/>}/>
                    <Route exact path = '/home' render = {() => <HomePage resources = {this.state.resources}/>}/>
                    <Route path = '/:craftId/:topicId/:resourceId'/>
                    <Route path = '/:craftId/:topicId' />
                    {/* <Route path = '/:craftId'/> */}
                    <Redirect to = '/home'/>
                </Switch>
            </div>
        );
    }
}

export default Main;