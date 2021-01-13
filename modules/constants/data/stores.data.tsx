import { FacebookUrl, InstagramUrl } from '@ilovemochi/enums';
import { IStore } from '@ilovemochi/types';
import { flippedMap } from '@utils/helper-functions';
import { ReactNode } from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export interface StoreSocialMedia {
  icon: ReactNode;
  url: string;
}

export interface StorePhone {
  icon: ReactNode;
  phone: string;
}

export interface StoreData {
  name: IStore['name'];
  imageName: string;
  id: string;
  socialMedia: ReadonlyArray<StoreSocialMedia>;
  phone: StorePhone;
}

const StoresData: ReadonlyArray<StoreData> = [
  {
    name: 'mochi night lisbon',
    imageName: 'lisbon',
    id: 'mochi night lisbon',
    socialMedia: [
      { icon: <FaFacebookF style={{ color: '#3b5998' }} />, url: FacebookUrl },
      { icon: <FaInstagram style={{ color: '#DD2A7B' }} />, url: InstagramUrl },
      { icon: <FaWhatsapp style={{ color: '#1EBEA5' }} />, url: 'https://wa.me/351967132238' },
    ],
    phone: { icon: <FaPhoneAlt />, phone: '+351 967 132 238' },
  },
  {
    name: 'mochi night porto',
    imageName: 'porto',
    id: 'mochi night porto',
    socialMedia: [
      { icon: <FaFacebookF style={{ color: '#3b5998' }} />, url: FacebookUrl },
      { icon: <FaInstagram style={{ color: '#DD2A7B' }} />, url: InstagramUrl },
      { icon: <FaWhatsapp style={{ color: '#1EBEA5' }} />, url: 'https://wa.me/351912182350' },
    ],
    phone: { icon: <FaPhoneAlt />, phone: '+351 351 912 182' },
  },
  {
    name: 'mochi night luanda',
    imageName: 'luanda',
    id: 'mochi night luanda',
    socialMedia: [
      {
        icon: <FaFacebookF style={{ color: '#3b5998' }} />,
        url: 'https://www.facebook.com/mochinightangola/',
      },
      {
        icon: <FaInstagram style={{ color: '#DD2A7B' }} />,
        url: 'https://www.instagram.com/mochi_night_angola/',
      },
      { icon: <FaWhatsapp style={{ color: '#1EBEA5' }} />, url: 'https://wa.me/244932612035' },
    ],
    phone: { icon: <FaPhoneAlt />, phone: '+244 939 049 476' },
  },
];

export const renderStores: (obj: any) => any = flippedMap(StoresData);
