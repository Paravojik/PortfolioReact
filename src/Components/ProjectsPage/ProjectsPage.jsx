import { useEffect, useState } from 'react'
import ProjectReposytory from './ProjectReposytory'
import './ProjectsPage.css'
import '../../App.css'
function ProjectsPage(props){
//     const apiUrl = 'https://api.github.com/users/paravojik/repos';


    let [arrOfReposytories,setArrOfReposytories]=useState([])
    function fetchApi(){
        fetch('https://api.github.com/users/paravojik/repos?sort=created&per_page=1000')
        .then(res => res.json())
        .then(parsed => {
           
            let res=parsed.filter(function(item){  
                for(let i=0;i<item.topics.length;i++){
                    if(item.topics[i]==='portfolio'){
                        return item;
                 
                    }
                    
                }
                return false;
              
            }
             
            )
            console.log('res',res)
            setArrOfReposytories(res)
    })
        .catch(error => console.error(error));
    }
    // console.log(arrOfReposytories)
    // setTimeout(function(){
    //     console.log(arrOfReposytories)
    // },1000)
    // console.log('fetch',fetchApi())
    useEffect(()=>{
        fetchApi()
        // console.log(arrOfReposytories)
    },[])
    return(
        <div className="ProjectsPage page" style={(props.wichVisiblePage===3) ? {display:"flex"}:{display:"none"} }>
            <div className="ProjectsPage__text text__withGradient" >My Projects</div>
            <div className="ProjectsPage__list">
                {arrOfReposytories.map((item)=>{
                    return(
                        <ProjectReposytory key={item.node_id} item={item}/>
                    )
                })}
          


            </div>
        
        </div>
    )
}
export default ProjectsPage