import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="ABOUT" style={{ fontSize: 12, fontWeight: 'bold' }}/>
        <Tab label="INSTRUCTOR" style={{ fontSize: 12, fontWeight: 'bold' }}/>
        <Tab label="REVIEWS" style={{ fontSize: 12, fontWeight: 'bold' }}/>
      </Tabs>
    </Box>
  );
}
