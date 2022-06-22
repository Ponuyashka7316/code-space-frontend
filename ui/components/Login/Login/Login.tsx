import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//  import { Avatar, Button, Checkbox, Grid, Link, Paper, Stack, TextField, TextFieldProps, Typography } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Auth from '../../Auth/Auth';
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

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
            //alert(JSON.stringify(values, null, 2));
            handleSubmit(values);

        },
    });


    return (
        <>
            <Grid>
                <Paper
                    sx={{
                        p: 3,
                        height: '70vh',
                        width: 350,
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
                            fullWidth />
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

export default Login;