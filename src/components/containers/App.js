import React from 'react';
import VideoPlayer from './VideoPlayer'
import GlobalStyle from '../styles/GlobalStyle'
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'
const App = () => (
<Router>
  <>
  <Switch>
    <Route exact path='/' component={VideoPlayer}/>
    <Route exact path='/:activeVideo' component={VideoPlayer}/>  
  </Switch>
  <GlobalStyle/>
  </>
</Router>
)

export default App; 