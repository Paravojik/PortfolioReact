import { useEffect } from 'react'
import './MainSkils.css'
import { useState } from 'react'
import ClosePage from '../../ClosePage/ClosePage';
// import IMAGES from './img/images'
function SkillBox(props){
    // console.log(props.value)
    let [currentTop,setCurrentTop]=useState([]);
    let [currentWidth,setCurrentWidth]=useState([]);
    let [isVisibleInfo,setIsVisibleInfo]=useState(false)

    useEffect(function(){
        let interval
        clearInterval(interval)
       interval= setInterval(function(){
        let curHeight =Math.floor(Math.random()*100)
        setCurrentTop((curHeight<5)? curHeight+5:curHeight-5)
        let curWidth =Math.floor(Math.random()*100)
        setCurrentWidth((curWidth<5)? curWidth+5:curWidth-5)
            // console.log(props.value)
        },Math.random()*5000+5000)
  
    },[])
    useEffect(function(){
        let curHeight =Math.floor(Math.random()*100)
        setCurrentTop((curHeight<5)? curHeight+5:curHeight-5)

        let curWidth =Math.floor(Math.random()*100)
        setCurrentWidth((curWidth<5)? curWidth+5:curWidth-5)
        setTimeout(function(){
            curHeight =Math.floor(Math.random()*100)
            setCurrentTop((curHeight<5)? curHeight+5:curHeight-5)
            curWidth =Math.floor(Math.random()*100)
        setCurrentWidth((curWidth<5)? curWidth+5:curWidth-5) 
        },100)
    },[props.wichVisiblePage])
    function openSkill(){
        setIsVisibleInfo(true)
        
        document.getElementById('MainPage__main').style.zIndex='0'
     
    }
    function closeSkill(close){
        // setIsVisibleInfo(close)
        setTimeout(function(){
            setIsVisibleInfo(close)
            document.getElementById('MainPage__main').style.zIndex='1'
         
        },10)
        console.log('fs',isVisibleInfo)
    }
    // let zm='./img/html.png'
    // let logo='IMAGES'+'.'+props.value.img

    return(
        <div className={(isVisibleInfo)?['SkillBox','SkillBox__open'].join(' '):"SkillBox"} style={(isVisibleInfo)?null:{top:currentTop+'%',left:currentWidth+'%'}} >
              <ClosePage close={closeSkill} visible={isVisibleInfo}/>
              <div className="SkillBox__main" style={(isVisibleInfo)? {width:'100%',height:'100%',borderRadius:'5px',zIndex:'3',justifyContent:'space-between',padding:"10px",cursor:"default"}:{transition:'0.5s'}} onClick={openSkill}>
              { props.value.img==='none' ? (isVisibleInfo)?null:props.value.name :<img className={(isVisibleInfo)?['SkillBox__img','SkillBox__img__open'].join(' '):"SkillBox__img"} src={props.value.img} alt="" />}
                {(isVisibleInfo)?
                <div className="SkillBox__main__visible">
        <div className="SkillBox__main__name">{props.value.name}</div>
        {props.value.info ?
              <div className="SkillBox__main__info">
              <div className="SkillBox__main__info__text">Some information:</div>
              <div className="SkillBox__main__info__info">
              {props.value.info}
              </div>
           </div>:null}
           {props.value.date ?
              <div className="SkillBox__main__info">
              <div className="SkillBox__main__info__text">Date when started:</div>
              <div className="SkillBox__main__info__info">
              {props.value.date}
              </div>
           </div>:null}
  
                </div>
        
               
                :null}
              </div>
          
        
        </div>
    )
}
export default SkillBox