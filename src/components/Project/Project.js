import React from 'react'
import "./Project.css"
import anglea from "../../images/anglea.png"
import angleb from "../../images/angleb.png"
import anglec from "../../images/anglec.png"
import angled from "../../images/angled.png"
import anglee from "../../images/anglee.png"
import angleh from "../../images/angleh.png"
import anglei from "../../images/anglei.png"
import angleg from "../../images/angleg.png"
import { Stack, Grid, Container,Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useMediaQuery, useTheme,} from '@mui/material';

const Project = () => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

    const BackGround = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
      },
          }));

          const BackGrounds = styled("div")(({ theme }) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
              }));

      const Group = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: 559,
        alignContent: "flex-start"
      }));

  return (
    <div className='backerers'>

    
<Container>
    <BackGrounds>

        <Box sx={{mt: 10, color: "white", width: 400, height: 50}}>
        <Typography variant="h4">
         Some of our Projects
        </Typography>
        </Box>
       
    </BackGrounds>
    </Container>

    {
      isMatch ? (
       <>
       <div className='mobile-div'>
          <div className="first">
              <img src={anglea} alt="" className='divImages' />
              <img src={angleb} alt="" className='divImages' />
              <img src={anglec} alt="" className='divImages' />
              <img src={angled} alt="" className='divImages' />
          </div>
          <div className="second">
          <img src={anglee} alt=""  className='divImages'/>
          <img src={angleh} alt=""  className='divImages'/>
          <img src={anglei} alt=""  className='divImages-endless'/>
          <img src={angleg} alt=""  className='divImages'/>
          </div>
       </div>
       </>
      ) : (
       <>
       <BackGround>
       <img src={anglea} alt="" />
       <img src={angleb} alt="" />
       <img src={anglec} alt="" />
       <img src={angled} alt="" />
    </BackGround>

    <BackGround>
       <img src={anglee} alt="" />
       <img src={angleh} alt="" />
       <img src={anglei} alt="" />
       <img src={angleg} alt="" />
    </BackGround>
       </>
      )
    }

   
    
   
        
    </div>
  )
}

export default Project