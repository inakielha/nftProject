import { AiTwotoneExperiment } from "react-icons/ai"
import { IconContext } from "react-icons";
import s from "./builder.module.css"
import gif from "../../assets/nft.jpg"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from "react";

export default function Builder({colorFondo}) {
    const [open, setOpen] = useState(false)
    return (
        <section className={s.section}>
            <div className={s.contenedor}>
                <span className={s.title}>Build a Mushie</span>
                <div className={s.secondContainer}>
                    <div className={s.gifContainer}><img className={s.gif} src={gif} alt="gif" /></div>
                    <div className={s.textContainer}>
                        <div className={s.textContainer_container}>
                            <p>Create a custom Mushie and use it as your PFP.</p>
                            <p>Join the Poison.</p>
                            <div className={s.buttonContainer}>
                                <IconContext.Provider value={{ className: "global-class-name", size: "1.5em" }}>
                                    <div><AiTwotoneExperiment /></div>
                                </IconContext.Provider>
                                <span onClick={()=>setOpen(!open)}>Build your Mushie</span>
                            </div>
                        </div>
                        <Snackbar anchorOrigin={{vertical: "buttom",horizontal:"right"}} open={open} autoHideDuration={3000} onClose={()=>setOpen(false)}>
                <Alert onClose={()=>setOpen(false)} severity="info" sx={{ width: '100%' }}>
                    Coming soon!
                </Alert>
            </Snackbar>
                    </div>
                </div>
            </div>
        </section>
    )
}