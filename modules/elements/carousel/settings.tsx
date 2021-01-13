import { NextArrow, PrevArrow } from './carousel-arrows';
import { TResponsiveItems } from './carousel.types';

const settings = (items: TResponsiveItems = [1, 2, 3, 4, 5, 6]) => ({
  dots: false,
  infinite: false,
  speed: 500,
  centerMode: false,
  slidesToShow: items[5],
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1425,
      settings: {
        slidesToShow: items[5],
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1330,
      settings: {
        slidesToShow: items[4],
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1164,
      settings: {
        slidesToShow: items[3],
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: items[2],
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: items[1],
        swipeToSlide: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: items[0],
        slidesToScroll: 1,
        swipeToSlide: false,
        centerMode: true,
      },
    },
  ],
});

export default settings;
