import './SocialMedia.css'
import tele from './img/telegram.png'
import mail from './img/gmail.png'
import link from './img/linkedIn.png'
function SocialMedia(){
    return(
        <div className="SocialMedia">
             <a className='SocialMedia__icon' href="https://t.me/paravojik" target='_blank' rel="noreferrer"><img className='SocialMedia__icon__img' src={tele} alt="" /></a>
            <a className='SocialMedia__icon' href="mailto: muhaloiko.vitalik@gmail.com" target='_blank' rel="noreferrer"><img className='SocialMedia__icon__img' src={mail} alt="" /></a>
            <a className='SocialMedia__icon' href="https://www.linkedin.com/in/%D0%B2%D1%96%D1%82%D0%B0%D0%BB%D1%96%D0%B9-%D0%BC%D0%B8%D1%85%D0%B0%D0%BB%D0%BE%D0%B9%D0%BA%D0%BE-0a355b278/" target='_blank' rel="noreferrer"><img className='SocialMedia__icon__img' src={link} alt="" /></a>
        </div>
    )
}
export default SocialMedia