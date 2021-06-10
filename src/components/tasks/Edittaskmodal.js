import React, {useState} from 'react';
import M from "materialize-css/dist/js/materialize";

 const Edittaskmodal=()=> {

    const [message,setMessage]= useState("");
    const [member,setMember]=useState("");
    const [attention, setAttention]= useState(false);


    const onSubmitinfo=()=>{
        if(message===""||member===""){
            M.toast({html:"please enter your task name and select your name."})
        } else {
            console.log(member,message,attention);
            //clear field
            setMessage("");
            setMember("");
            setAttention(false);
        }
    }

    return (
        <div id="edit-task-modal" className="modal" style={modalStyle}>
                <div className="modal-content">
                    <h6 style={{marginBottom:"20px"}}> <strong>Edit or change the task detail:</strong></h6>
                
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



export default Edittaskmodal;