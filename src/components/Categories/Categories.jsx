import { Button } from '@mui/material'
import PropTypes from 'prop-types'

function Categories({ data }) {
  return (
    <>
      {data.length > 0 &&
        data.map((category) => (
          <Button
            style={{ fontSize: "12px", alignItems: "center" }}
            sx={{
              color: "black",
              backgroundColor: "lightgrey",
              justifyContent: "center",
            }}
            key={category.id}
          >
            {" "}
            {category.title}{" "}
          </Button>
        ))}
    </>
  );
}

// props validations
Categories.propTypes = {
  data: PropTypes.object,
}

export default Categories