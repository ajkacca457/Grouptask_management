import React from 'react';
import PropTypes from 'prop-types';
import Moment from "react-moment";
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/actions';
import M from "materialize-css/dist/js/materialize";


const Taskitem = ({task:{id,message,attention,date,member},deleteTask}) => {

  const deleteItem=()=>{
    deleteTask(id);
    M.toast({html:"Task Deleted"});
    window.location.reload();

  }

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

                <a href="!#"><i className="material-icons secondary-content red-text" onClick={deleteItem} style={{cursor:"pointer"}}>close</i></a>
        
              </li>
        </>
    )
}

Taskitem.propTypes = {
task: PropTypes.object.isRequired
}


const mapDispatchToProps=(dispatch)=>{

  return {
    deleteTask: (id)=>{dispatch(deleteTask(id))}
  }

}

export default connect(null,mapDispatchToProps)(Taskitem);
