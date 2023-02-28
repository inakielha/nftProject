import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ALL_PROJECTS, COMMUNITY, FLOOR_PRICE, HYPE, MARKET_CAP, SUPPLY, UPCOMING_PROJECTS, VOLUME_HS } from "../../Redux/actions/actions"
import Navbar from "../navbar/navbar"
import ProjectInfo from "../projectRank/projectInfo/projectInfo"
import s from "../projectRank/projectRank.module.css"
import { BsArrowDown } from "react-icons/bs";
import NavMushie from "../navbar/navbarTwo/navMushie"

export default function ProjectsMinted() {
  const dispatch = useDispatch()
  const [sort, setSorted] = useState("")
  const topProjects = useSelector(state => state.clientReducer.mintedProjects)
  let dmText = "Hi%20Mushies!%20I%20want%20to%20list%20my%20project!💫🍄"

  const community = () => {
    dispatch(COMMUNITY("minted"))
    setSorted("community")
  }

  const handleMarket = () => {
    dispatch(MARKET_CAP())
    setSorted("marketCap")
  }

  const handleVolume = () => {
    dispatch(VOLUME_HS())
    setSorted("volume")
  }

  const handleSupply = () => {
    dispatch(SUPPLY())
    setSorted("supply")
  }

  const handleFloor = () => {
    dispatch(FLOOR_PRICE())
    setSorted("floor")
  }

  const handleHype = () => {
    dispatch(HYPE("minted"))
    setSorted("hype")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(ALL_PROJECTS())
    dispatch(UPCOMING_PROJECTS())
  }, [])
  return (
    <>
      <NavMushie colorFondo={"beige"} />
      <div className={s.test}>
        <div className={s.tablaContainer}>
          <div className={s.btnTitle}>
          <div className={s.titleContainer}>
            <h3 className={s.titulo}>CANTO NFTs</h3>
            <h4>The curated list of<span> Minted NFTs</span> in the <span>Canto</span> ecosystem</h4>
            </div>
            <div className={s.buttonDiv}><a target="_blank" href={"https://twitter.com/messages/compose?recipient_id=1623388026100412416&text=" + dmText}
              class="twitter-dm-button" data-screen-name="@furni">
              List your Project</a></div>
          </div>
          <div className={s.grid}>
            <div className={s.rows}>
              <div><span></span></div>
              <div><span></span></div>
              <div><span>Project</span></div>
              <div><span onClick={() => community()}>community</span>{sort === "community" && <BsArrowDown />}</div>
              <div><span onClick={() => handleMarket()}>Market Cap</span>{sort === "marketCap" && <BsArrowDown />}</div>
              <div><span onClick={() => handleVolume()}>Volume 24hs</span>{sort === "volume" && <BsArrowDown />}</div>
              <div><span onClick={() => handleSupply()}>supply</span>{sort === "supply" && <BsArrowDown />}</div>
              <div><span onClick={() => handleFloor()}>Floor Price</span>{sort === "floor" && <BsArrowDown />}</div>
              <div><span onClick={() => handleHype()}>hype</span>{sort === "hype" && <BsArrowDown />}</div>
            </div>
            {
              topProjects?.map((project, index) => {
                return (<ProjectInfo url={project.url} key={project._id} name={project.name} twitterFollowers={project.twitterFollowers} img={project.img} i={index} minted={project.minted} volumeToday={project.minted ? project.volumeToday : ""} supply={project.minted ? project.supply : ""} totalVolume={project.minted ? project.totalVolume : ""} floorPrice={project.minted ? project.floorPrice : ""} hype={project.hype} />)
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}