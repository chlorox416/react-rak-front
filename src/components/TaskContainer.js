import React from 'react'
import TaskCard from './TaskCard'
import { Card, Divider } from "semantic-ui-react";

export const TaskContainer = (props) => {
    // console.log("here",props)
    const renderTasks = () => {
        return props.userKindnessArray.map(taskObj => 
        <TaskCard 
        key={taskObj.id} 
        taskObj={taskObj} 
        completeHandler={props.completeHandler}
        removeTaskHandler={props.removeTaskHandler}/>)
    }


    return (
        <>
       <Divider horizontal>RAKs</Divider>

       <Card.Group itemsPerRow={4}>{renderTasks()}</Card.Group>
        {/* <div className="list"> {renderTasks()}</div> */}
        </>
    )
}








export default TaskContainer;