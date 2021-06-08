import React from 'react';
import PropTypes from 'prop-types';
import Moment from "react-moment";

const Taskitem = ({task:{id,message,attention,date,member}}) => {
    return (
        <>
            <li className="collection-item">
              <a href="#edit-task-modal" className={`modal-trigger ${attention?"red-text":"blue-text"}`}>{message}</a>          
              <br />       
              <span className="black-text">#{id}{" "}</span> 
              <span className="grey-text">was created by {" "}</span>
              <strong className="black-text">{member} {" "}</strong>
              <br/>
              <span>Created at: {" "}</span><Moment format="MMMM Do YYYY, h:mm:ss a"></Moment>

                <a href="!#" className="secondary-content red-text"><i className="material-icons">close</i></a>
        
              </li>
        </>
    )
}

Taskitem.propTypes = {
task: PropTypes.object.isRequired
}

export default Taskitem;
