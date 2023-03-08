import s from "./grillaProjects.module.css"
import ima from "../../assets/maxHype.png"
import ima2 from "../../assets/minHype.png"
import ima3 from "../../assets/four.png"
import project1 from "../../assets/longNeck.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import { useNavigate } from "react-router-dom"
export default function GrillaProjects() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/projects")
    }
    return (
        <div className={s.section}>
            <div className={s.container}>
                <h3>top projects</h3>
                <div className={s.grilla} onClick={()=>handleClick()}>
                    <div className={s.project}>
                        <div className={s.containerDiv}>
                            <span className={s.number}>1</span>
                            <div className={s.imgContainer}><img src={project1} alt="" /></div>
                            <div className={s.textInfo}>
                                <span>name</span>
                                <span>community</span>
                            </div>
                            <div className={s.imgContainer}><img src={ima} alt="" /></div>
                        </div>
                    </div>
                    <div className={s.project}>
                        <div className={s.containerDiv}>
                            <span className={s.number}>2</span>
                            <div className={s.imgContainer}><img src={project2} alt="" /></div>
                            <div className={s.textInfo}>
                                <span>name</span>
                                <span>community</span>
                            </div>
                            <div className={s.imgContainer}><img src={ima2} alt="" /></div>
                        </div>
                    </div>
                    <div className={s.project}>
                        <div className={s.containerDiv}>
                            <span className={s.number}>3</span>
                            <div className={s.imgContainer}><img src={project3} alt="" /></div>
                            <div className={s.textInfo}>
                                <span>name</span>
                                <span>community</span>
                            </div>
                            <div className={s.imgContainer}><img src={ima3} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className={s.btnContainer}>
                    <button onClick={()=>handleClick()} className={s.btn}>View List</button>
                </div>
            </div>
        </div>
    )
}