import React from "react";
import "./Details.css";
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-bootstrap';

  const Details = () => {
    const { t } = useTranslation();
    return (
      <React.Fragment>
       <div className="section">
        <Alert variant="success">
          <Alert.Heading>Nov 30th 2021:</Alert.Heading>
            <p>
              {t("details.main")}
            </p>
            <hr />
            <p className="mb-0">
             {t("details.second")}
            </p>
          </Alert>
          </div>
      </React.Fragment>
    );
  }
  

export default Details;
