import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class homepage extends Component {
    render() {
        return (
            <div>
                <br></br>
                    <p>
                        Welcome to RAK-it<br></br>
                        We believe kindness makes the world go round.<br></br>
                        Click on start to begin receving randomm reminders for little acts of kindness :)
                    </p>
                    <Link to="/categories"><button class="ui tiny button">Start</button></Link>
                {/* <button class="ui tiny button" onClick={() => this.props.removeHandler(this.props.kindnessObj.id)}>Delete</button><></> */}


            </div>
        )
    }
}

