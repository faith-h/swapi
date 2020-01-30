import React from 'react';
import './App.css';
import Home from './components/Home'
import Person from './components/Person'
import NoMatch from './components/NoMatch'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

const App = () => (
  <>
  <AppContainer>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/people/:id' component={Person} />
      <Route component={NoMatch} />
    </Switch>
  </AppContainer>
  </>
)

const AppContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  font-family: 'Orbitron', sans-serif;
`;

export default App;
