import React from 'react'
import "./People.css"
import { Data } from "../data.js"
import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Grid, Typography} from '@mui/material';
import {useMediaQuery, useTheme,} from '@mui/material';

const People = () => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

    const PaperBox = styled(Paper)(({ theme }) => ({
        height: 250,
        marginTop: 40,
        padding: 10,
        marginLeft: 30,
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
          height: 220,
        marginTop: 40,
        padding: 10,
        margin: 20
      },
      }));

     


    
  return (

    // {
    //   !isMatch 
    // }
    <>

    {
      isMatch ? (
        null
      ) : (
        <div className='people'> 
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {
        Data.map((data) => (
 
          <PaperBox>
           <div> <img  src={data.profile} className="images"/></div>
           
            <Box sx={{width: 150}}>
            <Typography variant="body1">{data.first_name}</Typography>
               <div className="role-color">
             
               <Box sx={{fontWeight: 700, mt: 2}}>
                  <Typography variant="subtitle1">{data.role}</Typography>
               </Box>
              
                </div>
              </Box>
                
          
            </PaperBox>
        
        ))
      }
      
      </Grid>
      </div>
      )
    }
   
      </>
  )
}

export default People