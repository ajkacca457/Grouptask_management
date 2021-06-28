import React,{useEffect} from 'react';
import Taskitem from "./Taskitem";
import Preloader from "../layout/Preloader";
import { connect } from 'react-redux';
import {getTasks} from "../../actions/actions";


const Tasks=({tasks,loading,getTasks})=> {

    useEffect(() => {
        getTasks();
    },[])


    if(loading || tasks===null){
        return(
            <Preloader/>
        )
    }



    return (
        <div>
            <ul className="collection with-header" style={{padding:"10px"}}>
                <li className="collection-header" >
                    <h5 className="center">All performed Tasks</h5>
                </li>

                {!loading && tasks.length===0? (<p>There are no tasks</p>):
                tasks.map((item, index)=>{
                    return (
                        <Taskitem key={item.id} task={item}/>
                    )

                })}


            </ul>

        </div>
    )
}

const mapStateToProps=(state)=>{
return {
    tasks:state.tasks.tasks,
    loading:state.tasks.loading
}

}


const mapDispatchToProps=(dispatch)=>{

    return {
        getTasks: ()=>{dispatch(getTasks())}
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Tasks) ;