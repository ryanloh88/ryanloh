import React from "react"
import NavBar from './NavBar/Navbar'
import Hero from './Hero/Hero'
import About from './About'
import Projects from "./projects/Projects.jsx"
import Footer from "./Footer"
import Skills from "./Skills"
import Contact from "./Contact"
import {projectItems} from './projects/projectsItem'
function App(){
    return(
        <div>
        <NavBar />
        <Hero></Hero>
        <About />
        
            {projectItems.map((project,index)=>{
                return(<Projects 
                num={index}
                key={index}
                for={project.for}
                initialTitle={project.projects}
                intro={project.firstDesc}
                title={project.title} 
                images={project.images}
                class={project.class}
                desc = {project.description} 
                tech = {project.tech}
                github = {project.github}/>)
            })}

        <Skills />
        <Contact></Contact>

        <Footer></Footer>

        </div>
    )
}

export default App