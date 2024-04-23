// Sidebar.tsx
import React, { useState } from "react";
// import '../styles/Sidebar.css'
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  ArrowDropDown,
  ArrowDropUp,
  AvTimer,
  Balance,
  Biotech,
  Book,
  CellTower,
  Computer,
  DarkMode,
  Directions,
  EnhancedEncryption,
  GitHub,
  Home,
  LightMode,
  PrivacyTip,
  Psychology,
  Security,
  Slideshow,
  Timeline,
  Work,
} from "@mui/icons-material";

interface SidebarProps {
  width: number;
  isDark: boolean;
  toggleIsDark: () => void;
}

const sidebarItems = [
  { text: "Home", link: "/", icon: <Home /> },
  { text: "Minutes", link: "/minutes", icon: <AvTimer /> },
  { text: "Intent", link: "/intent", icon: <Directions /> },
  { text: "Technology", link: "/technology", icon: <Biotech /> },
  { text: "Timeline", link: "/timeline", icon: <Timeline /> },
  { text: "Conclusion", link: "/conclusion", icon: <Balance /> },
  { text: "Presentation", link: "/presentation", icon: <Slideshow /> },
];

const sectionList = [
  {
    text: "Networked Communication",
    link: "/networked-communication",
    icon: <CellTower />,
  },
  {
    text: "Intellectual Property",
    link: "/intellectual-property",
    icon: <Psychology />,
  },
  {
    text: "Information Privacy",
    link: "/information-privacy",
    icon: <PrivacyTip />,
  },
  {
    text: "Privacy and the Government",
    link: "/privacy-and-the-government",
    icon: <Security />,
  },
  {
    text: "Computer & Network Security",
    link: "/computer-and-network-security",
    icon: <EnhancedEncryption />,
  },
  {
    text: "Computer Reliability",
    link: "/computer-reliability",
    icon: <Computer />,
  },
  { text: "Work & Wealth", link: "/work-and-wealth", icon: <Work /> },
];

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const [sectionOpen, setSectionOpen] = useState(false);

  const toggleSectionOpen = () => {
    setSectionOpen(!sectionOpen);
  };

  return (
    <Drawer
      sx={{
        width: props.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: props.width,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={`${item.link}`}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"Chapters"} disablePadding>
          <ListItemButton onClick={toggleSectionOpen}>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="Chapters" />
            <ListItemIcon>
              {!sectionOpen ? <ArrowDropDown /> : <ArrowDropUp />}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Collapse in={sectionOpen} timeout="auto" unmountOnExit>
          {sectionList.map((sectionItem) => (
            <ListItem key={sectionItem.text}>
              <ListItemButton component={Link} to={`${sectionItem.link}`}>
                <ListItemIcon>{sectionItem.icon}</ListItemIcon>
                <ListItemText primary={sectionItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>
      <List sx={{ mt: "auto", mb: 2 }}>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://github.com/arnavsacheti"
            target="_blank"
          >
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary="@arnavsacheti" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={props.toggleIsDark}>
            <ListItemIcon>
              {props.isDark ? <LightMode /> : <DarkMode />}
            </ListItemIcon>
            <ListItemText primary={props.isDark ? "Light" : "Dark"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
