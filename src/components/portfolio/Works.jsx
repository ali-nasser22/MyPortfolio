// import React from 'react'
import { useEffect, useState } from "react"
import { projectData } from "./Data"
import { projectNav } from "./Data"
import WorksItems from "./WorksItems"
const Works = () => {
    const [item,setItem] = useState({name:'all'});
    const [projects,setProjects] =useState([]);
    const [active,setActive]=useState(0);

    useEffect(()=>{
        if(item.name === 'all'){
            setProjects(projectData)
        }
        else{
            const newProject = projectData.filter((project)=>{
                return project.category === item.name;
            });
            setProjects(newProject);
        }
    },[item]);
    const handleClick = (e,index)=>{
        setItem({name:e.target.textContent});
        setActive(index);
    }
  return (
    <>
    <div className="work-filters">
    {projectNav.map((item,index)=>{
        return <span onClick={(e)=>{
            handleClick(e,index);
        }} key={index} className={`${active === index ? 'active-work work-item':'work-item'}`}>{item.name}
        
        </span>
        
    })}
   </div>
    <div className="work-container container grid-one">
        {projects.map((item)=>{
            return <WorksItems item={item} key={item.id}/>
        })}
    </div>
    </>

  )
}

export default Works
