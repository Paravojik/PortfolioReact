import { useMemo } from 'react'
import './MainSkils.css'
import SkillBox from './SkillBox'
import skilsJson from './skills.json'

function MainSkils(props){

    let arrOfSkils=useMemo(()=>skilsJson,[])
    console.log(arrOfSkils)

 

   return(
    <div className="MainSkils">
        {arrOfSkils.map((item)=>{
            let currentKey='SkillBox'+item.id
            return(
                <SkillBox key={currentKey} wichVisiblePage={props.wichVisiblePage}   value={item}/>
            )
        })}
        
    </div>
   )
}
export default MainSkils