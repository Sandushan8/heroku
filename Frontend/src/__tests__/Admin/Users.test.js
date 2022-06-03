const axios =require("axios")

const student = axios.get('http://localhost:8000/users/studentdetes')
const supervisor = axios.get('http://localhost:8000/users/supervisor')
const cosupervisor = axios.get('http://localhost:8000/users/cosupervisor')
const panelmember = axios.get('http://localhost:8000/users/panelmember')

test('fetch student data', ()=>{
  expect(student).not.toBeNull()
  })

test('fetch supervisor data',()=>{
  expect(supervisor).not.toBeNull()
})

test('fetch co-supervisor data', ()=>{
  expect(cosupervisor).not.toBeNull()
})

test('fetch panel member data', ()=>{
  expect(panelmember).not.toBeNull()
})



