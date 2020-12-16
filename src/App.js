import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Homepage from './components/Homepage';
import CategoryContainer from './components/CategoryContainer';


class App extends Component{
  state={
    kindnessArray:[],
    usersArray:[],
    userKindnessArray:[]
    }


componentDidMount() {
  Promise.all([
    fetch('http://localhost:3000/api/v1/kindnesses'), 
    fetch('http://localhost:3000/api/v1/users'),
    fetch('http://localhost:3000/api/v1/user_kindnesses')])

  .then(([res1, res2, res3]) => { 
    return Promise.all([res1.json(), res2.json(), res3.json()]) 
 })
 .then(([data1, data2, data3]) => {
   this.setState({
    kindnessArray:data1, 
    usersArray:data2,
    userKindnessArray:data3
  })
 })
}






  // fetch('http://localhost:3000/api/v1/kindnesses')
  // .then(resp => resp.json())
  // // .then(data => console.log(data))
  // .then(data => this.setState({kindnessArray:data}))}




  render() {
    // console.log(this.state.kindnessArray)
      return (
        <Router>
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route 
                  exact path="/"
                  component={Homepage}/>
                <Route 
                  path="/categories" 
                  render={() => (
                    <CategoryContainer kindnessArray={this.state.kindnessArray}/>
                )}/>
              </Switch>
            </header>
          </div>
        </Router>
      )}
}




export default App;