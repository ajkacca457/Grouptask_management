import React from 'react'
import PropTypes from 'prop-types'

const Member = ({member:{firstname, lastname}}) => {
    
    const deletemember=()=>{
        console.log("will be deleted")
    }

    return (
        <li className="collection-item">
            {firstname}{" "}{lastname}
            <i className="tiny material-icons secondary-content text-red red-text" style={{cursor:"pointer"}} onClick={deletemember}>delete</i>
        </li>
    )
}

Member.propTypes = {
 member: PropTypes.object.isRequired
}

export default Member;
