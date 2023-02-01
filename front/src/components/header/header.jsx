import s from "./header.module.css"
import image from "../../assets/nft.png"
import 'animate.css';
import { useState } from "react";

export default function Header({setColorFondo, colorFondo}) {
    const [clickme, setClickme] = useState(false)
    let [index, setIndex] = useState(0)
    let frases = ["a web3","an art","a global","a sui","an army", "a troop"]
    let colors = ["beige","skyblue","pink","violet", "orange","green"]
    const handleClick = ()=>{
        setClickme(true)
        setIndex((prevIndex)=>{
            if(prevIndex === 5){
                // setColorFondo("beige")
                return 0
            } 
            else{ 
                return ++prevIndex
            }
        })
        index === 5 ? setColorFondo(colors[0]) : setColorFondo(colors[++index])
    }
    return (
        <header className={s[colorFondo]}>
            <div className={s.container}>
                <div className={s.imageContainer}>
                    <span className={s.coming} onClick={()=>handleClick()}>{!clickme ? "click me" : "coming soon"}</span>
                    <img className={s.image} src={image} alt="nft" onClick={()=>handleClick()} />
                </div>
                <div className={s.textContainer}>
                    <span className={s.text}>{frases[index]}</span>
                    <span className={s.text}>MOVEMENT</span>
                </div>
            </div>
        </header>
    )
}