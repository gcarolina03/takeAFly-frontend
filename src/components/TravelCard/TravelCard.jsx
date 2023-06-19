import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button,CardActionArea, CardActions, IconButton} from '@mui/material'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './TravelCard.css'
import { Flare } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function TravelCard({title, imageUrl, dates, budget, travelId}) {

  return (
    <Card className='carta'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../../assets/logo/green.png"
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dates}
            {budget}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions  sx={{height: '100%', display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>
        <IconButton component= {Link} to={`/destination/${travelId}`}color='primary'>
        <ArrowForwardIosRoundedIcon/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default TravelCard