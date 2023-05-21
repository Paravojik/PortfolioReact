// import './ProjectsPage.css'
function ProjectsPage(props){
    return(
        <div className="ProjectsPage page" style={(props.wichVisiblePage===3) ? {display:"flex"}:{display:"none"} }>
            Projects
        
        </div>
    )
}
export default ProjectsPage