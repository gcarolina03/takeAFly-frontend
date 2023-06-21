import { Close } from '@mui/icons-material';
import { CardContent, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types'
import './ErrorMsg.css'

function ErrorMsgComp({errorMsg, show, hideErrorMsg}) {
  return (
    <CardContent className="error-msg" sx={{top: show ? '0' : '-100%'}} >
      <Typography
        sx={{fontSize:{xs: '12px', sm:'15px'}}}
        fontWeight="bold"
        color="red"
        textAlign="center"
      >
        {errorMsg}
      </Typography>
      <IconButton onClick={() => { hideErrorMsg() }}
      >
        <Close sx={{ color: "red"}} />
      </IconButton>
    </CardContent>
  )
}

// props validations
ErrorMsgComp.propTypes = {
  errorMsg: PropTypes.string,
  show: PropTypes.bool,
  hideErrorMsg: PropTypes.func,
}

export default ErrorMsgComp