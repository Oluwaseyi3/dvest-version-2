import React from 'react'
import "./Footer.css"
import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Grid, Typography} from '@mui/material';
import logo from "../../images/logo.png"

import { FaDiscord } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import {useMediaQuery, useTheme,} from '@mui/material';

const Footer = () => {

  const Text = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
  
  }));

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <div className='footer'>
      <Container>
         <div className='box'>
         
            <Box sx={{width: 300, height: 170, color: "white", display: "flex", flexDirection: "column"}}>
            <img src={logo} className="logo" alt=""/>
               <Box sx={{mt: 5, display: "flex", justifyContent: "space-around", width: 100, onHover: "primary"}}>
               <FaDiscord size="20px" className='icon'/>
               <MdEmail size="20px" className='icon'/>
               <BsTwitter size="20px" className='icon'/>
               </Box>
            </Box>
            
            {
              isMatch ? (
                null
              ) : (
                <Box sx={{width: 180, color: "white", pt: 4, pb: 4}}>
               <Text className='icon' variant="h6">Home</Text>
               <Text className='icon' variant="body2">Products</Text>
               <Text className='icon' variant="body2">Services</Text>
               <Text className='icon' variant="body2">Docs</Text>
               <Text className='icon' variant="body2">About Us</Text>
            </Box>
              )
            }
         
           
         
          
         </div>

         <div className='last'>
         <AiOutlineCopyrightCircle size="20px"/>
           <Typography variant="body1">

             dVest Labs 2022
           </Typography>
         </div>
      </Container>
    </div>
  )
}

export default Footer