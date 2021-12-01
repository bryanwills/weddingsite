import React from "react";
import { useTranslation } from 'react-i18next';

const Details = () => {
  const { t } = useTranslation();
  return (
    <div className="" id="details">
        <div className="bg-text-centered bg-text-details">
            {t("details.main")}
        </div>
    </div>
  );
};
export default Details;
