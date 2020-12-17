import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Homepage from './components/Homepage';
import CategoryContainer from './components/CategoryContainer';
import KindnessForm from './components/KindnessForm';

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

addKindness = (kindnessObj) => {
  debugger
  fetch('http://localhost:3000/api/v1/kindnesses',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(kindnessObj)
})
    .then(resp =>resp.json())
    .then(data => this.setState({kindnessArray: [...this.state.kindnessArray, data]}))
}


removeHandler = (id) => {
  let foundObj = this.state.kindnessArray.find(kindnessObj => kindnessObj.id === id)
  let copyOfKindness = [...this.state.kindnessArray]
  let index = copyOfKindness.indexOf(foundObj)
  copyOfKindness.splice(index, 1)
  this.setState({kindnessArray: copyOfKindness})
}


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
                    <>
                    <KindnessForm addKindness={this.addKindness}/>
                    <CategoryContainer kindnessArray={this.state.kindnessArray} removeHandler={this.removeHandler}/>
                    </>
                )}/>
              </Switch>
            </header>
          </div>
        </Router>
      )}
}




export default App;