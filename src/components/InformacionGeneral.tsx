"use client";
import Box from '@mui/material/Box';
import { FC, useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import ListarSwaggerClientes from './ListarSwaggerClientes';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const InformacionGeneral: FC = ({ }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Listar clientes" {...a11yProps(0)} />
                <Tab label="Obtener cliente" {...a11yProps(1)} />
                <Tab label="Registrar cliente" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <ListarSwaggerClientes />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Obtener cliente
            </TabPanel>
            <TabPanel value={value} index={2}>
                Registrar cliente
            </TabPanel>
        </Box>
    );
}

export default InformacionGeneral