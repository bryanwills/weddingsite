import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';

// const Details = () => {
//   const { t } = useTranslation();
//   return (
//       <div className="designsection" id="details">
//           <Card>
//           <div className="textcontent">
//           <Card.Body>
//               <Card.Title>Nov 30th 2021:</Card.Title>
//               <Card.Text>
//                 {t("details.main")}
//                 {t("details.second")}
//               </Card.Text>
//           </Card.Body>
//           </div>
//           </Card>
//       </div>
//   );
// };


const Details = () => {
  const { t } = useTranslation();
  return (
    <div className="designsection" id="details">
        <Card>
        <div className="textcontent">
        <Card.Body>
            <Card.Title>Nov 30th 2021:</Card.Title>
            <Card.Text>
            {t("details.main")}
            </Card.Text>
        </Card.Body>
        </div>
        </Card>
    </div>
  );
};
export default Details;
