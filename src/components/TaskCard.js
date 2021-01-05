import React from 'react'
import { Button, Card, Icon, Modal, Header } from "semantic-ui-react";
import "../Styles/TaskCard.css";

class TaskCard extends React.Component {

    toggleHandler = () => {
        this.props.completeHandler(this.props.taskObj)
    }


// is this task completed? Yes - RAKed, No - show button
// is button clicked? Yes - mark as read and change state, No - leave it (need - this.state.clicked? and also onClick={this.toggleHandler}

//if(this.props.taskObj.completion === true){<p>{"~RAKed IT!~"}</p> : <button >{"Say No More!"}</button>} else

    render() {
        return (
            <Card className="card">
                <Card.Content>
                <Card.Header>{this.props.taskObj.date}</Card.Header>
                <Card.Description>
                Category: {this.props.taskObj.kindness.category}
                Note: {this.props.taskObj.note}
                Action: {this.props.taskObj.kindness.act}
                </Card.Description>
                
                <Icon
                className="close"
                name="close"
                color="black"
                onClick={() => this.props.removeTaskHandler(this.props.taskObj.id)}
                />       
                {this.props.taskObj.completion ? (
                    <Button
                    floated="right"
                    positive
                    disabled
                    size="tiny"
                    onClick={this.toggleHandler}
                    >
                    Completed!
                    </Button>
                ) : (
                    <Button
                    floated="right"
                    positive
                    size="tiny"
                    onClick={this.toggleHandler}
                    >
                    Pending
                    </Button>
                )}
                </Card.Content>
                </Card>  
        )
    }
            // <div className="card">
            //     <h3>Date: {this.props.taskObj.date}</h3>
            //     <p>Category: {this.props.taskObj.kindness.category}</p>
            //     <p>{this.props.taskObj.note}</p>
            //     <p>Action: {this.props.taskObj.kindness.act} </p>
            //     {this.props.taskObj.completion ? <button class="ui tiny button" onClick={this.toggleHandler}>Completed!</button> : <button class="ui tiny button" onClick={this.toggleHandler} >Pending</button>}
            //     {/* {this.props.taskObj.completion ? <p>{"~RAKed IT!~"}</p> : <button onClick={()=>this.props.completeHandler(this.props.taskObj.id)} >"Say No More!"</button>} */}
            // </div>
} 
export default TaskCard;