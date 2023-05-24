import { useState } from 'react'
import LoaderComponent from '../LoaderComponent/LoaderComponent'
import './Header.css'
function Header(props){
    let [isVisibleLoader,setIsVisibleLoader]=useState(false)
    let [loaderChange,setLoaderChange]=useState(false)
    // useEffect(()=>{
    //     LoaderClick(1)
    // },[])
    function LoaderClick(value){
        setIsVisibleLoader(true)
        setLoaderChange(!loaderChange)
        setTimeout(function(){
            props.wichVisible(value)
            setIsVisibleLoader(false)
            // console.log(isVisibleLoader)
        },2400)
       
    }
    return(
        <div className="Header">
            <div className="Header__left">V.Mykhaloiko</div>
            <div className="Header__right">
                <div className="Header__right__textPage" onClick={()=>LoaderClick(1)}>Home</div>
                <div className="Header__right__textPage" onClick={()=>LoaderClick(2)}>About</div>
                <div className="Header__right__textPage" onClick={()=>LoaderClick(3)}>Projects</div>  
            </div>
            <LoaderComponent loaderChange={loaderChange} isVisibleLoader={isVisibleLoader}/>
        </div>
    )
}
export default Header