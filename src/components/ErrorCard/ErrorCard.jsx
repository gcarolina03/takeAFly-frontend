
import {Box, Typography } from '@mui/material'
import { useTheme } from "@emotion/react";

function ErrorCard() {
  const theme = useTheme();
  return (
    <Box display='flex' justifyContent='center' elevation={2}>
      <Typography variant='h2'
       sx={{
          color: theme.palette.primary.main, padding: '1',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
          fontSize: 'calc(0.8vw + 12px)',}}>
        Sorry, there are any travels with this filter. Try Again
      </Typography>
    </Box>
  )
}

export default ErrorCard