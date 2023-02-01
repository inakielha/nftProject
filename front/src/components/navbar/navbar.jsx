import {GiEagleEmblem} from "react-icons/gi"
import {BsTwitter} from "react-icons/bs"
import {FaDiscord} from "react-icons/fa"
import { IconContext } from "react-icons";
import {IoStorefrontSharp} from "react-icons/io5"
import {MdMilitaryTech} from "react-icons/md"
import s from "./navbar.module.css"
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar({colorFondo}){
    const [style,setStyle]= useState("")
    // console.log(colorFondo)
    let navStyle = colorFondo + style
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            let activeClass = colorFondo;
         if(window.scrollY > 0){
             activeClass = colorFondo + "Move";
             setStyle("Move")
         }else setStyle("")
        })
    },[])
    console.log(navStyle)
    return(
        <nav className={s[navStyle]}>
            <IconContext.Provider value={{className: s.icon,size:"2.5em" }}>

            <div className={s.container}>
                <div><GiEagleEmblem/></div>
                <div className={s.redes}>
                    <div className={s.iconContainer} data-tool="Twitter"><BsTwitter/><div data-tool-tip="Twitter" className={s.twitter}></div></div>
                    <div className={s.iconContainer} data-tool="Discord"><FaDiscord/><div data-tool-tip="Discord" className={s.discord}></div></div>
                    <div className={s.iconContainer} data-tool="Projects Ranking"><MdMilitaryTech/><div data-tool-tip="Project Ranking" className={s.rank}></div></div>
                    <div className={s.iconContainer} data-tool="Marketplace"><IoStorefrontSharp/><div data-tool-tip="Marketplace" className={s.marketplace}></div></div>
                </div>
            </div>
            </IconContext.Provider>
        </nav>
    )
}