import React,{useState,useEffect} from 'react'

const Tasks=()=> {

    const [tasks,setTasks]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        getTasks();
        console.log(tasks)
        console.log(loading)
    },[])


    const getTasks= async ()=>{
        let response= await fetch("/tasks");
        let data=await response.json();
        setLoading({
            loading:true
        })

        setTasks({
            tasks:data
        })
    }



    return (
        <div>
            
            <p>All the tasks will be here</p>


        </div>
    )
}


export default Tasks;