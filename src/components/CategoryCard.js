import React from 'react'


class CategoryCard extends React.Component {



    render() {
        return (
            <div className="card">
                <h3>{this.props.kindnessObj.category}</h3>
                <p>{this.props.kindnessObj.action}</p>
                <button> Delete</button><></>
                <button> Add to To-Do</button>
            </div>
        )
    }
}



export default CategoryCard