// Sidebar.tsx
import React from 'react';
// import '../styles/Sidebar.css'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { AvTimer, Balance, Biotech, DarkMode, Directions, GitHub, Home, LightMode, Slideshow, Timeline } from '@mui/icons-material';

interface SidebarProps {
    width: number;
    isDark: boolean;
    toggleIsDark: () => void;
}

const sidebarItems = [
    { text: 'Home', icon: <Home /> },
    { text: 'Minutes', icon: <AvTimer /> },
    { text: 'Intent', icon: <Directions /> },
    { text: 'Technology', icon: <Biotech /> },
    { text: 'Timeline', icon: <Timeline /> },
    { text: 'Conclusion', icon: <Balance /> },
    { text: 'Presentation', icon: <Slideshow /> },
];

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    return (
        <Drawer
            sx={{
                width: props.width,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: props.width,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                {sidebarItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton component={Link} to={`/${item.text.toLowerCase()}`}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List sx={{ mt: 'auto', mb: 2 }}>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="https://github.com/arnavsacheti" target="_blank">
                        <ListItemIcon><GitHub /></ListItemIcon>
                        <ListItemText primary="@arnavsacheti" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={props.toggleIsDark}>
                        <ListItemIcon>
                            {props.isDark ? <LightMode /> : <DarkMode />}
                        </ListItemIcon>
                        <ListItemText primary={props.isDark ? 'Light' : 'Dark'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
