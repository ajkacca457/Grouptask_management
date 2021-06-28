import React, {useState} from 'react';
import M from "materialize-css/dist/js/materialize";
import { connect } from 'react-redux';
import {addTask} from "../../actions/actions";


 const Addtaskmodal=({addTask})=> {

    const [message,setMessage]= useState("");
    const [member,setMember]=useState("");
    const [attention, setAttention]= useState(false);


    const onSubmitinfo=()=>{


        if(message===""||member===""){
            M.toast({html:"please enter your task name and select your name."})
        } else {
            const newTask={
                message,
                attention,
                member,
                date: new Date()              
            }

           addTask(newTask);
           M.toast({html:`new task added by ${member}`})

            //clearing field
            setMessage("");
            setMember("");
            setAttention(false);
        }
    }

    return (
        <div id="add-task-modal" className="modal" style={modalStyle}>
                <div className="modal-content">
                    <h6 style={{marginBottom:"20px"}}> <strong>Enter the task you are working on:</strong></h6>
                
                <div className="row">
                    <div className="input-field">
                    <input 
                    type="text"
                    name="message"
                    value={message}
                    onChange={(e)=>{
                        setMessage(e.target.value)
                    }}
                    />

                    <label htmlFor="message" className="active">
                        Your Task
                    </label>

                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                    <select 
                    name="member"
                    value={member}
                    onChange={(e)=>{
                        setMember(e.target.value)
                    }}
                    >
                        <option value="Bruce Wayne">Bruce Wayne</option>
                        <option value="Oliver Queen">Oliver Queen</option>
                        <option value="Barry Allen">Barry Allen</option>
                    </select>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field">
                    <p>
                    <label>
                        <input 
                        type="checkbox"
                        className="filled-in"
                        checked={attention}
                        value={attention} 
                        onChange={(e)=>{setAttention(!attention)}}
                        />
                        <span>Needs Attention</span>
                    </label>
                    </p>
                    </div>
                </div>

                </div>
        <div className="modal-footer">
       
        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={onSubmitinfo}>Submit
                <i className="material-icons right">send</i>
            </button>        
       
        </div> 

        </div>
    )
}


const modalStyle={
    width: "50%",
    height:"50%"
}




const mapDispatchToProps=(dispatch)=>{

    return {
        addTask:(task)=>{dispatch(addTask(task))}
    }
}



export default connect(null, mapDispatchToProps)(Addtaskmodal);