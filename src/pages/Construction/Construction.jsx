import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

let image = '../../assets/img/Lost.jpg'
function ConstructionPage() {
const theme = useTheme();

return (
  <>
    <Header />
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        marginTop: "0px",
        backgroundImage:`url(${image})`
      }}
    >
      <Box
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "calc(0.8vw + 19px)",
            fontWeight: "bold",
            textShadow: "0.1px 0.1px 12px rgba(200, 200, 200, 10)",
          }}
        >
          Sorry, we are working on this page! Try again later :)!
        </Typography>
      </Box>
    </Box>
    <Footer />
  </>
);
} 
export default ConstructionPage