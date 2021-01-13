import { useI18n } from '@hooks';
import { FC } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CustomArrowProps } from 'react-slick';
import { v4 } from 'uuid';

import { CarouselNavButtonNext, CarouselNavButtonPrev } from './carousel.styles';

export const PrevArrow: FC<CustomArrowProps> = ({ onClick }) => {
  const { t } = useI18n();
  const id = v4();
  return (
    <CarouselNavButtonPrev type="button" aria-labelledby={id} onClick={onClick}>
      <FaChevronLeft id={id} role="img" aria-label={t('common.ariaLabel.prevItems')} size={20} />
    </CarouselNavButtonPrev>
  );
};

export const NextArrow: FC<CustomArrowProps> = ({ onClick }) => {
  const { t } = useI18n();
  const id = v4();
  return (
    <CarouselNavButtonNext type="button" aria-labelledby={id} onClick={onClick}>
      <FaChevronRight id={id} role="img" aria-label={t('common.ariaLabel.nextItems')} size={20} />
    </CarouselNavButtonNext>
  );
};
