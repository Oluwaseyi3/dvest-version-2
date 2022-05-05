import React from 'react'
import "./Plan.css"
import {Container, Typography,  Grid, Box, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import map from "../../images/map.png"


const Plan = () => {

    const BackGround = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
       
      }));

      const Textbody = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        height: 550,
        width: 400,
        [theme.breakpoints.down('sm')]: {
          width: 300,
      },
      }));


  return (
    <div className="info-second">
        <BackGround>
            <Box sx={{backgroundColor: "#19025B", p: 1, color: "#ffffff", mt:3 }}>
              <Typography variant="h5">
              We build products that decentralize financial opportunities.
              </Typography>
            </Box>
        </BackGround>
        
            <Box sx={{ mt: 10, color: "#280A66"}}>

            <Container>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={15}>
              <Grid item lg={6} xs={12}> <img src={map} alt="" className="backImage" /></Grid>
              
              <Grid item lg={6} xs={12}>
               <Textbody className='textBody'>
               <Typography variant="h5">Buy dDAO Tokens - Become a co-owner! </Typography>
               <Typography variant="h5">Visit the DAO Dashboard to see DAO holdings and more. </Typography>
               <Typography variant="h5">Check the dashboard daily for new proposals, submit your own, and vote as necessary. </Typography>
               <Typography variant="h5">Join the community to help direct the DAO and it's future. </Typography>
               <Typography variant="h5">Earn revenue from dVest Labs ventures and more! </Typography>
               </Textbody>
               </Grid>
              
            </Grid>
            </Container>
           
            </Box>


            <Box sx={{mt: 25, backgroundColor: "#280A66", width: "100%", height: 120,}}>

            </Box>
        
    </div>
  )
}

export default Plan