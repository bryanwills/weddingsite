import './App.css';
import React, { useState } from "react";
import {AboutUs} from './components/AboutUs/AboutUs';
import {Location} from './components/Location/Location';
import {RSVP} from './components/RSVP/RSVP';
import {Home} from './components/Home/Home';
import {Countdown} from './components/Countdown/Countdown';
import {Navbar} from './components/Navbar/Navbar';

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

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

return (
  <div className="App">
    <Navbar
      language={language}
      handleSetLanguage={language => {
        setLanguage(language);
        storeLanguageInLocalStorage(language);
      }}
    />

    <div class="container">
      <div class="row">
      <div class="col-md-8 mb-5">
          <Home language={language} />
        </div>
        <div class="col-md-8 mb-5">
          <Countdown language={language} />
        </div>
        <div class="col-md-8 mb-5">
          <AboutUs language={language} />
        </div>
        <div class="col-md-4 mb-5">
          <Location language={language} />
        </div>
        <div class="col-md-4 mb-5">
          <RSVP language={language} />
        </div>
      </div>
    </div>

  </div>
);
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
