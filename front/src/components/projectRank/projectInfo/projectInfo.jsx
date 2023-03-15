import s from "./projectInfo.module.css"
import { BsTwitter } from "react-icons/bs"
import { IconContext } from "react-icons";
import { hypeLevel } from "../../../helper/helper";
import altoLogo from "../../../assets/altoLogo.webp"
import imgNotFound from "../../../assets/imgNotFound.PNG"


export default function ProjectInfo({altoUrl, url, hype, name, twitterFollowers, img, i, volumeToday, supply, totalVolume, floorPrice, minted }) {
    const { imageHype, imageClass } = hypeLevel(hype)
    let twitter = twitterFollowers?.replace(" Followers", "")
    twitter = twitter?.replace(" Seguidores", "")
    // console.log(imageClass)
    function handleimgError({currentTarget}){
        currentTarget.onerror = null;
        currentTarget.src = imgNotFound
    }
    return (
        <div className={s.row}>
            <div className={s.number}><div className={s.indice}>{i + 1}</div></div>
            <div className={s.imgContainer}><img width={"100"} height={"100"}  src={img === "nothing" ? imgNotFound : img} onError={(e)=> handleimgError(e)} alt={name} /></div>
            <div className={s.name}>{name}</div>
            <IconContext.Provider value={{ className: s.icon, size: "1em" }}>
                <div className={s.logoContainer}>
                    <div>
                        <div className={s.tweetdiv} onClick={() => window.open(url)}><BsTwitter /><span>{twitter}</span></div>
                    </div>
                    <div>
                        <div className={s.altoContainer} onClick={() => window.open(`https://alto.build/collections/${altoUrl.replace(" ", "-")}`)}><img src={altoLogo} alt="" /></div>
                    </div>
                </div>
            </IconContext.Provider>
            <div><span>{totalVolume ? "$ " + totalVolume : "-"}</span></div>
            <div><span>{volumeToday ? "$ " + volumeToday : "-"}</span></div>
            <div><span>{supply ? supply : "-"}</span></div>
            <div><span>{floorPrice ? "$ " + floorPrice : "-"}</span></div>
            <div className={s.imgContainer}><img className={s[imageClass]} width={"100"} height={"100"} src={imageHype} alt="hype" /></div>
            <div><span>{hype}</span></div>
        </div>
    )
}