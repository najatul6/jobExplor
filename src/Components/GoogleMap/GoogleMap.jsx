import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="Our Office" />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  text: PropTypes.string,
};

export default GoogleMap;
