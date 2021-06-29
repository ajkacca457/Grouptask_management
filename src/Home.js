import React from 'react';
import Tasks from "./components/tasks/Tasks";
import Addbtn from "./components/layout/Addbtn";
import Addtaskmodal from "./components/tasks/Addtaskmodal";
import Edittaskmodal from "./components/tasks/Edittaskmodal";
import Addmembermodal from "./components/members/Addmembermodal";
import Memberlist from "./components/members/Memberlist";
import Searchbar from "./components/layout/Searchbar";


export const Home = () => {
    return (
        <>
        <div className="appcontent">
        <Searchbar/>
        <Tasks/>
  
        </div>
        <Addbtn/>
        <Addtaskmodal/>
        <Edittaskmodal/>
        <Addmembermodal/> 
        <Memberlist/>
        </>
    )
}


export default Home;