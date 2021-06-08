import React,{useState,useEffect} from 'react';
import Taskitem from "./Taskitem";
import Preloader from "../layout/Preloader";

const Tasks=()=> {

    const [tasks,setTasks]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        getTasks();
    },[])


    const getTasks= async ()=>{
        setLoading(true);
        let response= await fetch("/tasks");
        let data=await response.json();
        setTasks(data);
        setLoading(false);
    }

    if(loading){
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


export default Tasks;