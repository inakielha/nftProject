import s from "./team.module.css"

export default function Team({ colorFondo }) {
    return (
        <section className={s[colorFondo]}>
            <div className={s.container}>
                <div className={s.contenedorTeam}><span className={s.team}>team</span></div>
                <div className={s.membersContainer}>
                    <div className={s.member}>
                        <div className={s.nameContainer}>
                            <span className={s.name}>nacho</span>
                            <span className={s.job}>dev</span>
                        </div>
                        <div className={s[colorFondo+"s"]}><div className={s.exp}>
                            <span className={s.experience}>Web3 marketer experienced with growing major DeFi social media accounts. Builds relationships, strategies and engagement around Bruh Bears.</span></div>
                        </div>
                    </div>
                    <div className={s.member}>
                        <div className={s.nameContainer}>
                            <span className={s.name}>vicu</span>
                            <span className={s.job}>designer</span>
                        </div>
                        <div className={s[colorFondo+"s"]}>
                            <div className={s.exp}>
                                <span className={s.experience}>Web3 marketer experienced with growing major DeFi social media accounts. Builds relationships, strategies and engagement around Bruh Bears.</span></div>
                            </div>
                    </div>
                    <div className={s.member}>
                        <div className={s.nameContainer}>
                            <span className={s.name}>fransi</span>
                            <span className={s.job}>ladri</span>
                        </div>
                        <div className={s[colorFondo+"s"]}>
                            <div className={s.exp}>
                                <span className={s.experience}>Web3 marketer experienced with growing major DeFi social media accounts. Builds relationships, strategies and engagement around Bruh Bears.</span></div>
                        </div>
                    </div>
                    <div className={s.member}>
                        <div className={s.nameContainer}>
                            <span className={s.name}>foli</span>
                            <span className={s.job}>manco</span>
                        </div>
                        <div className={s[colorFondo+"s"]}>
                            <div className={s.exp}>
                                <span className={s.experience}>Web3 marketer experienced with growing major DeFi social media accounts. Builds relationships, strategies and engagement around Bruh Bears.</span></div>
                        </div>
                    </div>
                    <div className={s.member}>
                        <div className={s.nameContainer}>
                            <span className={s.name}>nico</span>
                            <span className={s.job}>cono</span>
                        </div>
                        <div className={s[colorFondo+"s"]}>
                            <div className={s.exp}>
                                <span className={s.experience}>Web3 marketer experienced with growing major DeFi social media accounts. Builds relationships, strategies and engagement around Bruh Bears.</span></div>
                        </div>
                    </div>
                    <div className={s.member}>
                        <div className={s.nameContainer}>
                            <span className={s.name}>joaco</span>
                            <span className={s.job}>buen pibe</span>
                        </div>
                        <div className={s[colorFondo+"s"]}>
                            <div className={s.exp}>
                                <span className={s.experience}>Web3 marketer experienced with growing major DeFi social media accounts. Builds relationships, strategies and engagement around Bruh Bears.</span></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}