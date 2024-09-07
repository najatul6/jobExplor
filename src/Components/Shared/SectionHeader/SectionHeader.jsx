import PropTypes from "prop-types";

const SectionHeader = ({title,subTitle}) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xl">{subTitle}</p>
    </div>
  )
}

SectionHeader.propTypes={
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default SectionHeader