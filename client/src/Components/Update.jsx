import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')
  let [designation, setDesignation] = useState('')
  let [gender, setGender] = useState('')
  let [course, setCourse] = useState([])
  let [image, setImage] = useState('')
  let Navigate = useNavigate()
  let handleCourseChange = (e) => {
    const index = course.indexOf(e.target.value)
    if (index === -1) {
      setCourse([...course, e.target.value])
    } else {
      setCourse(course.filter((course) => course !== e.target.value))
    }
  }
  const obj = useParams()
  useEffect(()=>{
      axios.get(`http://localhost:3000/UpdateEmployee/${obj.id}`)
      .then((response)=>{
        setName(response.data.name)
        setEmail(response.data.email)
        setPhone(response.data.phone)
        setDesignation(response.data.designation)
        setGender(response.data.gender)
        setCourse(response.data.course)
        setImage(response.data.image)
      })
  },[])
  let but2 = () =>{
    axios.put(`http://localhost:3000/UpdateEmployee/${obj.id}`,{name,email,phone,designation,gender,course,image})
    Navigate('/EmployeeList')
  }
  return (
    <div>
      <Nav />
      <Stack>
        <Card sx={{ width: '85%', m: 'auto', mt: '5vh' }}>
          <CardContent sx={{ p: '6vh' }}>
            <form action="">
              <Typography variant='h4'>Update Employee Details</Typography>
              <Stack sx={{ flexDirection: 'row', width: '100%', gap: '50px', mt: '2vh' }}>
                <TextField sx={{ width: '49%' }} value={name} onChange={(e) => { setName(e.target.value) }} label='Name' required />
                <TextField sx={{ width: '49%' }} value={email} type='email' onChange={(e) => { setEmail(e.target.value) }} label='Email' required />
              </Stack>
              <Stack sx={{ flexDirection: 'row', width: '100%', gap: '50px', mt: '2vh' }}>
                <TextField sx={{ width: '79vw' }} value={phone} onChange={(e) => { setPhone(e.target.value) }} label='Mobile No' required />
                <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={designation}
                    label="Age" sx={{ width: '100%' }}
                    onChange={(e) => { setDesignation(e.target.value) }}
                  >
                    <MenuItem value='HR'>HR</MenuItem>
                    <MenuItem value='Manager'>Manager</MenuItem>
                    <MenuItem value='Sales'>Sales</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction='row' sx={{ justifyContent: 'space-between', mt: '2vh' }}>
                <FormControl required>
                  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group" sx={{ flexDirection: 'row' }} value={gender} onChange={(e) => { setGender(e.target.value) }}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
                <FormGroup required sx={{ flexDirection: 'row', mr: '22vw' }}>
                  <FormLabel component="legend" sx={{ position: 'relative', left: '3.3vw' }}>Course</FormLabel>
                  <FormControlLabel control={<Checkbox value='MCA' Checked={course.includes('MCA')} onChange={handleCourseChange} />} label="MCA" />
                  <FormControlLabel control={<Checkbox value='BCA' Checked={course.includes('BCA')} onChange={handleCourseChange} />} label="BCA" />
                  <FormControlLabel control={<Checkbox value='BSC' Checked={course.includes('BSC')} onChange={handleCourseChange} />} label="BSC" />
                </FormGroup>
              </Stack>
              <Stack sx={{ mt: '2vh' }}>
                <TextField value={image} onChange={(e) => { setImage(e.target.value) }} required label='Img Upload' />
              </Stack>
              <Stack>
                <Button sx={{ mt: '4vh', mb: '4vh' }} onClick={but2} variant='contained' type='submit'>Submit</Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Stack>
    </div>
  )
}

export default Update