import { AppBar, Avatar, AvatarGroup, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{color:'white',textDecoration:'none',fontSize:'5vh'}} component={Link} to='/home'>Logo</Typography>
                <Stack direction='row' sx={{ width: '47vw', justifyContent: 'space-around' }}>
                    <Button color='inherit' component={Link} to='/home'>Home</Button>
                    <Button color='inherit' component={Link} to='/EmployeeList'>Employee List</Button>
                    <Stack direction='row' sx={{ width: '15vw' }} >
                        <Avatar sx={{ bgcolor: 'orangered',height:'40px' }}>{localStorage.getItem('email').charAt(0).toUpperCase()}</Avatar>
                        <Button sx={{ p: '10px' }} color='inherit'>{localStorage.getItem('email').slice(0, -10)}</Button>
                    </Stack>
                    <Button color='inherit' onClick={()=>{localStorage.removeItem('email')}} component={Link} to='/'>Logout</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Nav