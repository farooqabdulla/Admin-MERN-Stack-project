import React, { createContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Button, Card, CardMedia, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export let data = createContext()
const View = () => {
    let [tablecontent, setTablecontent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/EmployeeList')
            .then((response) => {
                setTablecontent(response.data)
            })
    }, [])
    let Navigate = useNavigate()
    let handleDelete = (id) =>{
        axios.delete(`http://localhost:3000/delete/${id}`)
        window.location.reload()
    }
    
    return (
        <Stack>
           
            <Nav />
            <Stack>
                <Toolbar sx={{ justifyContent: 'end' }}>
                    <Typography sx={{ mr: '10vw' }}> Total Employees : {tablecontent.length} </Typography>
                    <Button variant='outlined' onClick={()=>{Navigate('/CreateEmployee')}}>Create Employee</Button>
                </Toolbar>
                <Stack direction='row'>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{fontWeight:'bold'}}>Unique Id</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Image</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Name</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Email</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Mobile No</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Designation</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Gender</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Course</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Create Date</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            {tablecontent.length > 0 ? (
                            <TableBody>
                                {
                                    tablecontent.map((x) => {
                                        return (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell>{x._id.slice(-2)}</TableCell>
                                                <TableCell>
                                                    <Card sx={{height:'120px',width:'120px'}}>
                                                        <CardMedia sx={{height:'100%',width:'100%',backgroundSize:'contain'}} image={x.image} />
                                                    </Card>
                                                </TableCell>
                                                <TableCell>{x.name.toUpperCase()}</TableCell>
                                                <TableCell>{x.email}</TableCell>
                                                <TableCell>{x.phone}</TableCell>
                                                <TableCell>{x.designation}</TableCell>
                                                <TableCell>{x.gender}</TableCell>
                                                <TableCell>{x.course[0]} {x.course[1]} {x.course[2]}</TableCell>
                                                <TableCell>{x.date}</TableCell>
                                                <TableCell>
                                                    <Button variant='outlined' component={Link} to={`/UpdateEmployee/${x._id}`} sx={{mr:'5px'}}>Edit</Button>
                                                    <Button variant='outlined' color='error' onClick={()=>{handleDelete(x._id)}}>Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                            ) : (
                                    <TableBody>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell><Typography variant='h2'>No Data Found</Typography></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default View