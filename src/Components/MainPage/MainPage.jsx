import TypedText from '../UI/TypedText/TypedText'
import './MainPage.css'
import MainSkils from './MainSkils/MainSkils'
function MainPage(props){
    console.log(props.wichVisiblePage)
    return(
        <div className="MainPage page" style={(props.wichVisiblePage===1) ? {display:"flex"}:{display:"none"} }>
                  <MainSkils wichVisiblePage={props.wichVisiblePage}/>
            {/* Hello I'm Vitalik */}
            <div className="MainPage__text" id='MainPage__text'>
                <div className="MainPage__text__typed">
                <TypedText text={["I'm Vitalik","I'm Programmer","I'm Front-End Dedeloper","I'm Dedeloper"]}/>
                </div>

            </div>
  
        </div>
    )
}
export default MainPage