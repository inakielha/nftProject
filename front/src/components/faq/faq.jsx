import { useState } from "react"
import s from "./faq.module.css"


export default function Faq({ colorFondo }) {
    const [button, setButton] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ])
    const [test, setTest] = useState(true)
    function handleSelect(number) {
        // console.log(button[number])
        console.log(button)
        let arr = button
        arr[number] = !arr[number]
        setButton(arr)
        setTest(!test)
    }
    return (
        // <section className={s.section}>
        <section className={s.section}>
            <div className={s.container}>
                <span className={s.faq}>faq</span>
                <div className={s.faqContainer}>
                    <div className={s.pregunta} onClick={() => handleSelect(0)}><span className={s.text}>What is Canto?</span>{!button[0] ? <div className={s.flecha}></div> : <div className={s.flechaBaja}></div>}</div>
                    {button[0] && <div className={s.respuesta}><span className={s.respuestaText}>Canto is a permissionless general-purpose blockchain running the Ethereum Virtual Machine (EVM). It was built to deliver on the promise of DeFi – that through a post-traditional financial movement, new systems will be made accessible, transparent, decentralized, and free.</span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(1)}><span className={s.text}>What wallet should i use?</span>{!button[1] ? <div className={s.flecha}></div> : <div className={s.flechaBaja}></div>}</div>
                    {button[1] && <div className={s.respuesta}> <span className={s.respuestaText}>Most common ones are Metamask and Keplr</span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(2)}><span className={s.text}>What is the supply of the project?</span>{!button[2] ? <div className={s.flecha}></div> : <div className={s.flechaBaja}></div>}</div>
                    {button[2] && <div className={s.respuesta}><span className={s.respuestaText}>999 unique NFTs</span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(3)}><span className={s.text}>What is the mint price?</span>{!button[3] ? <div className={s.flecha}></div> : <div className={s.flechaBaja}></div>}</div>
                    {button[3] && <div className={s.respuesta}><span className={s.respuestaText}>WL – 8 $CANTO
                    </span>
                    <span className={s.respuestaText}>Public – 10 $CANTO
                    </span>
                    </div>}
                    <div className={s.pregunta} onClick={() => handleSelect(4)}><span className={s.text}>When will the mint take place?</span>{!button[4] ? <div className={s.flecha}></div> : <div className={s.flechaBaja}></div>}</div>
                    {button[4] && <div className={s.respuesta}><span className={s.respuestaText}>February 13th</span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(5)}><span className={s.text}>Where?</span>{!button[5] ? <div className={s.flecha}></div> : <div className={s.flechaBaja}></div>}</div>
                    {button[5] && <div className={s.respuesta}><span className={s.respuestaText}>At Gods Canto Launchpad</span></div>}

                </div>
            </div>
        </section>
    )
}