import { useState, useEffect } from 'react';
import { Grid } from "@mui/material"

import Splash from "../../components/Splash/Splash"
import WelcomePage from '../../components/WelcomePage/WelcomePage';

function Welcome() {
    const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>  
      <Grid 
        container
      >
          {!showSplash &&
          <WelcomePage/>
        }
        <Splash hidden={showSplash}/>
      </Grid>
      
    </>
    
  )
}

export default Welcome