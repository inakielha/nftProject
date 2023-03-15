import Navbar from "../navbar/navbar";
import ProjectInfo from "./projectInfo/projectInfo";
import s from "./projectRank.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALL_PROJECTS, UPCOMING_PROJECTS } from "../../Redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import NavMushie from "../navbar/navbarTwo/navMushie";
import UpcomingProject from "../upcomingProject/individualUpcomingProject/individualUpcomingProjects";
import f from "../upcomingProject/upcomingProjects.module.css"

export default function Projects() {
  const [buttonProjects, setButtonProjects] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const topProjects = useSelector(state => state.clientReducer.mintedProjects)
  const upcomingProjects = useSelector(state => state.clientReducer.upcomingProjects)

  console.log(topProjects)
  let firstFiveProjects = topProjects.slice(0, 5)
  let firstFiveUpcomingProjects = upcomingProjects.slice(0, 5)
  let dmText = "Hi%20Mushies!%20I%20want%20to%20list%20my%20project!💫🍄"

  useEffect(() => {
    dispatch(ALL_PROJECTS())
    dispatch(UPCOMING_PROJECTS())
  }, [])

  return (
    <>
    <NavMushie/>
      <div className={s.test}>
          <div className={s.tablaContainer}>
            <div className={s.btnTitle}>
              <div className={s.titleContainer}>
                <h3 className={s.titulo}>Canto NFTs</h3>
                <h4>The curated list of<span> NFTs</span> in the <span>Canto</span> ecosystem</h4>
              </div>
              <div className={s.buttonDiv}><a target="_blank" href={"https://twitter.com/messages/compose?recipient_id=1623388026100412416&text=" + dmText}
                class="twitter-dm-button" data-screen-name="@furni">
                List your Project</a></div>
            </div>
            <div onClick={()=> navigate("/projectsMinted")} className={s.grid}>
              <div className={s.rows}>
                <span></span>
                <span></span>
                <span>Project</span>
                <span>community</span>
                <span>Market Cap</span>
                <span>Volume 24hs</span>
                <span>supply</span>
                <span>Floor Price</span>
                <span>hype</span>
              </div>
              {
                firstFiveProjects?.map((project, index) => {
                  return (<ProjectInfo altoUrl={project.altoUrl} url={project.url} key={project._id} name={project.name} twitterFollowers={project.twitterFollowers} img={project.img} i={index} minted={project.minted} volumeToday={project.minted ? project.volumeToday : ""} supply={project.minted ? project.supply : ""} totalVolume={project.minted ? project.totalVolume : ""} floorPrice={project.minted ? project.floorPrice : ""} hype={project.hype} />)
                })
              }
            </div>
            <Link to={"/projectsMinted"} className={s.link}>Show More</Link>

            <h3 className={s.titulo}>Upcoming NFTs</h3>
            <div className={f.grid} style={{cursor:"pointer"}} onClick={()=> navigate("/upcomingProjects")}>
              <div className={f.rows}>
                <span></span>
                <span></span>
                <span>Project</span>
                <span>community</span>
                <span>hype</span>
              </div>
              {
                firstFiveUpcomingProjects?.map((project, index) => {
                  return (<UpcomingProject url={project.url} key={project._id} name={project.name} twitterFollowers={project.twitterFollowers} img={project.img} i={index} minted={project.minted} volumeToday={project.minted ? project.volumeToday : ""} supply={project.minted ? project.supply : ""} totalVolume={project.minted ? project.totalVolume : ""} floorPrice={project.minted ? project.floorPrice : ""} hype={project.hype} />)
                })
              }
            </div>
            <Link to={"/upcomingProjects"} className={s.link} >Show More</Link>
          </div>
        </div>
              </>
  )
}