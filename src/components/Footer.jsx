
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer(){
    return(
        <footer>
            <h1>Check out my socials</h1>
            <div className="socials">
             <a target="_blank"  href=" https://www.linkedin.com/in/ryanlohyr/"><LinkedInIcon className="icon"></LinkedInIcon></a>
             <a target="_blank"  href="mailto:ryanloh29@gmail.com"><EmailIcon className="icon"></EmailIcon> </a>
             <a target="_blank"  href="https://github.com/ryanloh88"><GitHubIcon className="icon"></GitHubIcon></a>
            
            </div>
            
        </footer>
    )

}

export default Footer