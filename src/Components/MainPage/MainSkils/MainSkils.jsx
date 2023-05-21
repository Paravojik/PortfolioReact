import './MainSkils.css'
import SkillBox from './SkillBox'


// import html from './img/html.png'
// import css from './img/css.png'
// import react from './img/react.png'
function MainSkils(props){
    // let [arrOfSkils,setArrOfSkils]=useState([
    //     {id:0,name:'html'},
    //     {id:1,name:'css'},
    //     {id:2,name:'react'},
    // ])
    let arrOfSkils=([
        {id:0,date:'02/2020',img:'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png',info:`It's basic technology that I learned in Creator It Academy. It took me nearly half year.`,name:'HTML'},
        {id:1,img:'none',name:'CSS'},
        {id:2,img:'none',name:'React'},
    ])
 

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