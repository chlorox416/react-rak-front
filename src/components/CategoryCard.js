import React from 'react'


class CategoryCard extends React.Component {


    




    render() {
        return (
            <div className="card">
                <h3>{this.props.kindnessObj.category}</h3>
                <p>{this.props.kindnessObj.act}</p>
                <button onClick={() => this.props.removeHandler(this.props.kindnessObj.id)}>Delete</button><></>
                <button>DO IT</button>
            </div>
        )
    }
}



export default CategoryCard;