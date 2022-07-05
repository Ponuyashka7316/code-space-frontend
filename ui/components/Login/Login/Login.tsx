import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//  import { Avatar, Button, Checkbox, Grid, Link, Paper, Stack, TextField, TextFieldProps, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik } from 'formik';
import * as yup from 'yup';
import handleSubmit from './HandleSubmit';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import classes from '../../../../styles/muiStyle.module.scss';
import clsx from 'clsx';
import Alert from '@mui/material/Alert';
import { isError } from '../../Auth/TypeGuards';
import FormControl from '@mui/material/FormControl';

// whyDidYouRender(React, {
//     onlyLogs: true,
//     titleColor: "green",
//     diffNameColor: "darkturquoise"
// });

export const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    // margin: 2,

}));

const validationSchema = yup.object({
    email: yup
        .string()
        //.email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .min(8, 'Password should be of minimum 8 characters length')
        .uppercase('Password should contain at least one uppercase letter')
        // .matches(
        //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        //     "Password must contain at least 8 characters, one uppercase, one number and one special case character")
        .required('Password is required'),
});

const Login = (props: any) => {
    const [isLogging, setIsLogging] = useState<boolean>(false);
    const [showmessage, setShowmessage] = useState<boolean>(false);
    const [alertmessage, setAlertmessage] = useState('Some error happened. Please contact your administrator');
    //useWhyDidYouUpdate("Login", props);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values: any) => {
            setIsLogging(true); //first rerender
            //alert(JSON.stringify(values, null, 2));
            const res = await handleSubmit(values);
            (isError(res))
                ? (setShowmessage(true))
                : (setShowmessage(false));

            setIsLogging(false);
            console.log("onsubmit");
        },
    });

    console.log("RENRERED", isLogging)
    return (
        <>
            {showmessage && (
                <Alert variant="filled" severity="error">
                    {alertmessage}
                </Alert>
            )}
            <Grid sx={{
                position: 'relative'
            }}>
                <Box
                    className={clsx({
                        [classes.CenterContent]: isLogging,
                        [classes.Loading]: isLogging
                    })}
                    sx={{
                        display: isLogging ? "flex" : "none",
                        position: "absolute",
                        width: '100%',
                        height: '100%',
                    }}>
                    <CircularProgress thickness={4} size={"3rem"} />
                </Box>
                <Paper
                    sx={{
                        p: 3,
                        height: '70vh',
                        //width: 350,
                        margin: "0 auto",
                    }}>
                    <Stack alignItems={"center"} justifyContent="center">
                        <Avatar
                            sx={{
                                bgcolor: "#008000"
                            }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">Sign in</Typography>
                    </Stack>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl variant="standard" fullWidth>
                            <CustomTextField
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                id="email"
                                size="medium"
                                name="email"
                                label="Username"
                                placeholder="Enter user name"
                                helperText={formik.touched.email && formik.errors.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                margin="dense"
                                fullWidth
                            />
                        </FormControl>
                        <CustomTextField
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            id="password"
                            name="password"
                            label="Password"
                            placeholder="Enter password"
                            type="password"
                            helperText={formik.touched.password && formik.errors.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            margin="dense"
                            fullWidth
                        />
                        <FormControlLabel
                            label="Remember me"
                            control={
                                <Checkbox
                                    name='Remember me'
                                />
                            }
                        />
                        <Button type="submit" color="primary" variant="contained" fullWidth sx={{
                            margin: "8px 0"
                        }}>
                            Sign in
                        </Button>
                        <Typography>
                            <Link href={""}>Forgot password ? </Link>
                        </Typography>
                        <Typography>
                            Do you have an account ?
                            <Link href={""}>Sign Up</Link>
                        </Typography>
                    </form>
                </Paper>
            </Grid >
        </>
    )
}



export default memo(Login);