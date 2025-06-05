import React from "react";

interface Props {
  inputValue: string;
  onChange: (q: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ inputValue, onChange, onSearch }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSearch();
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Movies..."
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
