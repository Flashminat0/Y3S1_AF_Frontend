import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import {HiCalendar, HiHome, HiMap, HiMenu, HiSearchCircle, HiSpeakerphone, HiUserGroup} from "react-icons/hi";
import Box from "@mui/material/Box";

const Box1 = ({anchor, navigation, toggleDrawer}) => {
    return (
        <Box
            id={`box1`}
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={() => {
                toggleDrawer(anchor, false)
            }}
            onKeyDown={() => {
                toggleDrawer(anchor, false)
            }}
        >
            <List>
                {navigation.map((navigationElement, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <navigationElement.icon className={`text-2xl text-red-500`}/>
                            </ListItemIcon>
                            <ListItemText primary={navigationElement.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <HiMenu/> : <HiHome/>}

                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Box1;
