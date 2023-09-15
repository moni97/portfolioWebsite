import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const VerticalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const useStyles = (theme) => ({
    tabText: {
      color: 'red', // Change this to your desired text color
    },
  });

  const classes = useStyles();

  return (
    <div className="vertical-tabs">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={activeTab}
        onChange={handleChange}
        classes={{
          label: classes.tabText, // Apply the custom style to the text
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default VerticalTabs;
