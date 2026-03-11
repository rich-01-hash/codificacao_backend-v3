const express = require('express')
const app = express()
const port = 3000
let alunos =[
  {id: 1, nome:"Édio", idade: 35},
  {id: 2, nome:"Vanessa", idade: 52},
  {id: 3, nome: "Pietra", idade:40},
]

app.get('/', (req, res) => {
  res.send('amo pietra e aleixxx!')
})

app.get('/alunos/getAll',)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
