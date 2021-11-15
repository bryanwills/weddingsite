import React from "react";
import "./Details.css";

export function Details(props) {
    let content = {
      English: {
        copy: "Maria and Rob will be in Santa Marta a few days prior to the wedding date in order to finish last-minute details, spend time with close family, and adjust to the heat. We will be providing more details regarding events pre and/or post wedding on this tab. Please check later for updates.",
      },
      Spanish: {
        copy: "à´²àµà´±àµà´ à´à´ªàµà´¸à´¿à´¯à´, à´²àµà´±àµà´ à´à´ªàµà´¸à´¿à´¯à´, à´²àµà´±àµà´, 123456",
      }
    };
  
    props.language === "Spanish"
      ? (content = content.Malayalam)
      : (content = content.English);
    return (
      <React.Fragment>
        <address>{content.copy}</address>
      </React.Fragment>
    );
  }
  

// export default AboutUs;
