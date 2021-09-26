import React from "react";

export function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        {/* <a class="navbar-brand" href="#">
          La Boda de Maria & Rob
        </a> */}
        <div className="language-select">
          english flag / spanish flag
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

// export default Navigation;