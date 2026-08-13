import PropTypes from "prop-types";

export default function Toolbar({ onCreate }) {
  const handleClick = () => {
    const label = window.prompt("New widget label?");
    if (label) onCreate(label);
  };

  return (
    <div>
      <button onClick={handleClick}>+ New widget</button>
    </div>
  );
}

Toolbar.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
