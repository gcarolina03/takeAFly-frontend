import { TextField } from "@mui/material"

function CustomTextField({ label, variant, onChange }) {

  return (
    <>
    <TextField fullWidth 
    label={label} 
    variant={variant} 
    sx={{ backgroundColor: 'white', margin: '10px 0' }} 
    onChange={ (e) => onChange(e.target.value) } />
    </>
  )
}

export default CustomTextField