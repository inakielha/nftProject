import {GiEagleEmblem} from "react-icons/gi"
import {BsTwitter} from "react-icons/bs"
import {FaDiscord} from "react-icons/fa"
import { IconContext } from "react-icons";
import {IoStorefrontSharp} from "react-icons/io5"
import {MdMilitaryTech} from "react-icons/md"
import s from "./navMushie.module.css"
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png"

export default function NavMushie({colorFondo}){
    const [style,setStyle]= useState("")
    const navigate = useNavigate()
    let navStyle = "transparent" + style
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            let activeClass = colorFondo;
         if(window.scrollY > 0){
             activeClass = "transparent" + "Move";
             setStyle("Move")
         }else setStyle("")
        })
    },[])
    console.log(navStyle)
    return(
        <nav className={s[navStyle]}>
            <IconContext.Provider value={{className: s.icon,size:"2em" }}>
            <div className={s.container}>
                <div className={s.logoContainer}><img src={logo}/></div>
                <div className={s.redes}>
                    <div className={s.iconContainer} data-tool="Twitter"><BsTwitter onClick={()=>window.open("https://twitter.com/CantoZombs")}/><div data-tool-tip="Twitter" className={s.twitter}></div></div>
                    <div className={s.iconContainer} data-tool="Discord"><FaDiscord/><div data-tool-tip="Discord" className={s.discord}></div></div>
                    <div className={s.iconContainer} data-tool="Projects Ranking"><MdMilitaryTech onClick={()=>navigate("/projects")}/><div data-tool-tip="Project Ranking" className={s.rank}></div></div>
                    <div className={s.iconContainer} data-tool="Marketplace"><IoStorefrontSharp/><div data-tool-tip="Marketplace" className={s.marketplace}></div></div>
                </div>
            </div>
            </IconContext.Provider>
        </nav>
    )
}