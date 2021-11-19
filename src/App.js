import './App.css';
import React, { useState } from "react";
import {Faq} from './components/Faq/Faq';
import {Location} from './components/Location/Location';
import {Home} from './components/Home/Home';
import {DressCode} from './components/Dresscode/Dresscode';
import {Rsvp} from './components/RSVP/RSVP';
import {Details} from './components/Details/Details';
import {Navibar} from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   let languageStoredInLocalStorage = localStorage.getItem("language");
//   let [language, setLanguage] = useState(
//     languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
//   );

//   return (
//     <div className="App">
//       <select
//         className="custom-select"
//         value={props.language}
//         onChange={e => props.handleSetLanguage(e.target.value)}
//       >
//         <option value="English">English</option>
//         <option value="Spanish">Spanish</option>
//       </select>
//       {/* <BrowserRouter>
//         <Navbar />
//         <div className="container mt-2" style={{ marginTop: 40 }}>
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/about">
//               <AboutUs />
//             </Route>
//             <Route path="/rsvp">
//               <RSVP />
//             </Route>
//             <Route path="/location">
//               <Location />
//             </Route>
//           </Switch>
//         </div>
//     </BrowserRouter> */}
//     <Home />
//     <Countdown/>
//     <AboutUs />
//     <Location />
//     <RSVP />
//     </div>
//   );
// }

// return (
//   <div className="App">
//     <Navbar
//       language={language}
//       handleSetLanguage={language => {
//         setLanguage(language);
//         storeLanguageInLocalStorage(language);
//       }}
//     />

//     <div class="container">
//       <div class="row">
//       <div class="col-md-8 mb-5">
//           <Home language={language} />
//         </div>
//         <div class="col-md-8 mb-5">
//           <Countdown language={language} />
//         </div>
//         <div class="col-md-8 mb-5">
//           <AboutUs language={language} />
//         </div>
//         <div class="col-md-4 mb-5">
//           <Location language={language} />
//         </div>
//         <div class="col-md-4 mb-5">
//           <RSVP language={language} />
//         </div>
//       </div>
//     </div>

//   </div>
// );
// }

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <Router>
      <Navibar language={language}
              handleSetLanguage={language => {
                setLanguage(language);
                storeLanguageInLocalStorage(language)
              }}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/location" component={Location} />
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/dress" component={DressCode} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
