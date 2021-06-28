import React from 'react';
import PropTypes from 'prop-types';
import M from "materialize-css/dist/js/materialize";
import { connect } from 'react-redux';
import { deleteMember } from '../../actions/actions';


const Member = ({member:{id,firstname,lastname},deleteMember}) => {

    const deleteitem=()=>{
        deleteMember(id)
        console.log("working")
    }

    return (
        <>
        <li className="collection-item">
            {firstname}{" "}{lastname}
            <i className="tiny material-icons secondary-content text-red red-text" style={{cursor:"pointer"}} onClick={deleteitem}>delete</i>
        </li>
        </>
    )
}

Member.propTypes = {
 member: PropTypes.object.isRequired
}


const mapDispatchToProps=(dispatch)=>{
return {
    deleteMember: (id)=>{dispatch(deleteMember(id))}
}

}

export default connect(null,mapDispatchToProps)(Member);
