import s from "./bestProjects.module.css"
export default function BestProjects(){
    return(
        <div className={s.section}>
            <div className={s.container}>
                <h3>Best Canto projects</h3>
                <p>List of the <span>best NFTs</span> in the Canto ecosystem. </p>
                <p><span>Rated by</span> Hype, Community, Market Cap, Volume, etc.</p>
            </div>
        </div>
    )
}