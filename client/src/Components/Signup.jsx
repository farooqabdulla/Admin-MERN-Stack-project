import { Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    let [uname,setUname] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let Navigate = useNavigate()
    let but2 = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/signup',{uname,email,password})
        .then((response)=>{
            console.log(response);
            alert("Successfully Registered!")
            Navigate('/')
        })
        .catch(()=>{
            console.log("Something went wrong");
        })
    }
    return (
        <>
            <form>
                <Stack sx={{ height: '100vh', width: '100%', bgcolor: '#F5F5F5' }}>
                    <Card sx={{ m: '10vh 35vw' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '5vh' }}>
                            <Typography variant='h4'>Sign Up</Typography>
                            <TextField value={uname} onChange={(e)=>{setUname(e.target.value)}} label='Name' required />
                            <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} label='Email' type='email' required />
                            <TextField value={password} onChange={(e)=>{setPassword(e.target.value)}} label='Password' type='password' required />
                            <Button type='submit' onClick={but2} variant='contained' >Signup</Button>
                            <Button component={Link} to='/'>Already have account? Login</Button>
                        </CardContent>
                    </Card>
                </Stack>
            </form>
        </>
    )
}
export default Signup