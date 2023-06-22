import { useMediaQuery } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

function MiniList({data}) {
  const isTablet = useMediaQuery('(min-width:600px)');
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const height = isDesktop ? '164px' : isTablet ? '100px' : '30px'
  const cols = isDesktop ? 5 : isTablet ? 4 : 2
  const navigate = useNavigate()
  return (
      <ImageList
        sx={{
          my: "10px",
          gap: 8,
        }}
        cols={cols}
        rowHeight={height}
      >
        {data.map((item) => (
          <ImageListItem key={item.id} sx={{m:1}}>
            <img
              onClick={() => navigate(`/travel/resume/${item.id}`)}
              src={`${item.destination.imgUrl}`}
              alt={item.city}
              loading="lazy"
              style={{
              borderRadius: "10%",
              height:'100%',
              width:'100%'
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

// props validations
MiniList.propTypes = {
  data: PropTypes.array,
}

export default MiniList;
