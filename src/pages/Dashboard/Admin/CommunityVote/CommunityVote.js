import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Active from './Active';
import Reward from './Reward';
import Astard from './Astard';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, color: '#fff' }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CommunityVote = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <h5 className="dashboard-title">Community vote</h5>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#fff' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                        textColor= '#fff'
                        TabIndicatorProps={{
                            sx: {
                              backgroundColor: '#fff'
                            },
                          }}
                    >
                        <Tab label="Active" {...a11yProps(0)} />
                        <Tab label="Reward" {...a11yProps(1)} />
                        <Tab label="Astard" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel  value={value} index={0}>
                    <Active />
                </TabPanel>
                <TabPanel  value={value} index={1}>
                    <Reward/>
                </TabPanel>
                <TabPanel  value={value} index={2}>
                   <Astard/>
                </TabPanel>
            </Box>
        </div>
    );
};

export default CommunityVote;




