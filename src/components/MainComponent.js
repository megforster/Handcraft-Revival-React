import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { TOPICINFO } from '../shared/topicsInfo';
import {FAVORITES} from '../shared/favorites'
import CraftPage from './CraftComponent';
import FavoritesPage from './FavoritesComponent';
import Header from './HeaderComponent';
import HomePage from './HomeComponent';
import ResourcePage from './ResourceComponent';
import SuggestionsPage from './SuggestionsComponent';
import TopicPage from './TopicComponent';
import { CRAFTINFO } from '../shared/craftPageInfo';
import {RESOURCEINFO} from '../shared/resourceInfo';
import {CRAFTINGFAVORITES} from '../shared/craftingFavorites';

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
          favorites: FAVORITES,
          topicInfo: TOPICINFO, 
          craftInfo: CRAFTINFO, 
          craftingFavorites: CRAFTINGFAVORITES, 
          resourceInfo: RESOURCEINFO
        };
      }

    render(){

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path = '/favorites' render = {() => <FavoritesPage favorites = {this.state.favorites}/>}/>
                    <Route exact path = '/suggestions' component={SuggestionsPage} />
                    <Route exact path = '/crochet' render = {() => <CraftPage title = "Crochet" craftInfo={this.state.craftInfo}/>}/>
                    <Route exact path = '/knitting' render = {() => <CraftPage title = "Knitting" craftInfo={this.state.craftInfo}/>}/>
                    <Route exact path = '/embroidery' render = {() => <CraftPage title = "Embroidery" craftInfo={this.state.craftInfo}/>}/>
                    <Route exact path = '/topic' render = {() => <TopicPage topicInfo = {this.state.topicInfo}/>}/>
                    <Route exact path = '/resource' render = {() => <ResourcePage resources = {this.state.resourceInfo} favorites = {this.state.favorites}/>}/>
                    <Route exact path = '/home' render = {() => <HomePage resources = {this.state.craftingFavorites}/>}/>
                    <Redirect to = '/home'/>
                </Switch>
            </div>
        );
    }
}

export default Main;