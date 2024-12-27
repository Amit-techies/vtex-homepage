import React, { useState } from 'react';
import './ImageTab.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsContent = [
    [
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/3_11zon.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/3_11zon.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
    ],
    [
      { src: 'asset/3_11zon.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/3_11zon.jpg', link: '#', heading: 'Heading' },
    ],
    [
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/3_11zon.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/3_11zon.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
      { src: 'asset/bannersmall.jpg', link: '#', heading: 'Heading' },
    ],
  ];

  return (
    
    <div className="tabs-container" >
        <h2 className='heading'>Shop For</h2>
      <div className="tabs-buttons">
        {['BALLOONS', 'OCCASIONS', 'COSTUMES'].map((label, i) => (
          <button key={i} className={activeTab === i ? 'active' : ''} onClick={() => setActiveTab(i)}>{label}</button>
        ))}
      </div>
      <div className="tabs-content">
        {tabsContent[activeTab].map((img, i) => (
          <a key={i} href={img.link}>
            <div className='imagecard'><img src={img.src} alt="" /></div>
            <h4>{img.heading}</h4>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tabs;