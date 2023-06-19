import { useEffect, useState } from 'react'
import { GetCategoriesAPI } from '../../services/category.service'
import { Button, Grid } from '@mui/material'

function Categories() {
    const [categories, setCategories] = useState([])

    const listCategories = async () => {
        const res = await GetCategoriesAPI() 
        setCategories(res)
    }

    useEffect(() => {
        listCategories()
    }, [])

  return (
    <>
      {categories.length > 0 &&
        categories.map((category) => (
          <Button
            style={{ height: "50px", fontSize: "10px", alignItems: "center" }}
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

export default Categories