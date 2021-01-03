import React from 'react'
import TaskCard from './TaskCard'


export const TaskContainer = (props) => {
    // console.log("here",props)
    const renderTasks = () => {
        return props.userKindnessArray.map(taskObj => <TaskCard key={taskObj.id} taskObj={taskObj} completeHandler={props.completeHandler}/>)
    }


    return (
        <>
        {/* <form>
            <input/>
        </form>

         */}

        
        <div className="list"> {renderTasks()}</div>
        </>
    )
}








export default TaskContainer