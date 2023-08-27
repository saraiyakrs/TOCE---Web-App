const express = require('express')
const app = new express()
const db = require('better-sqlite3')('SICC.db')

app.use(express.static("public"))
app.use(express.json())

app.get('/events', (req, res) => {
    const query = db.prepare("SELECT * FROM Events")
    const events = query.all()
    res.json({
        events
    })
})


app.listen(8080, () => {
    console.log("egg")
})