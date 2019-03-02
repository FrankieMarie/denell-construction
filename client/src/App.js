import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { imagePaths } from './assets/imagePaths/index';

import Main from './components/Main';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route
              exact
              path="/projects"
              render={ () =>
                <Projects images={imagePaths} />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
