import React from 'react'


class CategoryCard extends React.Component {

    state = {
        clicked: false
      }
    
      toggleHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
      }
      



    render() {
        return (
            <div className="card">
                <div class="ui container"></div>
                <h3>{this.props.kindnessObj.act}</h3>
                <p>Categtory: {this.props.kindnessObj.category}</p>
                <button class="ui tiny button" onClick={() => this.props.removeHandler(this.props.kindnessObj.id)}>Delete</button><></>
                {this.state.clicked? <button class="ui tiny button" onClick={this.toggleHandler}>Scheduled!</button> : <button class="ui tiny button" onClick={this.toggleHandler} >Remind me!</button>}
            </div>
        )
    }
}



export default CategoryCard;