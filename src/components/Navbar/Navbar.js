import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

// export function Navbar(props) {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//       <div class="container">
//         {/* <a class="navbar-brand" href="#">
//           La Boda de Maria & Rob
//         </a> */}
//         <div className="language-select">
//           english flag / spanish flag
//           <select
//             className="custom-select"
//             value={props.language}
//             onChange={e => props.handleSetLanguage(e.target.value)}
//           >
//             <option value="English">English</option>
//             <option value="Spanish">Spanish</option>
//           </select>
//         </div>
//       </div>
//     </nav>
//   );
// }

const Navbar = (props) => {
  return (
      <>
      <div className="language-select">
            <select
              className="custom-select"
              value={props.language}
              onChange={e => props.handleSetLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
         <Nav>
          <NavLogo to="/">
              Maria & Rob
          </NavLogo>
          
          <Bars />

          <NavMenu>
              {/* <NavLink to="/" activeStyle>
                  Home
              </NavLink> */}
              <NavLink to="/rsvp" activeStyle>
                  RSVP
              </NavLink>
                  
              <NavLink to="/dress" activeStyle>
                  Dress Code
              </NavLink>

              <NavLink to="/details" activeStyle>
                  Details
              </NavLink>

              <NavLink to="/FAQ" activeStyle>
                  Frequently Asked Questions
              </NavLink>

              <NavLink to="/location" activeStyle>
                  Where To Stay
              </NavLink>

          </NavMenu> 
         </Nav> 
         
      </>
  );
};
export default Navbar;

// export default Navigation;