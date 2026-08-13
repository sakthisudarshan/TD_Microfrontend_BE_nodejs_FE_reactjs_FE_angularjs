import PropTypes from "prop-types";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="Search widgets…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
