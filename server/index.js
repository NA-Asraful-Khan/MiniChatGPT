import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import env from "dotenv"
import {Configuration,OpenAIApi} from 'openai'
const port = 3080

const app = express()

env.config()
app.use(bodyParser.json())

const configuration = new Configuration({
    organization:"org-pE7oSArlvcM6Ai5Wf9xe1mu0",
    apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration)

app.listen(port, ()=>console.log(`http://localhost:${port}/`))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post('/', async (req,res)=>{
    const {message}=req.body
    try{
        const response = await openai.createCompletion ({
            model: "text-devinci-003",
            prompt:`${message}`,
            max_tokens: 100,
            temperatur:.5
        })
        res.json({message: response.data.choices[0].value})
    }catch(e){
        console.log(e)
        res.send(e).status(400)
    }
})