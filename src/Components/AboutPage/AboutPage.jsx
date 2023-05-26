import SocialMedia from '../UI/SocialMedia/SocialMedia'
import './AboutPage.css'
import photo from './img/Photo__myself.jpg'
function AboutPage(props){
    let arrOfStudy=[
        {id:1,
        name:'It Start',
        about:'Basic knowledge of Photoshop and Word',
        date:'09/2020 - 12/2020'},
        {id:2,
            name:'Creator It academy',
            about:'Web Development (HTML,CSS,JS,React)',
            date:'02/2021 - 5/2023'}
    ]
    let arrOfCertificates=[
        {id:1,
        name:'First Certificate',
        about:'Something that i learned',
        date:'date when learned',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJhhH35bMSWjArdUIc_5yPxTjCXyjV44drybW-emW&s'},
        {id:2,
            name:'First Certificate',
            about:'Something that i learned',
            date:'date when learned',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJhhH35bMSWjArdUIc_5yPxTjCXyjV44drybW-emW&s'}
    ]
    return(
        <div id='AboutPage' className="AboutPage page" style={(props.wichVisiblePage===2) ? {display:"flex"}:{display:"none"} }>
                 <div className="AboutPage__text text__withGradient" >My Projects</div>
            <div className="AboutPage__main">
            <div className="AboutPage__left">
               <img className='AboutPage__left__photo' src={photo} alt="" />
                <div className="AboutPage__left__name">Vitalii Mykhaloiko</div>
                <SocialMedia/>
            </div>
            <div className="AboutPage__right">
            <div className="AboutPage__right__sec">
                <div className="AboutPage__right__main">About</div>
                <div className="AboutPage__right__about__info">My name is Vitalik. I’m 15. I’m living in Sambir. 
                I’m studying at Sambir lyceum. 
                I’m very interested in programming. 
                I really want to try myself in your company.</div>
            </div>
            <div className="AboutPage__right__sec">
            <div className="AboutPage__right__main">Study</div>
            <div className="AboutPage__right__sec__elements">
                
                    {arrOfStudy.map(item=>{
                     return(
                        <div className="AboutPage__right__sec__ele" key={item.id}>
                        <div className="AboutPage__right__sec__ele__name">{item.id}. {item.name}</div>
                        <div className="AboutPage__right__sec__ele__about">{item.about}</div>
                        <div className="AboutPage__right__sec__ele__date">{item.date}</div>
                    </div>
                     )
                    })}
               
            </div>
            </div>
            <div className="AboutPage__right__sec">
            <div className="AboutPage__right__main">Certificates</div>
            <div className="AboutPage__right__sec__elements">
                
                {arrOfCertificates.map(item=>{
                 return(
                    <div className="AboutPage__right__sec__ele AboutPage__background" key={item.id}>
               
                            <img className='AboutPage__right__sec__ele__left' src={item.img} alt="" />
                    
                        <div className="AboutPage__right__sec__ele__right">
                        <div className="AboutPage__right__sec__ele__name">{item.name}</div>
                    <div className="AboutPage__right__sec__ele__about">{item.about}</div>
                    <div className="AboutPage__right__sec__ele__date">{item.date}</div>
                        </div>
                
                </div>
                 )
                })}
           
        </div>
            </div>
            </div>
            </div>
         
        
        </div>
    )
}
export default AboutPage