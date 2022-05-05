import React from 'react'
import "./Home.css"
import {Container, Typography,  Grid, Box, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import circle from "../../images/circle.png"
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import {useMediaQuery, useTheme,} from '@mui/material';

export const Home = () => {

  
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


   const BackGround = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        width: 377,
        height: 370,
        [theme.breakpoints.down('sm')]: {
           width: 370,
      },
      }));

      const ButtonGroup = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300,
        height: 200,
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(1),
      },
      }));


      const FirstText = styled(Typography)(({ theme }) => ({
         [theme.breakpoints.down('sm')]: {
            fontSize: "3rem"
        },
          }));
  return (
    <div className="back">
      <Container>
      
      <Grid container spacing={2} >
            
         
          <Grid item lg={6} className="first-grid">
              <BackGround>
               <Box sx={{color: "white", mt: 10, mr: 20}}>
                 <Typography variant="h4">DECENTRALISED</Typography>
                 <Typography variant="h4">AUTONOMOUS</Typography>
                 <Typography variant="h4">ORGAISATION</Typography>
               </Box>
               <div className='second-text'>
                 <Typography variant="body1">
                 For too long, far too many financial opportunities have
                 been out of the reach of the average investor, reserved
                 for hedge funds, high net worth individuals, institutions,
                 and the like. We are here to change that.
                 We’d like to invite you to join us.
                 </Typography>
               </div>

               <ButtonGroup>
               <Button variant="contained">JOIN US NOW</Button>
               <Button variant="contained">ABOUT US</Button>
               </ButtonGroup>
              
               
               </BackGround>
            </Grid>
            
            <Grid item lg={6}>
            {
              !isMatch && <img src={circle} alt="" className="globe-image" />
            }
              
            </Grid>       
      </Grid>
      
      </Container>
    </div>
  )
}
