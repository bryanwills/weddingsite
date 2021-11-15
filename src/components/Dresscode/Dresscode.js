import React from "react";
import "./Dresscode.css";

export function DressCode(props) {
    let content = {
      English: {
        title: "We would love if everyone could adhere to white with the attire. Think Dîner en Blanc meets guayabera. ",
        address: "Lorem ipsum, Lorem ipsum, Lorem, 123456",
        phone: {
          label: "Phone",
          value: "+12 34567"
        },
        email: {
          label: "Email",
          value: "abc@example.com"
        }
      },
      Spanish: {
        title: "à´¬à´¨àµà´§à´ªàµà´ªàµà´àµà´",
        address: "à´²àµà´±àµà´ à´à´ªàµà´¸à´¿à´¯à´, à´²àµà´±àµà´ à´à´ªàµà´¸à´¿à´¯à´, à´²àµà´±àµà´, 123456",
        phone: {
          label: "à´«àµàµº",
          value: "+12 34567"
        },
        email: {
          label: "à´à´®àµà´¯à´¿àµ½",
          value: "abc@example.com"
        }
      }
    };
  
    props.language === "Spanish"
      ? (content = content.Spanish)
      : (content = content.English);
    return (
      <React.Fragment>
        <h2>{content.title}</h2>
        <address>{content.address}</address>
        <address>
          <abbr title="Phone">{content.phone.label}: </abbr>
          {content.phone.value}
          <br />
          <abbr title="Email">{content.email.label}: </abbr>
          <a href={`mailto:${content.email.value}`}>{content.email.value}</a>
        </address>
      </React.Fragment>
    );
  }
  

// export default AboutUs;
