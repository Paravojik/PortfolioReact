// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import './LoaderComponent.css'
import LoaderComponentElement from './LoaderComponentElement'
import logo from './img/Imba.jpg'
function LoaderComponent(props){
    // console.log(props.isVisibleLoader)
    let amountOfElemet=[1,2,3,4,5,6]
    let [whichElemtIsVisible,setWhichElemtIsVisible]=useState(0)
//     let [currentHeight,setCurrentHeight]=useState(-10)
// useEffect(()=>{
//     // setCurrentHeight(currentHeight++)
//     let x=setInterval(function(){
//         setCurrentHeight(currentHeight++)
//     },1000)
//     if(currentHeight>=6){
//         clearInterval(x)
//     }

//     console.log('curHe',currentHeight)
// },[currentHeight])
useEffect(function(){
  
        
       let xInterval= setInterval(function(){
        if(props.isVisibleLoader===false){
            clearInterval(xInterval)
        }
   
        setWhichElemtIsVisible(whichElemtIsVisible++)
     
        if(whichElemtIsVisible>amountOfElemet.length+1){
            clearInterval(xInterval)
            setTimeout(function(){
                setWhichElemtIsVisible(0)
                
        
            },1000)
            
        }
       },200)
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[props.loaderChange])
    return(
        <div className="LoaderComponent" style={(props.isVisibleLoader===true)?{zIndex:'5',backgroundColor:'rgba(41, 41, 41, 0.4)'}:{zIndex:'-1',backgroundColor:'transparent'}}>
            {amountOfElemet.map(item=>{
                let currentKey='LoaderComponentElement'+item
                return(
                    <LoaderComponentElement key={currentKey} currentEl={whichElemtIsVisible} id={item}/>
                )
            })}
            <img className='LoaderComponent__logo' style={(whichElemtIsVisible>=4) ? {opacity:'1'}:{opacity:'0'}} src={logo} alt="" />
      
            
        </div>
    )
}
export default LoaderComponent