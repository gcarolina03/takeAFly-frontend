import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Construction.css'
let image = '../../assets/img/travel.jpg'
function ConstructionPage() {
const theme = useTheme();

return (
  <>
    <Header />
    <Box
      className="body"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        marginTop: "0px",
      }}
    >
      <Box>
        <Typography
          className="message"
          variant="h2"
          sx={{
            marginTop:{ xs: "200px", md: "500px" },
            marginLeft:{xs: '50px'},
            fontSize: "calc(0.8vw + 15px)",
            fontWeight: "bold",
          }}
        >
          We've taken a detour on this journey. Stay tuned for an exciting
          destination!
        </Typography>
      </Box>
    </Box>
    <Footer />
  </>
);
} 
export default ConstructionPage