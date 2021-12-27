import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets', false, /\.png/));
// `url(${images[img]})`
function Projects(props){

   const color = props.num % 2?'#f5f5f7':'#fff'

    return(
        <div style={{backgroundColor: color}} className="projectDiv" id="project-section">
            <div className="introDiv">
            <h1>{props.initialTitle}</h1>
            <p>{props.intro}</p>
            </div>
            <h2 className="projectTitle">{props.title}</h2>
            <p className="projectDesc">{props.for}</p>
            <div className="imagesDiv">
            {props.images.map((image,index)=>{
                return (
                    <img key = {index} className={props.class} src={images[image]} alt="img"></img>
                    )
            })}
            
            </div>

            <p className="projectDesc">{props.desc}</p>
            <div className="projectDesc">
            <h3 className="techHeader">Technologies Used:</h3> 
            <div className="grid-container">
            {props.tech.map((tech,index) =>{
                return (
                    <p className="tech-item" key ={index}>{tech}</p>)
            })}
            </div>
            </div>
            <button className="button"><a target="_blank"  href={props.github}>View Source Code <GitHubIcon className="gicon" /></a></button>
            </div>

    )
}


export default Projects