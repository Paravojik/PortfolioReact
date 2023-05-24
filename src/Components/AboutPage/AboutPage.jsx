import SocialMedia from '../UI/SocialMedia/SocialMedia'
import './AboutPage.css'
import photo from './img/Photo__myself.jpg'
function AboutPage(props){
    return(
        <div className="AboutPage page" style={(props.wichVisiblePage===2) ? {display:"flex"}:{display:"none"} }>
                 <div className="AboutPage__text text__withGradient" >My Projects</div>
            <div className="AboutPage__main">
            <div className="AboutPage__left">
               <img className='AboutPage__left__photo' src={photo} alt="" />
                <div className="AboutPage__left__name">Vitalii Mykhaloiko</div>
                <SocialMedia/>
            </div>
            <div className="AboutPage__right">
            <div className="AboutPage__right__about">
                <div className="AboutPage__right__main">About</div>
                <div className="AboutPage__right__about__info">My name is Vitalik. I’m 15. I’m living in Sambir. 
                I’m studying at Sambir lyceum. 
                I’m very interested in programming. 
                I really want to try myself in your company.</div>
            </div>
            </div>
            </div>
         
        
        </div>
    )
}
export default AboutPage