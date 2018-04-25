import 'es6-shim'; // yeah, polyfill all the things !!!
import 'whatwg-fetch'; // yeah, polyfill all the things !!!
import Symbol from 'es-symbol';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import RoutedApp from './RoutedApp';
import './index.css';
import { WineApp, WineListPage, WinePage, NotFound} from './components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';


if (!window.Symbol) {
  window.Symbol = Symbol; // yeah, polyfill all the things !!!
}


const store = createStore(reducer, applyMiddleware(thunk));

class RoutedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
            <Switch>
            <Route exact path="/" component={WineApp} />
            <Route exact path="/regions/:regionId" component={WineListPage} />
            <Route exact path="/regions/:regionId/wines/:wineId" component={WinePage} />
            <Route path="*" component={NotFound} />
            </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
