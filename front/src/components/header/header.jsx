import s from "./header.module.css"
import image1 from "../../assets/Asset 1.png"
import image2 from "../../assets/Asset 2.png"
import image3 from "../../assets/Asset 3.png"
// import image from "../../assets/nft.png"
import 'animate.css';
import { useState } from "react";

export default function Header({ setColorFondo, colorFondo }) {
    const [clickme, setClickme] = useState(false)
    let [index, setIndex] = useState(0)
    // let images = [image1, image2,image3, image4, image5, image6]
    let images = [image1,image2,image3]
    // let frases = ["a web3","an art","a global","a Canto","an infected", "an epidemic"]
    let frases = ["Canto", "web3", "global", "art", "Brains", "Epidemic"]
    let colors = ["green", "beige", "skyblue", "pink", "violet", "orange"]

    const handleClick = ()=>{
        setClickme(true)
        setIndex((prevIndex)=>{
            if(prevIndex === 2){
                // setColorFondo("beige")
                return 0
            } 
            else{ 
                return ++prevIndex
            }
        })
    }
    return (
        <header className={s.section}>
            <div className={s.shadow}>
                <div className={s.container}>
                    <div className={s.imageContainer} onClick={() => handleClick()}>
                        <span className={s.coming}>{!clickme ? "click me" : "coming soon"}</span>
                        <img className={s.image} draggable={false} src={images[index]} alt="nft" />
                    </div>
                    <div className={s.textContainer}>
                        <span className={s.text}>POISON CANTO</span>
                        {/* <span className={s.text}>CANTO</span> */}
                    </div>
                </div>
            </div>
        </header>
    )
}