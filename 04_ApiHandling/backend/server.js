import express from 'express'

const app = express()

app.get('/meals', (req, res)=>{
    res.send('hELL')
})

const PORT = 8010
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})