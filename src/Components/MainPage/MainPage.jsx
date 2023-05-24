import TypedText from '../UI/TypedText/TypedText'
import './MainPage.css'
import MainSkils from './MainSkils/MainSkils'
import myCv from './CV/MYCV.pdf'
import downoload from './CV/downoloadIcon.png'
function MainPage(props){
 
    return(
        <div className="MainPage page" style={(props.wichVisiblePage===1) ? {display:"flex"}:{display:"none"} }>
                  <MainSkils wichVisiblePage={props.wichVisiblePage}/>
            {/* Hello I'm Vitalik */}
            <div className="MainPage__text" id='MainPage__text'>
                <div className="MainPage__text__typed text__withGradient">
                <TypedText text={["I'm Vitalik","I'm Programmer","I'm Front-End Dedeloper","I'm Dedeloper"]}/>
                </div>

            </div>
            <a className='MainPage__downoload' id='MainPage__downoload' href={myCv} download='Cv Vitalii Mykhaloiko' ><img className='MainPage__downoload__img' src={downoload} alt="" /> Downolad CV </a>
        </div>
    )
}
export default MainPage