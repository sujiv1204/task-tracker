import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log("Click");
    // };
    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button
                    color={showAdd ? "red" : "Blue"}
                    text={showAdd ? "Close" : "Add Task"}
                    onClick={onAdd}
                />
            )}
        </header>
    );
};

Header.defaultProps = {
    title: "Task-Tracker",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
// CSS in JS
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black",
// };

export default Header;
