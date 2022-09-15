import React, {useState} from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {routes} from "../../routes"
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import {NavLink} from "react-router-dom";

const Index = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>
            <AppBar sx={{background: "teal"}}>
                <Toolbar>
                    <AddBusinessRoundedIcon sx={{transform: "scale(2)"}}/>
                    {isMatch ? (
                        <>
                            <Typography sx={{fontSize: "2rem", paddingLeft: "10%"}}>
                                Shoppee
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Tabs
                                sx={{marginLeft: "auto"}}
                                indicatorColor="secondary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab label={<NavLink className={({isActive}) => (isActive ? "active" : "")}
                                                     to="/">Home</NavLink>}/>

                            </Tabs>
                            <Button sx={{marginLeft: "auto"}} variant="contained">
                                <NavLink className={({isActive}) => (isActive ? "active" : "")}
                                         to="/login">LOGIN</NavLink>
                            </Button>
                            <Button sx={{marginLeft: "10px"}} variant="contained">
                                <NavLink className={({isActive}) => (isActive ? "active" : "")}
                                         to="/register">SIGNUP</NavLink>
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Index;
