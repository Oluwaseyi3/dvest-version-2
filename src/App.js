import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import NavBar from "./components/NavBar/NavBar.js"
import Navigate from "./components/NavBar/Navigate.js"
import { Home } from './components/Home/Home';
import Plan from './components/Plan/Plan';
import Project from './components/Project/Project';
import People from './components/People/People';
import Footer from './components/Footer/Footer';




const theme = createTheme({
  typography:{
    fontFamily: "Comfortaa",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  palette:{
    primary:{
      main: "#280A66"
    },
    secondary:{
      main: "#19025B"
    }
  }
})

function App() {
  return (
    <div className="App">
     
   <ThemeProvider theme={theme}>
       <NavBar/>
       <Home/>
       <Plan/>
       <Project/>
       <People/>
       <Footer/>
   </ThemeProvider>
      
    </div>
  );
}

export default App;
