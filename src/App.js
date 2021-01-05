import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import CategoryContainer from "./components/CategoryContainer";
import TaskContainer from "./components/TaskContainer";
import KindnessForm from "./components/KindnessForm";
import Search from "./components/Search";
import "./App.css";
import Header from "./Header";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = {
    kindnessArray: [],
    usersArray: [],
    userKindnessArray: [],
    searchTerm: "",
  };

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:3000/api/v1/kindnesses"),
      fetch("http://localhost:3000/api/v1/users"),
      fetch("http://localhost:3000/api/v1/user_kindnesses"),
    ])

      .then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })
      .then(([data1, data2, data3]) => {
        this.setState({
          kindnessArray: data1,
          usersArray: data2,
          userKindnessArray: data3,
        });
      });
  }

  addKindness = (kindnessObj) => {
    // debugger
    fetch("http://localhost:3000/api/v1/kindnesses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(kindnessObj),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({ kindnessArray: [...this.state.kindnessArray, data] })
      );
  };

  removeHandler = (id) => {
    fetch(`http://localhost:3000/api/v1/kindnesses/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        let foundObj = this.state.kindnessArray.find(
          (kindnessObj) => kindnessObj.id === id
        );
        let copyOfKindness = [...this.state.kindnessArray];
        let index = copyOfKindness.indexOf(foundObj);
        copyOfKindness.splice(index, 1);
        this.setState({ kindnessArray: copyOfKindness });
      });
  };

  completeHandler = (obj) => {
    fetch(`http://localhost:3000/api/v1/user_kindnesses/${obj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        completion: !obj.completion,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        let arrayCopy = [...this.state.userKindnessArray];
        let foundObj = arrayCopy.find((taskObj) => taskObj.id === obj.id);
        foundObj.completion = !foundObj.completion;
        this.setState({ userKindnessArray: arrayCopy });
      });
  };

  createUserKindness = (kindnessObj, date) => {
    fetch("http://localhost:3000/api/v1/user_kindnesses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        kindness_id: kindnessObj.id,
        completion: false,
        note: "",
        date: date,
      }),
    })
      .then((r) => r.json())
      .then((data => {
        let copy = [...this.state.userKindnessArray]
        copy.push(data)
        this.setState({userKindnessArray: copy})
        console.log("test", data)
      }));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filterKindness = () => {
    return this.state.kindnessArray.filter(
      (kindnessObj) =>
        kindnessObj.act
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        kindnessObj.category
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
    );
  };

  filterUserKindnesses = () => {
    return this.state.userKindnessArray.filter(
      (taskObj) =>
        taskObj.date
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        taskObj.kindness.act
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
    );
  };

  // completeHandler = (id) => {
  //   fetch(`http://localhost:3000/api/v1/user_kindnesses/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       completion: true
  //     })
  // })
  // .then(resp => resp.json())
  // .then((data) => {
  //   // console.log(data)
  //   let arrayCopy = [...this.state.userKindnessArray]
  //   let foundObj = (arrayCopy.find(taskObj => taskObj.id === id))
  //   foundObj.completion = true
  //   this.setState({userKindnessArray: arrayCopy})
  // })}

  render() {
    // console.log(this.state.kindnessArray)
    return (
      <Router>
        <Route path="/:page" component={Header} />
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route
            path="/categories"
            render={() => (
              <>
                <KindnessForm addKindness={this.addKindness} />
                {/* <CategoryContainer kindnessArray={this.state.kindnessArray} removeHandler={this.removeHandler}/> */}
                <Search
                  searchTerm={this.state.searchTerm}
                  handleChange={this.handleChange}
                />
                <CategoryContainer
                  kindnessArray={this.filterKindness()}
                  removeHandler={this.removeHandler}
                  createUserKindness={this.createUserKindness}
                />
              </>
            )}
          />
          <Route
            path="/history"
            render={() => (
              <>
                <Search
                  searchTerm={this.state.searchTerm}
                  handleChange={this.handleChange}
                />
                <TaskContainer
                  userKindnessArray={this.filterUserKindnesses()}
                  // userKindnessArray={this.state.userKindnessArray}
                  completeHandler={this.completeHandler}
                />
              </>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
// add category to history/task
// allow search for ^
