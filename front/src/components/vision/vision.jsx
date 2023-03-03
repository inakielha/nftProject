import s from "./vision.module.css"
import { BsTwitter } from "react-icons/bs"
import { IconContext } from "react-icons";
import { useState } from "react";

export default function Vision({colorFondo}) {
    const [hover, setHover] = useState(true)
    const handleHoverin = ()=>{
        setHover(false)
    }
    const handleHoverout = ()=>{
        setHover(true)
    }
    let text = "@CantoMushies%20🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO🍄☢%20POISON%20CANTO"
    return (
        <section className={s.section}>
            <div className={s.container}>
            <div className={s.visionContainer}><span className={s.vision}>vision</span></div>
            <div className={s.parrafContainer}>
                <div className={s.parraf}><span>Canto Mushies</span> is a collection of venom mushrooms with the most toxic community. Our goal is to poison all <span>Canto ecosystem.</span></div> 
                <div className={s.parraf2}><span>Join</span> this movement and <span>share the vision</span></div>
            </div>
           
            <div className={s[colorFondo]} onClick={()=>window.open("https://twitter.com/intent/tweet?text="+text)} onMouseOver={()=>handleHoverin()} onMouseLeave={()=>handleHoverout()}>

                {/* <IconContext.Provider value={{ className: "global-class-name", size: "2.5em" }}> */}
                    {/* <div><BsTwitter /></div> */}
                    <span className={s.share}>{hover ? "share the vision" : "Poison Canto"}</span>
                {/* </IconContext.Provider> */}
            </div>
            </div>
        </section>
    )
}