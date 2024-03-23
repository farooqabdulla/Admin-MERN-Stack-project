import { Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let navigate = useNavigate()
    let but1 = (e) =>{ 
        e.preventDefault()  
        axios.post('http://localhost:3000/',{email,password})
        .then((result)=>{
            console.log("successfull");
            if (result.data === "Success") {
                localStorage.setItem('email', email);
                navigate('/home')
            }else{
                alert("Wrong Credientials")
            }
        })
        .catch(()=>{
            console.log("Something wrong!!!");

        })
    }
    return (
        <>
            <form>
                <Stack sx={{ height: '100vh', width: '100%', bgcolor: '#F5F5F5' }}>
                    <Card sx={{ m: '10vh 35vw' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '5vh' }}>
                            <Typography variant='h4'>Login</Typography>
                            <TextField value={email} type='email' onChange={(e)=>{setEmail(e.target.value)}} label='Email' required />
                            <TextField value={password} onChange={(e)=>{setPassword(e.target.value)}} label='Password' type='password' required />
                            <Button type='submit' onClick={but1} variant='contained' >Login</Button>
                            <Button component={Link} to='/signup' >Don't have account? Sign up  </Button>
                        </CardContent>
                    </Card>
                </Stack>
            </form>
        </>
    )
}

export default Login