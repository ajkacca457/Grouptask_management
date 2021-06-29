import React, {useRef} from 'react';
import { connect } from 'react-redux';
import { searchTasks } from '../../actions/actions';


const Searchbar=({searchTasks})=> {

  const text= useRef("")


  const changeTask=(e)=>{
     searchTasks(text.current.value);

  }

    return (
    <>
     <nav>
        <div className="nav-wrapper deep-purple accent-1">
      <form>
        <div className="input-field">
          <input id="search" type="search" required placeholder="Search tasks" ref={text} onChange={changeTask}/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
            </div>
        </form>
        </div>
        </nav> 
        </>
    )
}


const mapDispatchToProps=(dispatch)=>{

  return {
      searchTasks:(text)=>{dispatch(searchTasks(text))}  
  }

}



export default connect(null,mapDispatchToProps)(Searchbar);