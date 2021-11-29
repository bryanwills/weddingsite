import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const DressCode = () => {
  const { t } = useTranslation();
    return (
      <div className="designsectionlarge" id="dresscode">
          <Card>
          <div className="textcontent">
          <Card.Body>
            <Card.Title>{t("dress_code.main")}</Card.Title>
            <br/>
            <ImageList cols={3} rowHeight={250}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
             </ImageList>
          </Card.Body>
          </div>
        </Card>
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