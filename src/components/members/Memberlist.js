import React,{useState,useEffect} from 'react';
import Member from "./Member";


const Memberlist=()=> {

    const [members,setMembers]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        getMembers();
    },[])


    const getMembers= async ()=>{
        setLoading(true);
        let response= await fetch("/members");
        let data=await response.json();
        setMembers(data);
        console.log(members);
        setLoading(false);
    }

    return (
        <div id="member-list-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
            <h5 style={{marginBottom:"20px"}}> <strong>List of members in group:</strong></h5>
            <ul className="collection"> 
            {!loading && members.map((member)=>{
                return(        
                 <Member key={member.id} member={member}/>
                 )})}

            </ul>

        </div>

    </div>


    )
}


const modalStyle={
    width: "50%",
    height:"40%"
}

export default Memberlist;