import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { communitySort } from "../../helper/helper"
import { ALL_PROJECTS, COMMUNITY, HYPE, UPCOMING_PROJECTS } from "../../Redux/actions/actions"
import Navbar from "../navbar/navbar"
import ProjectInfo from "../projectRank/projectInfo/projectInfo"
import UpcomingProject from "./individualUpcomingProject/individualUpcomingProjects"
import s from "./upcomingProjects.module.css"
import { BsArrowDown } from "react-icons/bs";
import NavMushie from "../navbar/navbarTwo/navMushie"
import f from "../projectRank/projectRank.module.css"


export default function UpcomingProjects() {
    const [sort, setSorted] = useState("community")
    const dispatch = useDispatch()
    const upcomingProjects = useSelector(state => state.clientReducer.upcomingProjects)

    let dmText = "Hi%20Mushies!%20I%20want%20to%20list%20my%20project!💫🍄"
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(ALL_PROJECTS())
        dispatch(UPCOMING_PROJECTS())
    }, [])

    const handleCommunity = () => {
        dispatch(COMMUNITY("upcoming"))
        setSorted("community")
    }

    const handleHype = () => {
        dispatch(HYPE("upcoming"))
        setSorted("hype")
    }

    return (
        <>
            <NavMushie colorFondo={"beige"} />
            <div className={s.test}>
                <div className={s.tablaContainer}>
                    <div className={f.btnTitle}>
                        <div className={f.titleContainer}>
                            <h3 className={f.titulo}> Canto NFTs</h3>
                            <h4>The curated list of<span> upcoming NFTs</span> in the <span>Canto</span> ecosystem</h4>
                        </div>
                        <div className={f.buttonDiv}><a target="_blank" href={"https://twitter.com/messages/compose?recipient_id=1623388026100412416&text=" + dmText}
                            class="twitter-dm-button" data-screen-name="@furni">
                            List your Project</a></div>
                    </div>
                    <div className={s.grid}>
                        <div className={s.rows}>
                            <div><span></span></div>
                            <div><span></span></div>
                            <div><span>Project</span></div>
                            <div><span style={{cursor:"pointer"}} className={sort === "community" && s.underline} onClick={() => handleCommunity()}>community</span></div>
                            <div><span style={{cursor:"pointer"}} className={sort === "hype" && s.underline} onClick={() => handleHype()}>hype</span></div>
                        </div>
                        {
                            upcomingProjects?.map((project, index) => {
                                return (<UpcomingProject url={project.url} key={project._id} name={project.name} twitterFollowers={project.twitterFollowers} img={project.img} i={index} minted={project.minted} volumeToday={project.minted ? project.volumeToday : ""} supply={project.minted ? project.supply : ""} totalVolume={project.minted ? project.totalVolume : ""} floorPrice={project.minted ? project.floorPrice : ""} hype={project.hype} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}