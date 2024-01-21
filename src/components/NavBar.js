import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
import { NoEncryption } from '@mui/icons-material'

export default function NavBar() {
  return (
    <Stack 
    direction="row"
    justifyContent="space-around"
    sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'}, justify-content:'none'}}
    >
      <Link to="/">
        <img src={Logo}/>
     
      </Link>
      <Stack 
        direction="row"
        gap="40px"
        fontSize='24px'
        alignItems="flex"
      >
        it just seen to be crazy 
        <Link to='/' style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #ff2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none',color:'#3A1212'}}>Exercice</a>
      </Stack>
    </Stack>
    
    

  )
}
