import { useEffect, useState } from 'react'
import { GetCategoriesAPI } from '../../services/category.service'
import { Button } from '@mui/material'

function Categories({ data }) {
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

export default Categories