import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const DressCode = () => {
  const { t } = useTranslation();
    return (
      <div className="" id="dresscode">
          <div className="bg-text">
          <Card.Body>
            <Card.Title>{t("dress_code.main")} <a href="https://en.wikipedia.org/wiki/D%C3%AEner_en_Blanc">{t("dress_code.din_blanc_link")}</a>{t("dress_code.meets")}<a href="https://en.wikipedia.org/wiki/Guayabera">{t("dress_code.guay_link")}</a></Card.Title>
            <br/>
            <ImageList cols={1} rowHeight={400}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
             </ImageList>
          </Card.Body>
          </div>
      </div>   
    );
  }

  const itemData = [
    {
      img: '/img/white1.png',
      title: 'Bed',
    },
    {
      img: '/img/white2.png',
      title: 'Books',
    },
    {
      img: '/img/white3.png',
      title: 'Sink',
    },
    {
      img: '/img/white4.png',
      title: 'Kitchen',
    },
    {
      img: '/img/white5.png',
      title: 'Blinds',
    },
    {
      img: '/img/white6.png',
      title: 'Chairs',
    },
  ];
  export default DressCode;