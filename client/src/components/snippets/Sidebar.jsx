import { Box, Drawer, IconButton, List, ListItemButton, Typography } from '@mui/material';
import React from 'react';
import LogoutOutLinedIcon from "@mui/icons-material/LogoutOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { sidebarMain, sidebarSub, sidebarTextMain, sidebarTextSub, sidebarIconMain, sidebarIconSub } from '../../assets/color';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
    };


    return (
        <Drawer
            container={window.document.body}
            variant="permanent"
            open={true}
            sx={{
                width: 250,
                height: "100vh",
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}>
                <Box sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                    backgroundColor: sidebarMain,
                }}>
                    <List sx={{ width: 250 }}>
                        <ListItemButton>
                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <Typography
                                    variant="body2"
                                    fontWeight="700"
                                    color={sidebarTextMain}>
                                    お気に入り
                                </Typography>
                            </Box>
                        </ListItemButton>

                        <Box sx={{ paddingTop: "10px" }}></Box>

                        <ListItemButton>
                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <Typography
                                    variant="body2"
                                    fontWeight="700"
                                    color={sidebarTextMain}
                                >
                                    プライベート
                                </Typography>
                                <IconButton sx={{ color: sidebarIconMain }}>
                                    <AddBoxOutlinedIcon fontsize="small" />
                                </IconButton>
                            </Box>
                        </ListItemButton>

                        <Box sx={{ paddingTop: "10px" }}></Box>

                        <ListItemButton sx={{ pl: "20px" }} compornent={Link} to="/memo/123123">
                            <Typography
                                variant="body2"
                                fontWeight="700"
                                color={sidebarTextMain}
                            >
                                Test
                            </Typography>
                        </ListItemButton>

                    </List>
                </Box>

                <Box sx={{
                    backgroundColor: sidebarSub,
                }}>
                    <List>
                        <ListItemButton>
                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <Typography
                                    variant="body2"
                                    fontWeight="700"
                                    color={sidebarTextSub}>
                                    はしお
                                </Typography>
                                <IconButton
                                    sx={{ color: sidebarIconSub }}
                                    onClick={logout}>
                                    <LogoutOutLinedIcon />
                                </IconButton>
                            </Box>
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
}

export default Sidebar;
