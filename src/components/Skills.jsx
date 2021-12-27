import React from 'react'
function Skills(){
    
    const fEnd =["HTML5","CSS3","Javascript","React","jQuery","ejs"]
    const bEnd=["NodeJS","ExpressJs","Python"]
    const db=["mySQL","mongoDB","mongoose"]
    const General=["Swift5", "RESTful API","Heroku"]
    const skillsList = [...fEnd,...bEnd,...db,...General]
    
    
    
    return (
        <div id="skills-section">
        <h3 className="skillsTitle">Technologies</h3>
        <div className="grid-container">
        {skillsList.map((skill,index) =>{
            return (
                    <p className="tech-item" key ={index}>{skill}</p>)
                 })}
          </div>  
        </div>
    )


}
export default Skills