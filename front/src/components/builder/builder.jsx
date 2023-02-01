import { AiTwotoneExperiment } from "react-icons/ai"
import { IconContext } from "react-icons";
import s from "./builder.module.css"
import gif from "../../assets/gif.gif"

export default function Builder({colorFondo}) {
    return (
        <section className={s.section}>
            <div className={s.contenedor}>
                <span className={s.title}>Build a Soldier</span>
                <div className={s.secondContainer}>
                    <div className={s.gifContainer}><img className={s.gif} src={gif} alt="gif" /></div>
                    <div className={s.textContainer}>
                        <div className={s.textContainer_container}>
                            <p>Create a custom Bruh Bear and use it as your PFP.</p>
                            <p>Join the MOVEment bruh.</p>
                            <div className={s[colorFondo]}>
                                <IconContext.Provider value={{ className: "global-class-name", size: "1.5em" }}>
                                    <div><AiTwotoneExperiment /></div>
                                </IconContext.Provider>
                                <span>Build your Soldier</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}