import React from 'react'


class TaskCard extends React.Component {
    state = {
        clicked: false
        // notCompleted: false
    }

    toggleHandler = () => {
        this.setState({
            clicked: !this.state.clicked,
            notCompleted: !this.state.notCompleted
        })
    }


// is this task completed? Yes - RAKed, No - show button
// is button clicked? Yes - mark as read and change state, No - leave it (need - this.state.clicked? and also onClick={this.toggleHandler}

//if(this.props.taskObj.completion === true){<p>{"~RAKed IT!~"}</p> : <button >{"Say No More!"}</button>} else

    render() {

        
    


        return (
            <div className="card">
                <h3>{this.props.taskObj.date}</h3>
                <p>{this.props.taskObj.note}</p>
                <p>{this.props.taskObj.kindness.act} </p>
                {/* {this.state.clicked? <p>{"No"}</p> : <p>{"Yes - It's Done"}</p>}
                {this.props.taskObj.completion? <p>{"No"}</p> : <p>{"Yes - It's Done"}</p>} */}
                {this.props.taskObj.completion ? <p>{"~RAKed IT!~"}</p> : <p >{""}</p>}
                {this.props.taskObj.completion ? <p>{""}</p> : <button >{"Say No More!"}</button>}
        

            </div>
        )
    }
}







export default TaskCard;