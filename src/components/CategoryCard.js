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
                <h3>{this.props.kindnessObj.category}</h3>
                <p>{this.props.kindnessObj.act}</p>
                <button onClick={() => this.props.removeHandler(this.props.kindnessObj.id)}>Delete</button><></>
                {this.state.clicked? <button onClick={this.toggleHandler}>Scheduled!</button> : <button onClick={this.toggleHandler} >Remind me!</button>}
            </div>
        )
    }
}



export default CategoryCard;