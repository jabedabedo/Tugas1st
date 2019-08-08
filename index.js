const express = require('express')
const app = express()
const array_sort = require("./lib/sort-dess")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.get("/ass", (req, res) => {
    let ayam = ["ayam", "ayam1", "ayam3", "ayam0"]
    console.log("Before ", ayam)

    let result = array_sort.ascending_sort(ayam)
    console.log("After ", result)

    return res.send(result)
})

app.get("/dess", (req, res) => {
    let babi = ["babi1", "babi3", "babi5", "babi9"]
    console.log("Before ", babi)

    let result = array_sort.descending_sort(babi)
    console.log("After ", result)

    return res.send(result)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})