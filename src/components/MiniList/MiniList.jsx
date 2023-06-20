import { Grid } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types'

function MiniList({data}) {
  return (
    <Grid container>
      <ImageList
        sx={{
          mt: "10px",
          gap: 8,
        }}
        cols={8}
      >
        {data.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item.imgUrl}`}
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
  data: PropTypes.object,
}

export default MiniList;
