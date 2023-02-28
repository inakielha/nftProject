import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const ALL_PROJECTS = createAsyncThunk(
    'ALL_PROJECTS', async () => {
        try {
            const projects = await axios.get('http://localhost:3002/minted')
            // console.log(projects.data)
            return projects.data
        } catch (error) {
            console.log(error)
            return error
        }
    }
)

export const UPCOMING_PROJECTS = createAsyncThunk(
    'UPCOMING_PROJECTS', async () => {
        try {
            const projects = await axios.get('http://localhost:3002/upcoming')
            // console.log(projects.data)
            return projects.data
        } catch (error) {
            console.log(error)
            return error
        }
    }
)

export const HYPE = createAsyncThunk(
    'HYPE', (type) => {
        return type
    }
)

export const COMMUNITY = createAsyncThunk(
    'COMMUNITY', (type) => {
        return type
    }
)

export const MARKET_CAP = createAsyncThunk(
    "MARKET_CAP", ()=>{
        return
    }
)
export const VOLUME_HS = createAsyncThunk(
    "VOLUME_HS", ()=>{
        return
    }
)

export const SUPPLY = createAsyncThunk(
    "SUPPLY", ()=>{
        return
    }
)

export const FLOOR_PRICE = createAsyncThunk(
    "FLOOR_PRICE", ()=>{
        return
    }
)