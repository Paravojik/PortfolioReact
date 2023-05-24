import './SocialMedia.css'
import tele from './img/telegram.webp'
import mail from './img/gmail.png'
function SocialMedia(){
    return(
        <div className="SocialMedia">
            <a className='SocialMedia__icon' href="mailto: muhaloiko.vitalik@gmail.com" target='_blank' rel="noreferrer"><img className='SocialMedia__icon__img' src={mail} alt="" /></a>
            <a className='SocialMedia__icon' href="https://t.me/paravojik" target='_blank' rel="noreferrer"><img className='SocialMedia__icon__img' src={tele} alt="" /></a>
            
        </div>
    )
}
export default SocialMedia