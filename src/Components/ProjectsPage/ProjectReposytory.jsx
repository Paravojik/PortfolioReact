import './ProjectsPage.css'
function ProjectReposytory({item}){
    // console.log(item)
    // html_url, language,updated_at, topics, description,homepage,
  
    return(
        <div className="ProjectReposytory">
            <div className="ProjectReposytory__left">
            <div className="ProjectReposytory__left__name">
            {item.name}
            </div>
           {item.description?
            <div className="ProjectReposytory__left__description">Description: <span className="ProjectReposytory__left__description__black">
                {item.description}</span> </div>:
            null}
            <div className="ProjectReposytory__left__languages">
                <div className="ProjectReposytory__left__languages__row"> Language: <div className="ProjectReposytory__left__languages__bigger">{item.language}</div>; </div>
           <div className="ProjectReposytory__left__languages__row"> Last updated: <div className="ProjectReposytory__left__languages__bigger">{item.updated_at.substr(0,10)}</div></div>
           
            </div>
            <div className="ProjectReposytory__left__topics">
                Topics: 
            {(item.topics.length>0)?item.topics.map(item=>{
                let topic='topicName'+item
                return(
                    <div key={topic} className="ProjectReposytory__left__topic">
                        {item}
                    </div>
                )
            }):'There is no topics'}
            </div>
            </div>
            <div className="ProjectReposytory__right">
                <a className='ProjectReposytory__right__see' href={item.homepage} target="_blank" rel="noreferrer">See project</a>
                <a className='ProjectReposytory__right__see' href={item.html_url} target="_blank" rel="noreferrer" >See code</a>
            </div>
         
            
        </div>
    )
}
export default ProjectReposytory