import Head from 'next/head';
import { FC } from 'react';
import Slider from 'react-slick';

import { CarouselProps } from './carousel.types';
import settings from './settings';

const Carousel: FC<CarouselProps> = ({ children, itemsPerSlide }) => {
  const config = settings(itemsPerSlide!);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...config}>{children}</Slider>
    </>
  );
};

export default Carousel;
