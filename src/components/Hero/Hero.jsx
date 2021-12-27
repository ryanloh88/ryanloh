import React,{useState} from 'react'

function Hero(){
    const easterText= "oops i dont think is suppose to be here, click anywhere on the screen for a change of view"
    const [image,setImage] = useState(140)
    const [easter,setEaster] =useState(easterText)

    
    function importAll(r) {
        let images = {};
        r.keys().map(item => {return images[item.replace('./', '')] =  r(item); });
        return images;
    }
    const images = importAll(require.context('../../assets', false, /\.jpeg/));
    const img = `pic${image}.jpeg`
    function changePic(){

        const num =Math.floor(Math.random() * 112 +140)
        setImage(num)
        if (num === 140){
            setEaster('why is this still here? There must be a glitch.')
        }else{
            setEaster("")
        }
        console.log(num)
    }
    const style ={ranHero:{
            backgroundImage:`url(${images[img]})`
        }
    }
    return (
        <div 
        style = {style.ranHero}
        onClick={()=>{
            changePic()
        }} className="Hero" id ="home-section">

        <div className="overlay">
            <h1 >Hello I'm Ryan Loh.</h1>
            <p >An aspiring web developer</p>
             <p  className ="easter">{easter}</p>        
        </div>
       

        </div>
    )
}

export default Hero