import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ArticleIndex from './ArticleIndex';
import ArticleCreate from './ArticleCreate';
import ArticleShow from './ArticleShow';
import ArticleEdit from './ArticleEdit';

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={ArticleIndex}/>
                        <Route exact path='/create' component={ArticleCreate} />
                        <Route  path='/articles/:id/edit' component={ArticleEdit} />
                        <Route  path='/articles/:id' component={ArticleShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));