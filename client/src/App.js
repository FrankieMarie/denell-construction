import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Main from './components/Main';
import Projects from './components/Projects';
import SingleProject from './components/SingleProject';
import AddProject from './Containers/AddProject';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/projects/new" component={AddProject} />
              <Route exact path="/project/:id" component={SingleProject} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
