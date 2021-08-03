import React, {Component} from 'react';
import { Provider } from 'react-redux';
import redux from './configs/redux';
import MovieContainer from './containers/MovieContainer'


export default class App extends Component {

    render() {
        return (
            <Provider store ={redux.store}>  
                <MovieContainer />
            </Provider>
        );
    }
}