const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    twitterFollowers: {
        type: String,
        required: true
    },
    discrodFollowers: {
        type: String,
    },
    img: {
        type: String,
        require: true
    },
    _id: {
        type: String,
        required: true
    },
    minted: {
        type: Boolean,
        default: false
    },
    volumeToday: {
        type: String
    },
    supply: {
        type: String
    },
    totalVolume:{
        type: String
    },
    floorPrice:{
        type: String
    },
    hype:{
        type: String
    },
    url:{
        type: String,
        require:true
    },
    altoUrl:{
        type: String
    }
}, {
    _id: false
})
 const Project = model('Project', ProjectSchema)
module.exports = {
Project
}