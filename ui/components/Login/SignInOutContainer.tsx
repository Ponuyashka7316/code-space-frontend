import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
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

    return (
        <>
            <Paper square>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="login-sign-up-tabs"
                >
                    <Tab label="Login" />
                    <Tab label="Sign in" />
                </Tabs>
                <TabPanel value={value} index={0} >
                    <Login />
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <SignUp />
                </TabPanel>


            </Paper>
        </>
    )
}

export default SignInOutContainer;