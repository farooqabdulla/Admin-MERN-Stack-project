const express = require('express')
const app = express()
const cors = require('cors')
const loginModel = require('./logindb')
const empModel = require('./empdb')

app.use(cors())
app.use(express.json())


app.post('/signup', async (req, res) => {
    const { uname, email, password } = req.body
    try {
        const existingUser = await loginModel.findOne({ email });
        if (existingUser) {
            return res.send({ error: 'Email already exists' });
        }
        else {
            await loginModel.create({ uname, email, password })
            res.send({ status: 'ok' })
        }
    } catch (error) {
        res.send({ status: 'error' })
    }
})


app.post('/', async (req, res) => {
    const { email, password } = req.body
    loginModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password == password) {
                    res.json("Success")
                } else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
})

app.post('/CreateEmployee',async(req,res)=>{
    const { name,email,phone,designation,gender,course,image,date } = req.body
    try {
        const existingUser = await empModel.findOne({ email });
        if (existingUser) {
            return res.send({ error: 'Email already exists' });
        }
        else {
            await empModel.create({ name,email,phone,designation,gender,course,image,date })
            res.send({ status: 'ok' })
        }
    } catch (error) {
        res.send({ status: 'error' })
    }
})

app.get('/EmployeeList',(req,res)=>{
    empModel.find({})
    .then((users)=>{
        res.json(users)
    })
})

app.get('/UpdateEmployee/:id',async(req,res)=>{
    let {id} = req.params
    await empModel.findById({_id:id})
    .then((users)=>{
        res.json(users)
    })
    
})

app.put('/UpdateEmployee/:id',(req,res)=>{
    const {id} = req.params
    
    empModel.findByIdAndUpdate({_id:id},{
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        designation : req.body.designation,
        gender : req.body.gender,
        course : req.body.course,
        image : req.body.image
    })
    .then((users)=>{
        res.json(users)
    })
})

app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params
    empModel.findByIdAndDelete({_id:id})
    .then((users)=>{
        res.json(users)
    })
})

app.listen(3000, () => {
    console.log("Server is running Successfully!");
})