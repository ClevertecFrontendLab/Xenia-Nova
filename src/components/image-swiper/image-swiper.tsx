import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Pagination } from 'swiper';
import type SwiperType from 'swiper';

import { mockImgArr } from '../../constants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import styles from './image-swiper.module.scss';
import noImage from '../../assets/img/no-img.png';

interface IImageSwiperProps {
  imgUrls?: string[];
}

export const ImageSwiper: FC<IImageSwiperProps> = ({ imgUrls = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [img, setImg] = useState(imgUrls[0] || '');

  const imageOnErrorHandler = () => setImg(noImage);

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
              <SwiperSlide data-test-id='slide-mini' key={img} className={styles.slide} >
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
