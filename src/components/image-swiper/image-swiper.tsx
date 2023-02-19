import React, { FC, useState, useEffect } from 'react';
import type SwiperType from 'swiper';
import { Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import noImage from '../../assets/img/no-img.png';
import { mockImgArr } from '../../constants';
import { baseUrl } from '../../constants/api';

import styles from './image-swiper.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';

interface IImageSwiperProps {
  imgUrls?: string[];
}

export const ImageSwiper: FC<IImageSwiperProps> = ({ imgUrls = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [img, setImg] = useState('');
  const imageOnErrorHandler = () => setImg(noImage);

  useEffect(() => {
      setImg(imgUrls[0] ? `${baseUrl}${imgUrls[0]}` : '')
  }, [imgUrls]);

  return (
    <div className={styles.wrapper}>
      {imgUrls.length > 1 ? (
        <React.Fragment>
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Thumbs, Pagination]}
            pagination={{ clickable: true }}
            className={styles.mainSlider}
            data-test-id='slide-big'
          >
            {mockImgArr.map((img) => (
              <SwiperSlide key={img} className={styles.mainSlide}>
                <img src={img} alt='slider img' />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            className={styles.controlSlider}
            modules={[Thumbs, Pagination]}
            breakpoints={{
              800: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {mockImgArr.map((img) => (
              <SwiperSlide data-test-id='slide-mini' key={img} className={styles.slide}>
                <img src={img} alt='slider img' />
              </SwiperSlide>
            ))}
          </Swiper>
        </React.Fragment>
      ) : (
        <img className={styles.img} src={img} alt='book' onError={imageOnErrorHandler} />
      )}
    </div>
  );
};
