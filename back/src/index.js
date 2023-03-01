const  express =  require("express")
const cors = require('cors')
const { dbConnection } = require("./database/db")
const router = require ('./routes/index')
// require('dotenv').config({path:'../.env'})
require('dotenv').config()

const app = express()
dbConnection()


app.set("port", process.env.MONGOPORT || 2500)

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());

app.use('/', router)

const server = app.listen(app.get("port"), () => {
    console.log("Server is on port" + " " + process.env.MONGOPORT)
})