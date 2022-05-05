import React,{useState}from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {useMediaQuery, useTheme,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../images/logo.png"
import CloseIcon from '@mui/icons-material/Close';
import "./NavBar.css"


const NavBar = () => {

   const [click, setClick] = useState(false)  
   
  const [drawerState, setDrawerState] = useState(false)

   const handleIcon = ()=>{
      setClick(!click)
   }

  

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flexGrow: 1 , color: "white", pb: 2}}>
      <AppBar position="static" color="primary">
        <Toolbar>
     
          {
            isMatch?(
              <>
              <Box sx={{   flexGrow: 1 }}>
            <img src={logo} alt="" className='logos' />
             </Box>
             <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleIcon} >
             {
               click ? <CloseIcon/>:    <MenuIcon />
             }
         
          </IconButton>

        
             </>
            ) :(
              <>
              <Box sx={{   flexGrow: 1 , ml: 10}}>
            <img src={logo} alt="" className='logos' />
             </Box>
             <Button color="inherit">Home</Button>
             <Button color="inherit">About</Button>
             <Button color="inherit">Docs</Button>
             <Button color="inherit">Contact Us</Button>
             </>
            )
          }
         
        </Toolbar>
      </AppBar>
      {
        click ?
        <div className='mobile-view'>
          
            <Typography className='mobile-text' variant="body1">Home</Typography>
            <Typography className='mobile-text' variant="body1">About Us</Typography>
            <Typography className='mobile-text' variant="body1">Contact Us</Typography>
            <Typography className='mobile-text' variant="body1">Docs</Typography>
          
        </div>

        : null
      }
    </Box>
  )
}

export default NavBar