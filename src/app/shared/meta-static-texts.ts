import { SeoMetaData } from "./interfaces";

export const metaTexts: { [key:string]: SeoMetaData} = {
  home: {
    title: 'FON2FIX - Smartphone Repair Services & Accessories Solutions', // less than 60
    description: // less than 150
      'FON2FIX - Smartphone specialist in repair services & accessories - Kedai Pakar Membaiki Telefon Pintar di Taman Sri Gombak, Batu Caves.',
    image: '/assets/images/main-image.png'
  },
  contact: {
    title: 'Contact FON2FIX Smartphone Repair Specialist',
    description: 'Having more questions? Feel free to drop us a message or visit FON2FIX personally at Taman Sri Gombak, Batu Caves!',
    image: '/assets/images/main-image.png'
  },
  privatePolicy: {
    title: 'FON2FIX - Private Policy',
    description: 'FON2FIX Private Policy',
    image: '/assets/images/main-image.png'
  },
  termsConditions: {
    title: 'FON2FIX - Terms and Conditions',
    description: 'FON2FIX Terms and Conditions',
    image: '/assets/images/main-image.png'
  },
  notFound: {
    title: 'FON2FIX - Not Found Page',
    robots: 'noindex, nofollow'
  }
};
