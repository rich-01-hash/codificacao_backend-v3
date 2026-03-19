import express from 'express'
import { Router } from 'express'
const app = express()
const port = 3000
let alunos =[
  {id: 1, nome:"Édio", idade: 35},
  {id: 2, nome:"Vanessa", idade: 52},
  {id: 3, nome: "Pietra", idade:40},
]

let frutas = [
  {id:1 ,fruta:"banana"},
  {id:2 ,fruta:"açai"},
  {id:3 , fruta:"graviola"}
]

app.get('/', (req, res) => {
  res.send('amo pietra e aleixxx!')
})

/*app.get('/alunos/getAll',(req,res) => {
   res.json({
     sucess:true,
     data:alunos
   })
})*/
//
app.get('/alunos/:id',(req,res) => {
   const id = parseInt(req.params.id)
   const aluno = alunos.find(a => a.id === id)
      if(!aluno){
        return res.status(404).json({
          sucess: false,
          message: 'Aluno não encontrado'
        })
      }

     res.json({
      sucess: true,
      data: aluno
     })

})//

app.get('/frutas/:id',(req,res) =>{
  const id = parseInt(req.params.id)
  const fruit = frutas.find(a => a.id === id)
  if(!fruit){
    return res.status(404).json({
      secuss: false,
      message: 'fruta não encontrada'
    })
  }

  res.json({
    sucess:true,
    data:fruit
  })
})
//POST - criar novo aluno

app.post('/alunos', (req,res) => {
  const{nome,idade} = req.body
  if(!nome || !idade){
    return res.status(404).json({
      sucess: false,
      message: 'nome e idade são obrigatorios'
    })
  }
  const novoAluno ={
    id:alunos.length + 1,
    nome,
    idade
  }

  alunos.push(novoAluno)

res.status(204).json({
  sucess:true,
  data: novoAluno,
  message: 'certo'
})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

