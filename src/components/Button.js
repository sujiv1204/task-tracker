import PropTypes from "prop-types";

function Button({ text, color, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className="btn"
        >
            {text}
        </button>
    );
}

Button.defaultProps = {
    color: "red",
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
};

export default Button;
