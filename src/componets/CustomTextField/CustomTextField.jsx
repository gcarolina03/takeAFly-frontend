import { TextField, IconButton } from "@mui/material"
import { useState } from "react";
import { Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material'

function CustomTextField({ label, variant, onChange, icon  }) {
   const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputProps = label === 'email'
    ? { endAdornment: icon || <Email /> }
    : {
        endAdornment: (
          <IconButton onClick={handleTogglePassword} edge="start">
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
        type: showPassword ? 'text' : 'password',
      };

  return (
    <>
    <TextField fullWidth 
    label={label} 
    InputProps={inputProps}
    variant={variant} 
    sx={{ backgroundColor: 'white', margin: '10px 0' }} 
    onChange={ (e) => onChange(e.target.value) } />
    </>
  )
}

export default CustomTextField