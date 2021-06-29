import React from 'react'


const Addbtn = () => {
    return (
        <div className="fixed-action-btn">
  <a href="#add-task-modal" className="btn-floating btn-large deep-purple lighten-2 modal-trigger">
    <i className="large material-icons">add</i>
  </a>
  <ul>
    <li><a href="#member-list-modal" className="btn-floating orange darken-3 modal-trigger"><i className="material-icons">person</i></a></li>
    <li><a href="#member-modal" className="btn-floating light-blue lighten-1 modal-trigger"><i className="material-icons">person_add</i></a></li>
  </ul>
</div>
    )
}


export default Addbtn;