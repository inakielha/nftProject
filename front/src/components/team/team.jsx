import s from "./team.module.css"
import image1 from "../../assets/Asset 1.png"
import image2 from "../../assets/Asset 2.png"
import image3 from "../../assets/Asset 3.png"

export default function Team({ colorFondo }) {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.contenedorTeam}><span className={s.team}>team</span></div>
                <div className={s.membersContainer}>
                    <div className={s.member}>
                    <div className={s.memberInfo}>
                            <div className={s.nftContainer}><img className={s.img} src={image1} alt="team" /></div>
                        <div className={s.nameContainer}>
                            <span className={s.name}>Paul</span>
                            <span className={s.job}>Marketer & Community Manager</span>
                            </div>
                        </div>
                        <div className={s.expContainer}>
                            <div className={s.exp}>
                                <span className={s.experience}>Experienced Web3 Marketer specialized in growing major DeFi social media accounts. Skilled in building relationships, strategies, and engagement for Poison Mushies.</span></div>
                        </div>
                    </div>
                    <div className={s.member}>
                    <div className={s.memberInfo}>
                            <div className={s.nftContainer}><img className={s.img} src={image2} alt="team" /></div>
                        <div className={s.nameContainer}>
                            <span className={s.name}>Frankie</span>
                            <span className={s.job}>Project Manager & Developer</span>
                            </div>
                        </div>
                        <div className={s.expContainer}>
                            <div className={s.exp}>
                                <span className={s.experience}>Experienced Project Manager and Solidity Dev for secure smart contract deployment on Ethereum network. Skilled in development, testing, and blockchain technology.</span></div>
                        </div>
                    </div>
                    <div className={s.member}>
                    <div className={s.memberInfo}>
                            <div className={s.nftContainer}><img className={s.img} src={image3} alt="team" /></div>
                        <div className={s.nameContainer}>
                            <span className={s.name}>Sara</span>
                            <span className={s.job}>Artist & Designer</span>
                            </div>
                        </div>
                        <div className={s.expContainer}>
                            <div className={s.exp}>
                                <span className={s.experience}>NFT artist and UX & UI experienced design and crypto art.Skilled in Adobe Creative Suite, Procreate and Figma. Succesful in creating NFT artworks. Art and technology enthusiasts.</span></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}