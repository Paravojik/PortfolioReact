import './LoaderComponent.css'
function LoaderComponentElement(props){

    return(
        <div className="LoaderComponent__element" style={(props.id>=props.currentEl)?{transform:'translateY(100vh)'}:{transform:'translateY(0)'}}></div>
    )
}
export default LoaderComponentElement