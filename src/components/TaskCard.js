import React from 'react'


class TaskCard extends React.Component {
    // state = {
    //     clicked: false
    //     // notCompleted: false
    // }

    toggleHandler = () => {
        this.props.completeHandler(this.props.taskObj)
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
                {this.props.taskObj.completion ? <button onClick={this.toggleHandler}>"~RAKed IT!~"</button> : <button onClick={this.toggleHandler} >"Say No More!"</button>}
                {/* {this.props.taskObj.completion ? <p>{"~RAKed IT!~"}</p> : <button onClick={()=>this.props.completeHandler(this.props.taskObj.id)} >"Say No More!"</button>} */}
        
        

            </div>
        )
    }
}







export default TaskCard;