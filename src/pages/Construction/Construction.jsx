import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function ConstructionPage() {
const theme = useTheme();

return(
    <>
    <Header/>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'white', width:'100vw', height: '100vh'}}>
        <Typography variant= 'h2' sx={{
            color:theme.palette.primary.main,
            border: '5px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
            fontSize: 'calc(0.8vw + 19px)',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)'}}>
            Sorry, this page is under constructuion! Try again later :)!
        </Typography>
    </Box>
    <Footer/>
    </>
)
} 
export default ConstructionPage