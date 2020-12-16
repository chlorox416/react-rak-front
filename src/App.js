import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Homepage from './components/Homepage';
import CategoryContainer from './components/CategoryContainer';
// import CategoryContainer from './components/Favorites'


class App extends Component{
  state={
    kindnessArray: [],
    }


componentDidMount() {
  fetch('http://localhost:3000/api/v1/kindnesses')
  .then(resp => resp.json())
  .then(data => console.log(data))
}


  render() {
      return (
        <Router>
          <div className="App">
            <header className="App-header">
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/allcategories" component={CategoryContainer}/>
            </header>
          </div>
        </Router>
      )
}


}


export default App;