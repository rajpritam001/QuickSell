import React, { useState } from 'react';
import './Choices.css'; // Import the CSS file with the updated name

const CustomGroupingSortingOptions = ({ groupBy, setGroupBy, sortOption, setSortOption }) => {
  const [displayOptions, setDisplayOptions] = useState(false);

  const toggleDisplayOptions = () => {
    setDisplayOptions(!displayOptions);
  };

  return (
    <div className="custom-group-sort-options">
      <button onClick={toggleDisplayOptions} id="custom-display-button">Display</button>
      <div className={`custom-options-card ${displayOptions ? 'custom-show' : ''}`}>
        <form>
          <div>
            <label>
              Grouping:
              <span></span>
              <select onChange={(e) => setGroupBy(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Ordering:
              <select onChange={(e) => setSortOption(e.target.value)}>
                <option value="title">Title</option>
                <option value="priority">Priority</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomGroupingSortingOptions;
