import cors from "cors"
import {join} from "path"
import bodyParser, {json} from 'body-parser'
import express from 'express'
import mongoose from "mongoose"
import consola from "consola"
import passport from 'passport'

//Import constants application
import {DB, PORT} from "./constants"

//Router imports
import userApis from './apis/users'
import guestApis from './apis/guests'
import userServicesApis from './apis/userServices'

//import password middleware
require("./middlewares/passport-middleware")

//Initialize express application
const app = express();

//Apply application middlewares
app.use(cors({origin:'*'}))
app.use(json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(passport.initialize())
app.use(express.static(join(__dirname, './uploads')))

//Inject Sub Router and Apis
app.use('/users',userApis)
app.use('/guests', guestApis)
app.use('/services', userServicesApis)

const main = async () => {
    try{
        //Connect with the database
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        consola.success("DATABASE CONNECTED...")
        //Start listening for request on server
        app.listen(PORT, () => consola.success(`Server started on port: ${PORT}`))
	
        // const https = require('https');
        // const fs = require('fs');
        // const https_options = {
        //     ca: fs.readFileSync("ca_bundle.crt"),
        //     key: fs.readFileSync("private.key"),
        //     cert: fs.readFileSync("certificate.crt")
        // };

        // var httpsServer = https.createServer(https_options, app);
        // httpsServer.listen(PORT, () => consola.success(`Server started on port: ${PORT}`));
    }
      catch(error){
        consola.error(`Unable to start the server \n${error}`)
    }
}
main();
