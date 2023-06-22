
import {Box, Typography } from '@mui/material'
import { useTheme } from "@emotion/react";

function ErrorCard() {
  const theme = useTheme();
  return (
    <Box display='flex' justifyContent='center'>
      <Typography variant='h2'
       sx={{
          color: theme.palette.primary.main, padding: '1',
          border: '5px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
          fontSize: 'calc(0.8vw + 12px)',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)'}}>
        Sorry, there are any travels with this filter. Try Again
      </Typography>
    </Box>
  )
}

export default ErrorCard