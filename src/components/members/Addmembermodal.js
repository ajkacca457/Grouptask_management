import React, {useState} from 'react';
import M from "materialize-css/dist/js/materialize";

 const Addmembermodal=()=> {

    const [firstname,setFirstname]= useState("");
    const [lastname,setLastname]=useState("");
    

    const onSubmitinfo=()=>{
        if(firstname===""||lastname===""){
            M.toast({html:"please enter your name properly"})
        } else {
            console.log(firstname,lastname);
            //clear field
            setFirstname("");
            setLastname("");
        }
    }

    return (
        <div id="member-modal" className="modal" style={modalStyle}>
                <div className="modal-content">
                    <h6 style={{marginBottom:"20px"}}> <strong>Add new member to the task:</strong></h6>
                
                <div className="row">
                    <div className="input-field">
                    <input 
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={(e)=>{
                        setFirstname(e.target.value)
                    }}
                    />

                    <label htmlFor="firstname" className="active">
                        First Name:
                    </label>

                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                    <input 
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={(e)=>{
                        setLastname(e.target.value)
                    }}
                    />

                    <label htmlFor="firstname" className="active">
                        Last Name:
                    </label>

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
    height:"40%"
}



export default Addmembermodal;