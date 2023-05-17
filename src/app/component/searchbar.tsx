"use client";
import "semantic-ui-css/semantic.min.css";

const SearchBar = () => {
  return (
    <div className="px-4 border">
      <form>
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt flex items-center"
              type="text"
              placeholder="..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
