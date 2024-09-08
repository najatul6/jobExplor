import { useState } from "react"
import SectionHeader from "../Shared/SectionHeader/SectionHeader"
import { useEffect } from "react"
import CategoryCard from "./CategoryCard"

const Category = () => {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])
  return (
    <div>
        <SectionHeader title={"Job Category List"} subTitle={"Explore thousands of job opportunities with all the information you need. Its your future"}/>

          <div className="flex justify-center items-center gap-5 py-5">
            {categories.map((category)=><CategoryCard key={category.id} category={category}/>)}
          </div>
    </div>
  )
}

export default Category