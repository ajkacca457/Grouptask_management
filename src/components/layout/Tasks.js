import React,{useState,useEffect} from 'react'

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
            <h1>Loading...</h1>
        )
    }



    return (
        <div>
            <ul className="collection-with-header">
                <li className="collection-header">
                    <h5 className="center">All performed Tasks</h5>
                </li>

                {!loading && tasks.length===0? (<p>There are no tasks</p>):
                tasks.map((item, index)=>{
                    return (
                        <li className="" key={index}>{item.message}</li>
                    )

                })}


            </ul>

        </div>
    )
}


export default Tasks;