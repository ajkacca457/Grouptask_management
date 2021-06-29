import React from 'react'


const About = () => {
    return (
        <div className="appcontent">
            
            <h5 className="center  light-blue lighten-1" style={{padding:"2% 1%", borderRadius:"5px", color:"white"}}>ABOUT THIS APP</h5>
            <p style={{fontSize:"110%",textAlign:"justify",padding:"1%"}}>This is a react project that uses redux for state management. The main aim of this project was to create a task manager that can be used in a group. Group member can add their name to the group. It is useful for a small group that want to do a group project. A group can delegate different tasks among group members and group members can update their status in the app. The app will show which task was performed by which group member. Group member can add new members, edit the status of their tasks and set importance of the task. Right now the app doesnt have any authentication or authorization functionalities. In future, the aim is to make it a full fledged Project management app.</p>
        </div>
    )
}

export default About;