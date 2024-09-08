
const CategoryCard = ({category}) => {
    const {logo,category_name,availability}=category
  return (
    <div className="p-5">
        <div>
        <img src={logo} alt={category_name} className="w-full"/>
        </div>

    </div>
  )
}

export default CategoryCard