import { Grid } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types'

function MiniList({data}) {
  console.log(data)
  return (
    <Grid container>
      <ImageList
        sx={{
          mt: "10px",
          gap: 8,
        }}
        cols={5}
      >
        {data.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.destination.imgUrl}`}
              alt={item.city}
              loading="lazy"
              style={{
                borderRadius: "15%",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}

// props validations
MiniList.propTypes = {
  data: PropTypes.array,
}

export default MiniList;
