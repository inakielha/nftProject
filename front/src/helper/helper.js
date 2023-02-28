const communitySort = (test) => {
    let allProjects = test
    allProjects = allProjects.slice().sort((a, b) => {
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
        } else if (a?.twitterFollowers?.includes("Seguidores")) {
            aNumber = a?.twitterFollowers?.split("Seguidores", 1)
            aFollowers = aNumber[0].trim().replace(".", "")
        }
        if (b?.twitterFollowers?.includes("K")) {
            bNumber = b?.twitterFollowers?.split("K", 1)
            bFollowers = bNumber[0] * 1000

        } else if (b?.twitterFollowers?.includes("Followers")) {
            bNumber = b?.twitterFollowers?.split("Followers", 1)
            bFollowers = bNumber[0].trim().replace(",", "")
        } else if (b?.twitterFollowers?.includes("Seguidores")) {
            bNumber = b?.twitterFollowers?.split("Seguidores", 1)
            bFollowers = bNumber[0].trim().replace(".", "")
        }


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
    return allProjects
}

const marketSort = (projects) => {
    projects = projects.slice().sort((a, b) => {
        let aNumber;
        let bNumber;
        let aVolume;
        let bVolume;
        if (a?.totalVolume?.includes("k")) {
            aNumber = a?.totalVolume?.split("k", 1)
            aVolume = aNumber[0].trim().replace(",",".") * 1000
        } else if (a?.totalVolume?.includes("M")) {
            aNumber = a?.totalVolume?.split("M", 1)
            aVolume = aNumber[0].trim().replace(",",".") * 1000000
        } else {
            aVolume = a.totalVolume.trim().replace(",",".")
        }
        if (b?.totalVolume?.includes("k")) {
            bNumber = b?.totalVolume?.split("k", 1)
            bVolume = bNumber[0].trim().replace(",",".") * 1000
        } else if (b?.totalVolume?.includes("M")) {
            bNumber = b?.totalVolume?.split("M", 1)
            bVolume = bNumber[0].trim().replace(",",".") * 1000000
        } else {
            bVolume = b.totalVolume.trim().replace(",",".")

        }
    

        if (!aVolume && !bVolume) {
            return 0
        }
        if (!aVolume) {
            return 1
        }
        else if (!bVolume) {
            return -1
        } else {
            return bVolume - aVolume
        }
    })
    return projects
}

const volumeSort = (projects) => {
    projects = projects.slice().sort((a, b) => {
        let aNumber;
        let bNumber;
        let aVolume;
        let bVolume;
        console.log(a.volumeToday,b.volumeToday,"numeros")
        if (a?.volumeToday?.includes("k")) {
            aNumber = a?.volumeToday?.split("k", 1)
            aVolume = aNumber[0].trim().replace(",",".") * 1000
        } else if (a?.volumeToday?.includes("M")) {
            aNumber = a?.volumeToday?.split("M", 1)
            aVolume = aNumber[0].trim().replace(",",".") * 1000000
        } else {
            aVolume = a.volumeToday.trim().replace(",",".")
        }
        if (b?.volumeToday?.includes("k")) {
            bNumber = b?.volumeToday?.split("k", 1)
            bVolume = bNumber[0].trim().replace(",",".") * 1000
        } else if (b?.volumeToday?.includes("M")) {
            bNumber = b?.volumeToday?.split("M", 1)
            bVolume = bNumber[0].trim().replace(",",".") * 1000000
        } else {
            bVolume = b.volumeToday.trim().replace(",",".")

        }
    
        console.log(aVolume,bVolume,"------",bVolume - aVolume)

        if (!aVolume && !bVolume) {
            return 0
        }
        if (!aVolume) {
            return 1
        }
        else if (!bVolume) {
            return -1
        } else {
            return bVolume - aVolume
        }
    })
    console.log(projects)
    return projects
}

module.exports = {
    communitySort,
    marketSort,
    volumeSort
}