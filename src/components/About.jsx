import React from 'react'
import Profile from '../assets/Profile.JPG'
import Grid from '@mui/material/Grid';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
function About(){
    const firstLine = "I am currently a student who has just finished National Service  in December 2021 and is about to apply for a degree in Computer Science in Nanyang Technological University  in 2022."
    const secondLine = "I started learning about programming during my National Service and I would like to make use of the last 8 months before university to land an internship and learn more about the wonderful world of tech!"
    return(
        <div className="about" id="about-section">
        
        <h1>About Me</h1>
        <Grid container spacing={4}>
            <Grid item md={3} xs={12}><img className="profile" src={Profile} alt="Profile"/> </Grid>
            <Grid item md={7} xs={12}><p className="profile-desc">{firstLine} </p> <p className="profile-desc">{secondLine}</p><button className="button resButton" ><a target="_blank"  href="{props.github}">View Resume <HistoryEduIcon className="gicon" /></a></button></Grid>
            
            </Grid>
        </div>
    )

}

export default About