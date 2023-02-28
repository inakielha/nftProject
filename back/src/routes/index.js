
const Router = require('express')
const { Project } = require('../model/project')

const router = Router()

//USERS
router.get('/minted', async (req, res) => {
    try {
        const allProjects = await Project.find({minted: true})

        allProjects.sort((a, b) => {
            let aNumber;
            let bNumber;
            let aFollowers;
            let bFollowers;
            if (a?.twitterFollowers?.includes("K")) {
                aNumber = a?.twitterFollowers?.split("K", 1)
                aFollowers = aNumber[0] * 1000
            } else if (a?.twitterFollowers?.includes("Followers")) {
                aNumber = a?.twitterFollowers?.split("Followers", 1)
                aFollowers = aNumber[0].trim().replace(",", "")
            } else if(a?.twitterFollowers?.includes("Seguidores")){
                aNumber = a?.twitterFollowers?.split("Seguidores", 1)
                aFollowers = aNumber[0].trim().replace(".", "")
            }
            if (b?.twitterFollowers?.includes("K")) {
                bNumber = b?.twitterFollowers?.split("K", 1)
                bFollowers = bNumber[0] * 1000

            } else if (b?.twitterFollowers?.includes("Followers")) {
                bNumber = b?.twitterFollowers?.split("Followers", 1)
                bFollowers = bNumber[0].trim().replace(",", "")
            }else if(b?.twitterFollowers?.includes("Seguidores")){
                bNumber = b?.twitterFollowers?.split("Seguidores", 1)
                bFollowers = bNumber[0].trim().replace(".", "")
            }

            // console.log(aFollowers, bFollowers)
            if (!aFollowers && !bFollowers) {
                return 0
            }
            if (!aFollowers) {
                return 1
            }
            else if (!bFollowers) {
                return -1
            } else {
                return bFollowers - aFollowers
            }
        })
        return res.json({ ok: true, projects: allProjects })
    } catch (e) {
        console.log("ERROR", e)
        return res.json({ ok: false, e })
    }
})

router.get('/upcoming', async (req, res) => {
    try {
        const allProjects = await Project.find({minted: false})

        allProjects.sort((a, b) => {
            let aNumber;
            let bNumber;
            let aFollowers;
            let bFollowers;
            if (a?.twitterFollowers?.includes("K")) {
                aNumber = a?.twitterFollowers?.split("K", 1)
                aFollowers = aNumber[0] * 1000
            } else if (a?.twitterFollowers?.includes("Followers")) {
                aNumber = a?.twitterFollowers?.split("Followers", 1)
                aFollowers = aNumber[0].trim().replace(",", "")
            } else if(a?.twitterFollowers?.includes("Seguidores")){
                aNumber = a?.twitterFollowers?.split("Seguidores", 1)
                aFollowers = aNumber[0].trim().replace(".", "")
            }
            if (b?.twitterFollowers?.includes("K")) {
                bNumber = b?.twitterFollowers?.split("K", 1)
                bFollowers = bNumber[0] * 1000

            } else if (b?.twitterFollowers?.includes("Followers")) {
                bNumber = b?.twitterFollowers?.split("Followers", 1)
                bFollowers = bNumber[0].trim().replace(",", "")
            }else if(b?.twitterFollowers?.includes("Seguidores")){
                bNumber = b?.twitterFollowers?.split("Seguidores", 1)
                bFollowers = bNumber[0].trim().replace(".", "")
            }

            // console.log(aFollowers, bFollowers)
            if (!aFollowers && !bFollowers) {
                return 0
            }
            if (!aFollowers) {
                return 1
            }
            else if (!bFollowers) {
                return -1
            } else {
                return bFollowers - aFollowers
            }
        })
        return res.json({ ok: true, projects: allProjects })
    } catch (e) {
        console.log("ERROR", e)
        return res.json({ ok: false, e })
    }
})

module.exports = router