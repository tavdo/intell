// src/components/ProductInfoTabs.js
import React, { useState } from 'react';
import SpecificationsTable from './SpecificationsTable';

const ProductInfoTabs = ({ description, specs }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('description')} className={activeTab === 'description' ? 'active' : ''}>Description</button>
        <button onClick={() => setActiveTab('specs')} className={activeTab === 'specs' ? 'active' : ''}>Specifications</button>
      </div>
      <div className="tab-content">
        {activeTab === 'description' ? <p>{description}</p> : <SpecificationsTable specs={specs} />}
      </div>
    </div>
  );
};

export default ProductInfoTabs;
