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
    function handleSelect (number) {
        // console.log(button[number])
        console.log(button)
        let arr = button
        arr[number] = !arr[number]
        setButton(arr)
        setTest(!test)
    }
    return (
        // <section className={s.section}>
        <section className={s[colorFondo]}>
            <div className={s.container}>
                <span className={s.faq}>faq</span>
                <div className={s.faqContainer}>
                    <div className={s.pregunta} onClick={() => handleSelect(0)}><span className={s.text}>What is sui?</span>{!button[0] ? <div className={s.flecha}></div>:<div className={s.flechaBaja}></div>}</div>
                    {button[0] && <div className={s.respuesta}><span className={s.respuestaText}>Aptos es un proyecto nuevo e independiente creado para cumplir la visión de ofrecer la cadena de bloques más segura y lista para producción del mundo. </span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(1)}><span className={s.text}>What wallet should i use?</span>{!button[1] ? <div className={s.flecha}></div>:<div className={s.flechaBaja}></div>}</div>
                    {button[1] && <div className={s.respuesta}> <span className={s.respuestaText}>recomendamos usar metamask o no se que mas.</span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(2)}><span className={s.text}>What is the supply of the project?</span>{!button[2] ? <div className={s.flecha}></div>:<div className={s.flechaBaja}></div>}</div>
                    {button[2] && <div className={s.respuesta}><span className={s.respuestaText}>no tenemos idea, capaz que 500 nft</span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(3)}><span className={s.text}>What is the mint price?</span>{!button[3] ? <div className={s.flecha}></div>:<div className={s.flechaBaja}></div>}</div>
                    {button[3] && <div className={s.respuesta}><span className={s.respuestaText}>mmm me mataste, entre 10 0n 30 usd</span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(4)}><span className={s.text}>When will the mint take place?</span>{!button[4] ? <div className={s.flecha}></div>:<div className={s.flechaBaja}></div>}</div>
                    {button[4] && <div className={s.respuesta}><span className={s.respuestaText}>cuando salga la mainnet corazon</span></div>}
                    <div className={s.pregunta} onClick={() => handleSelect(5)}><span className={s.text}>Why soldier?</span>{!button[5] ? <div className={s.flecha}></div>:<div className={s.flechaBaja}></div>}</div>
                    {button[5] && <div className={s.respuesta}><span className={s.respuestaText}>porque bancamo a muerte a sui en las buenas y en las malas</span></div>}

                </div>
            </div>
        </section>
    )
}