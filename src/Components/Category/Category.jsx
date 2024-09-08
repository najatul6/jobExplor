import { useState } from "react"
import SectionHeader from "../Shared/SectionHeader/SectionHeader"
import { useEffect } from "react"

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

          <div className="grid grid-cols-2 gap-5 py-5">
            {categories.map((cat)=>(
              <div key={cat.id} className="border p-5 rounded-md shadow-md hover:shadow-2xl">
                <h3 className="text-xl font-bold">{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Category