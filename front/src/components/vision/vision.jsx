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
    return (
        <section className={s.section}>
            <div className={s.container}>
            <div className={s.visionContainer}><span className={s.vision}>vision</span></div>
            <div className={s.parrafContainer}>
                <span className={s.parraf}>Bruh Bears is a collection of adorable bears with the most eccentric community. We love NFTs and wholeheartedly believe they will play a critical role in ensuring Aptos achieves mass adoption with us bears leading that valiant effort</span>
            </div>
            <div className={s[colorFondo]} onMouseOver={()=>handleHoverin()} onMouseLeave={()=>handleHoverout()}>
                <IconContext.Provider value={{ className: "global-class-name", size: "2.5em" }}>
                    <div><BsTwitter /></div>
                    <span className={s.share}>{hover ? "share the vision" : "join the army"}</span>
                </IconContext.Provider>
            </div>
            </div>
        </section>
    )
}