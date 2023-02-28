import s from "./projectInfo.module.css"
import {BsTwitter} from "react-icons/bs"
import { IconContext } from "react-icons";
import oso from "../../../assets/oso.png"



export default function ProjectInfo({url,hype, name,twitterFollowers,img,i,volumeToday,supply,totalVolume,floorPrice,minted}){
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
            <div><span>{totalVolume ? "$ "+totalVolume:"-"}</span></div>
            <div><span>{volumeToday ? "$ "+volumeToday :"-"}</span></div>
            <div><span>{supply ? supply :"-"}</span></div>
            <div><span>{floorPrice ? "$ "+floorPrice :"-"}</span></div>
            <div className={s.imgContainer}><img width={"100"} height={"100"} src={oso} alt="hype"/></div>
            {/* <div><span>{hype}</span></div> */}
        </div>
    )
}