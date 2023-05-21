import './ClosePage.css'
function ClosePage(props){
    return(
        <div className="ClosePage" onClick={()=>props.close(false)} style={(props.visible)?{display:'flex'}:{display:'none'}}></div>
    )
}
export default ClosePage