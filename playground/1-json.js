const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// } // JavaScript Object

// const bookJSON = JSON.stringify(book)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
var data = JSON.parse(dataJSON)
data.name = "Kai"
data.planet = "Husko"
data.age = "3"
var dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataString)