// import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react'
import Login from './Login/Login';
import SignUp from './SignIn/SignUp';
import SignIn from './SignIn/SignUp';
import { TabPanelProps } from './SignInOutContainer.type';
import TabPanel from './TabPanel/TabPanel';


const SignInOutContainer = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    console.log("SignInOutContainer")

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Paper
                    elevation={20}
                    sx={{
                        //width: 350,
                        margin: "20px auto",
                    }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        variant="fullWidth"
                        scrollButtons="auto"
                        aria-label="login-sign-up-tabs"
                    >
                        <Tab label="Sign In" />
                        <Tab label="Sign Up" />
                    </Tabs>
                    <TabPanel value={value} index={0} >
                        <Login />
                    </TabPanel>
                    <TabPanel value={value} index={1} >
                        <SignUp />
                    </TabPanel>
                </Paper>
            </Container>
        </>
    )
}

export default SignInOutContainer;