import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../Styles/CategoryCard.css";
import { Button } from "semantic-ui-react";

export default class homepage extends Component {
    render() {
        return (

            
            <div>
                <img height="700px" alt="homepage logo" src="./that.png" />
                <img height="700px" alt="homepage logo" src="./revisedtwo.png" />
                <img height="700px" alt="homepage logo" src="./revisedthree.png" />
                <br></br>
                    <p>
                        {/* Welcome to RAK-it<br></br>
                        We believe kindness makes the world go round.<br></br>
                        Click on start to begin receving randomm reminders for little acts of kindness :) */}
                    </p>
                    {/* <Link to="/categories"><Button class="ui massive button">Start</Button></Link> */}
                    <Link to="/categories">
                        <Button
                            class="ui button"
                            size="massive">
                                Let's Begin
                                </Button>
                                </Link>
                    <p>.
                        

                    </p>
                {/* <button class="ui tiny button" onClick={() => this.props.removeHandler(this.props.kindnessObj.id)}>Delete</button><></> */}
                    
            </div>
        )
    }
}

