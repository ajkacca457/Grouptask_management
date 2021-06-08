import React from 'react'


const Addbtn = () => {
    return (
        <div class="fixed-action-btn">
  <a href="#add-task-modal" class="btn-floating btn-large olive">
    <i class="large material-icons">add</i>
  </a>
  <ul>
    <li><a href="#task-list-modal" class="btn-floating orange darken-3"><i class="material-icons">folder</i></a></li>
    <li><a href="#member-modal" class="btn-floating light-blue lighten-1"><i class="material-icons">person_add</i></a></li>
  </ul>
</div>
    )
}


export default Addbtn;