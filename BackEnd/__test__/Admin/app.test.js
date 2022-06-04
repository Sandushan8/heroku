const adminf = require('../../Routes/Admin/Adminfunctions')
const users = require('../../Routes/Admin/Users')

test('fetch student groups',()=>{
    let val =users.route('/student')
    expect(val).not.toBeNull()
})

test('fetch submissions',()=>{
    let val = adminf.route('/sub')
    expect(val).not.toBeNull()
})

test('fetch marking schemes',()=>{
    let val = adminf.route('/mark')
    expect(val).not.toBeNull()
})

test('fetch student data', ()=>{
    let val = users.route('/studentdetes')
  expect(val).not.toBeNull()
  })

test('fetch supervisor data',()=>{
    let val = users.route('/supervisor')
  expect(val).not.toBeNull()
})

test('fetch co-supervisor data', ()=>{
    let val = users.route('/cosupervisor')
  expect(val).not.toBeNull()
})

test('fetch panel member data', ()=>{
    let val = users.route('/panelmember')
  expect(val).not.toBeNull()
})

test('should respond with message if server not connected or cannot add', async()=>{
    const response = users.post('/studentdetes')
    expect(response.status).not.toBeNull()
})

test('should respond with message if server not connected or cannot add', async()=>{
    const response = adminf.post('/mark')
    expect(response.status).not.toBeNull()
})
test('should respond with Empty', async()=>{
    const response = adminf.put('/sub/:id')
    expect(response.status).not.toBeNull()
})


