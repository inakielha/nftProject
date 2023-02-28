import {BsTwitter} from "react-icons/bs"
import { IconContext } from "react-icons";
import oso from "../../../assets/oso.png"
import s from "./individualUpcomingProject.module.css"


export default function UpcomingProject({url,hype, name,twitterFollowers,img,i,volumeToday,supply,totalVolume,floorPrice,minted}){
    let style = "par"
    i % 2 === 0 ? style = "par" : style = "inpar"
    // console.log(style)
    let twitter=twitterFollowers.replace(" Followers","")
     twitter=twitter.replace(" Seguidores","")
    // console.log(twitter)
    return(
        <div className={s.row}>
            <div className={s.number}><div className={s.indice}>{i+1}</div></div>
            <div className={s.imgContainer}><img width={"100"} height={"100"} src={img} alt={name} /></div>
            <div className={s.name}>{name}</div>
            <IconContext.Provider value={{className: s.icon,size:"1em" }}>
            <div className={s.tweetdiv} onClick={()=>window.open(url)}><BsTwitter/><span>{twitter}</span></div>
            </IconContext.Provider>
            <div className={s.imgContainer} onMouseOver={()=>console.log(hype)}><img width={"50"} src={oso} alt="hype"/></div>
        </div>
    )
}