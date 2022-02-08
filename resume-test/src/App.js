import { Routes, Route, useLocation} from "react-router";
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

import Main from './components/Main';
import AboutPage from './components/AboutPage';
import CareerPage from './components/PortfolioPage';
import PortfolioPage from './components/CareerPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";


function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

    <SoundBar />

<AnimatePresence exitBeforeEnter>
  <Routes  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/career" component={CareerPage}/>
      <Route exact path="/portfolio" component={PortfolioPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>
  </Routes>
</AnimatePresence>
    </ThemeProvider>   
    </>
    
}

export default App

