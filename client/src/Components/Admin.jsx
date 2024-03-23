import React from 'react'
import Nav from './Nav'
import { Button, Card, CardMedia, Stack, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const Admin = () => {
    let navigate = useNavigate()
    return (
        <Stack >
            <Nav />
            <Stack sx={{ width: '90%', m: 'auto', height: '90vh' }}>
                <Typography sx={{ mt: '5vh', color: '#1976D2' }} variant='h3'>Dash Board</Typography>
                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Card sx={{ width: '35%', mt: '2rem', p: '2vh 1vw' }}>
                        <CardMedia sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ m: '1vh' }} variant='h5'>Welcome, </Typography>
                            <Typography sx={{ m: '1vh', fontWeight: 'bold' }} variant='h4'>{localStorage.getItem('email').slice(0, -10).toUpperCase()}</Typography>
                            <Typography sx={{ m: '1vh' }} variant='body1'>Your email id : {localStorage.getItem('email')}</Typography>
                            <Button sx={{ m: '1vh' }} component={Link} to='/CreateEmployee' variant='outlined'>Create Employees</Button>
                            <Button sx={{ m: '1vh' }} onClick={() => { navigate('/EmployeeList') }} variant='outlined'>View Employees List</Button>
                        </CardMedia>
                    </Card>
                    <CardMedia sx={{ height: '60vh', width: '40vw', backgroundSize: 'contain' }} image='https://img.freepik.com/free-vector/man-browsing-internet-laptop_1308-118100.jpg?w=740&t=st=1711171284~exp=1711171884~hmac=ed637471288f09e1f9b34430467b87094d068063320d317623ff360fc2ee8325' />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Admin