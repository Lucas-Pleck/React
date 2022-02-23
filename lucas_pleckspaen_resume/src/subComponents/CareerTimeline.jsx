import React from 'react';
import { Chrono } from 'react-chrono';

const CareerTimeline = () => {
  const items = [
    {
      title: '2019/2021',
      cardTitle: 'AREA MANAGER (PHARMACEUTICAL)',
      url: 'http://www.aragan.fr/',
      media: {
        name: 'Aragan Logo',
        source: {
          url: 'http://www.aragan.fr/wp-content/uploads/logo-aragan.png',
        },
        type: 'IMAGE',
      },
      cardSubtitle: 'Groupe ERSA / Aragan',
      cardDetailedText: [
        `- Management of a team of trainers / mentoring new representatives.`,
        `- Analyze, forecast and ensure the sell-in and sell-out of products.`,
        `- Management of regional groups.`,

        `ARAGAN Laboratory is specialized in the design and distribution in pharmacies
        and drugstores of high-end food supplements.
        `,
      ],
    },
    {
      title: '2018/2019',
      cardTitle: 'SENIOR PHARMACEUTICAL REPRESENTATIVE',
      url: 'https://www.mayoly-spindler.fr/en/',
      media: {
        name: 'Mayoly Spindler Logo',
        source: {
          url: 'https://www.mayoly-spindler.fr/wp-content/uploads/2018/05/Logo-Mayoly-Spindler-Laboratoires.png',
        },
        type: 'IMAGE',
      },
      cardSubtitle: 'Laboratoires Mayoly Spindler',
      cardDetailedText: [
        `- Promotion of the products to pharmacies and drugstores.`,
        `- Ensuring the sell-in/sell-out of products through among other things, training, challenges and partnerships.`,
        `- Management of regional groups.`,

        `MAYOLY SPINDLER is a French, family-owned independent laboratory.
        `,
      ],
    },
    {
      title: '2016/2018',
      cardTitle: 'ENTREPRENEURSHIP (WEBSHOP)',
      url: '',
      media: {
        name: 'Haberdasher Logo',
        source: {
          url: '/Images/career/haberdasher_logo.jpg',
        },
        type: 'IMAGE',
      },
      cardSubtitle: 'Haberdasher',
      cardDetailedText: [
        `- Creation and management of a small company.`,
        `- Creation and management of a PrestaShop website.`,
        `- Communication and SEO through SEA, Facebook/Google
        advertisements and promotions, among other things.`,
        `- Supplier and sales management.
        `,

        `Haberdasher was a Webshop offering quality accessories for men such as ties, bowties, belts and sunglasses.
        `,
      ],
    },
    {
      title: '2010/2015',
      cardTitle: 'ACCOUNT EXECUTIVE (MARKETING)',
      url: 'https://www.brand-booster.eu/',
      media: {
        name: 'Brand-Booster Logo',
        source: {
          url: 'https://www.brand-booster.eu/images/logo_brand_booster_menu.png',
        },
        type: 'IMAGE',
      },
      cardSubtitle: 'Brand-Booster',
      cardDetailedText: [
        `- Management of a team of trainers / mentoring new representatives.`,
        `- Analyze, forecast and ensure the sell-in and sell-out of products.`,
        `- Management of regional groups.`,

        `ARAGAN Laboratory is specialized in the design and distribution in pharmacies
        and drugstores of high-end food supplements.
        `,
      ],
    },
  ];

  return (
    <Chrono
      items={items}
      mode="VERTICAL"
      cardHeight={150}
      theme={{
        titleColor: '#084276',
        secondary: '#ccac00',
        cardForeColor: '#084276',
      }}
    />
  );
};

export default CareerTimeline;
