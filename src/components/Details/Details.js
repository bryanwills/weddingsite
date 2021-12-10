import React from "react";
import { useTranslation } from 'react-i18next';

const Details = () => {
  const { t } = useTranslation();
  return (
    <div className="" id="details">
        <div className="center wide rsvp">
            {t("details.main")}
            <br/>
        </div>
    </div>
  );
};
export default Details;
