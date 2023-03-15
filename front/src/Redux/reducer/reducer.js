import { createReducer } from '@reduxjs/toolkit'
import { communitySort, marketSort, sortFloorPrice, volumeSort } from '../../helper/helper'
import { ALL_PROJECTS, COMMUNITY, FLOOR_PRICE, HYPE, MARKET_CAP, SUPPLY, UPCOMING_PROJECTS, VOLUME_HS } from '../actions/actions'

const initialState = {
    mintedProjects: [],
    upcomingProjects: []
}

export const clientReducer = createReducer(initialState, (callback) => {
    callback.addCase(ALL_PROJECTS.fulfilled, (state, action)=>{
        state.mintedProjects = action.payload.ok ? action.payload.projects : ""
    })

    callback.addCase(UPCOMING_PROJECTS.fulfilled, (state, action)=>{
        state.upcomingProjects = action.payload.ok ? action.payload.projects : ""
    })

    callback.addCase(HYPE.fulfilled, (state, action)=>{
        if (action.payload === "minted"){
            let projects = state.mintedProjects
            projects.sort((a,b)=>{
                if(!a.hype && !b.hype) return 0
                else if(!a.hype) return 1
                else if(!b.hype) return -1
                else return b.hype - a.hype
            })
            state.mintedProjects = projects
        }else if (action.payload === "upcoming"){
            let projects = state.upcomingProjects
            projects.sort((a,b)=>{
                if(!a.hype && !b.hype) return 0
                else if(!a.hype) return 1
                else if(!b.hype) return -1
                else return b.hype - a.hype
            })
            state.upcomingProjects = projects
        }
    })
    callback.addCase(COMMUNITY.fulfilled, (state, action)=>{
        if (action.payload === "minted"){
        let projects = state.mintedProjects
        let sortedProjects = communitySort(projects)
        state.mintedProjects = sortedProjects
        } else if (action.payload === "upcoming"){
            let projects = state.upcomingProjects
            let sortedProjects = communitySort(projects)
            state.upcomingProjects = sortedProjects
        }
    })
    callback.addCase(MARKET_CAP.fulfilled, (state, action)=>{
       let projects = state.mintedProjects
       let sortedProjects = marketSort(projects)
       state.mintedProjects = sortedProjects
    })
    callback.addCase(VOLUME_HS.fulfilled, (state, action)=>{
       let projects = state.mintedProjects
       let sortedProjects = volumeSort(projects)
       state.mintedProjects = sortedProjects
    })
    callback.addCase(SUPPLY.fulfilled, (state, action)=>{
       let projects = state.mintedProjects
        projects.sort((a,b)=>{
            if (a.supply === "???") return 1
            else if (b.supply === "???") return -1
            else return b.supply - a.supply
        })
       state.mintedProjects = projects
    })
    callback.addCase(FLOOR_PRICE.fulfilled, (state, action)=>{
    //    let projects = state.mintedProjects
    //     projects.sort((a,b)=>{
    //         if (a.floorPrice === "???" || !a.floorPrice || isNaN(a.floorPrice.trim())) return 1
    //         else if (b.floorPrice === "???" || !b.floorPrice || isNaN(b.floorPrice.trim())) return -1
    //         else return b.floorPrice?.trim().replace(",",".") - a.floorPrice?.trim().replace(",",".")
    //     })

        let projects = state.mintedProjects
        let sortedProjects = sortFloorPrice(projects)
        state.mintedProjects = sortedProjects

    })
})