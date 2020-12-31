import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { RESOURCES } from '../shared/resources';
//import CraftPage from './CraftComponent';
import FavoritesPage from './FavoritesComponent';
import Header from './HeaderComponent';
import HomePage from './HomeComponent';
//import ResourcePage from './ResourceComponent';
import SuggestionsPage from './SuggestionsComponent';
//import TopicPage from './TopicComponent';

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
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
                    <Route exact path = '/favorites' component={FavoritesPage} />
                    <Route exact path = '/suggestions' component={SuggestionsPage} />
                    <Route path = '/:craftId/:topicId/:resourceId'/>
                    <Route path = '/:craftId/:topicId' />
                    <Route path = '/:craftId'/>
                    <Route path = '/home' render = {() => <HomePage resources = {this.state.resources}/>}/>
                    <Redirect to = '/home'/>
                </Switch>
            </div>
        );
    }
}

export default Main;