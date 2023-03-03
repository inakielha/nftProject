import s from "./team.module.css"
import image1 from "../../assets/maxHype.png"
// import image2 from "../../assets/1.png"
// import image3 from "../../assets/2 copy.png"
// import image4 from "../../assets/3 copy.png"
// import image5 from "../../assets/5 copy.png"
// import image6 from "../../assets/6.png"

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
                            <div className={s.nftContainer}><img className={s.img} src={image1} alt="team" /></div>
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
                            <div className={s.nftContainer}><img className={s.img} src={image1} alt="team" /></div>
                        <div className={s.nameContainer}>
                            <span className={s.name}>VIEK</span>
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