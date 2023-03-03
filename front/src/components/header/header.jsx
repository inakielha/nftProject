import s from "./header.module.css"
// import image1 from "../../assets/1.png"
// import image2 from "../../assets/2.png"
// import image3 from "../../assets/3.png"
// import image4 from "../../assets/4.png"
// import image5 from "../../assets/5.png"
// import image6 from "../../assets/6.png"
import image from "../../assets/maxHype.png"
// import image from "../../assets/nft.png"
import 'animate.css';
import { useState } from "react";

export default function Header({ setColorFondo, colorFondo }) {
    const [clickme, setClickme] = useState(false)
    let [index, setIndex] = useState(0)
    // let images = [image1, image2,image3, image4, image5, image6]
    let images = [image]
    // let frases = ["a web3","an art","a global","a Canto","an infected", "an epidemic"]
    let frases = ["Canto", "web3", "global", "art", "Brains", "Epidemic"]
    let colors = ["green", "beige", "skyblue", "pink", "violet", "orange"]

    return (
        <header className={s.section}>
            <div className={s.shadow}>
                <div className={s.container}>
                    <div className={s.imageContainer}>
                        <img className={s.image} draggable={false} src={image} alt="nft" />
                    </div>
                    <div className={s.textContainer}>
                        <span className={s.text}>POISON</span>
                        <span className={s.text}>CANTO</span>
                    </div>
                </div>
            </div>
        </header>
    )
}