import React,{useState,useEffect} from 'react';
import Member from "./Member";
import { connect } from 'react-redux';
import { getMembers } from '../../actions/actions';


const Memberlist=({loading,members,getMembers})=> {

    useEffect(() => {
        getMembers();
    },[])

    return (
        <div id="member-list-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
            <h5 style={{marginBottom:"20px"}}> <strong>List of members in group:</strong></h5>
            <ul className="collection"> 
            {!loading && members!==null && members.map((member)=>{
                return(        
                 <Member key={member.id} member={member}/>
                 )})}

            </ul>

        </div>

    </div>


    )
}

const mapStateToProps=(state)=>{
    console.log(state.members)
    return {
        members:state.members.members,
        loading:state.members.loading
    }
}


const mapDispatchToProps=(dispatch)=>{
return {
getMembers: ()=>{dispatch(getMembers())}
}
}


const modalStyle={
    width: "50%",
    height:"40%"
}

export default connect(mapStateToProps,mapDispatchToProps)(Memberlist);