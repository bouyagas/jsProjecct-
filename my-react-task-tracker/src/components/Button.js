import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = { text: "Add", color: "black" };

Button.propsType = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.funcl,
};

export default Button;
