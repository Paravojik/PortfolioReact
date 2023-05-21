// import './AboutPage.css'
function AboutPage(props){
    return(
        <div className="AboutPage page" style={(props.wichVisiblePage===2) ? {display:"flex"}:{display:"none"} }>
            About
        
        </div>
    )
}
export default AboutPage