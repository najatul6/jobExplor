import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="px-10 py-10 rounded-xl bg-gray-600 flex justify-center items-start flex-col gap-3">
      <div className="p-3 rounded-xl bg-gray-700 w-[50px]">
        <img src={logo} alt={category_name} className="w-full" />
      </div>
      <div>
        <h4 className="text-xl font-bold">{category_name}</h4>
        <p className="font-light">{availability}</p>
      </div>
    </div>
  );
};

CategoryCard.propTypes={
    category: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      category_name: PropTypes.string.isRequired,
      availability: PropTypes.string.isRequired,
    })
}

export default CategoryCard;
