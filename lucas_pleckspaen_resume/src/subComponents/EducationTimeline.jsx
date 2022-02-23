import React from 'react';
import { Chrono } from 'react-chrono';

const EducationTimeline = () => {
  const items = [
    {
      title: '2021/2022',
      cardTitle: 'DEVOPS: IT PROFESSIONAL',
      url: 'https://technocite.be/formations/devops',
      media: {
        name: 'Technocité Logo',
        source: {
          url: 'https://technocite.be/assets/images/logo.svg',
        },
        type: 'IMAGE',
      },
      cardSubtitle: 'Technocité',
      cardDetailedText: [
        `- Web & MVC development`,
        `- SQL servers - Clusters.`,
        `- Virtualization - Web servers - Docker`,
        `- CI / CD orchestration - Automation- Monitoring`,
        `- IAAS, PaaS, SaaS, Cloud computing`,
        `- Scrum - Agile tools`,
      ],
    },
    {
      title: '2021/2021',
      cardTitle: 'IT SUPPORT & NETWORK',
      url: 'https://technocite.be/formations/collaborateur-it-support-reseaux',
      media: {
        name: 'Technocité Logo',
        source: {
          url: 'https://technocite.be/assets/images/logo.svg',
        },
        type: 'IMAGE',
      },
      cardSubtitle: 'Technocité',
      cardDetailedText: [
        `- Computer hardware and setup`,
        `- Windows 10 administration and security`,
        `- Windows server (AD, VPN, DHCP, DNS)`,
        `- Office 365, Powershell`,
        `- Linux: Administration and network`,
        `- VMWare, Hyper-V, KVM`,
        `- Local networks and TCP / IP , Cisco`,
        `- Wifi: Wireless networks and security`,

        `MAYOLY SPINDLER is a French, family-owned independent laboratory.
        `,
      ],
    },
    {
      title: '2007/2010',
      cardTitle: 'MARKETING',
      url: 'https://www.ephec.be/formations/haute-ecole/bachelier-en-marketing',
      media: {
        name: 'EPHEC Logo',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/02_EPHEC-Logo-Standard_-_seul--RVB.jpg',
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

export default EducationTimeline;
