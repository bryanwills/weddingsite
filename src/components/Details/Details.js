import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';

const Details = () => {
  const { t } = useTranslation();
  return (
    <div className="" id="details">
        <div className="bg-text">
        <Card.Body>
            <Card.Text>
            {t("details.main")}
            </Card.Text>
        </Card.Body>
        </div>
    </div>
  );
};
export default Details;
