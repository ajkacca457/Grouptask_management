import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getMembers } from '../../actions/actions';


const Memberselect = ({getMembers, members:{members,loading}}) => {

    console.log(members);

    useEffect(() => {
    
        getMembers();
        
    }, [])

    return (
     !loading && members!==null && members.map(member=>(
         <option key={member.id} value={`${member.firstname} ${member.lastname}`} >
             {member.firstname} {member.lastname}
         </option>
     ))
    )
}


const mapStateToProps=(state)=>{

return {
members:state.members
}


}


export default connect(mapStateToProps,{getMembers})(Memberselect);
