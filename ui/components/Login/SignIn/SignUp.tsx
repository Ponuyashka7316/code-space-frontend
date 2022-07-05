import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Avatar, Button, Checkbox, FormControl, FormLabel, Grid, Link as MuiLink, Paper, Radio, RadioGroup, Stack, styled, TextField, TextFieldProps, Typography } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CustomTextField } from '../Login/Login';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    gender: yup
        .string()
        .required(),
    // password: yup
    //     .string()
    //     .trim()
    //     .min(8, 'Password should be of minimum 8 characters length')
    //     .uppercase('Password should contain at least one uppercase letter'),
    // .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    //     "Password must contain at least 8 characters, one uppercase, one number and one special case character")
    // .required('Password is required'),
    //ts-ignore
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character")
        .required('Password is required'),
    passwordConfirmation: yup.string().when("password", {
        is: (val: string | any[]) => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
            [yup.ref("password")],
            "Both password need to be the same"
        )
    }),
    phone: yup
        .string()
        .required(),
    terms: yup
        .boolean()
        .required()
});

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
            gender: '',
            name: '',
            terms: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    console.log("rendered", formik)


    return (
        <>
            <Grid>
                <Paper
                    sx={{
                        p: 3,
                        //height: '70vh',
                        //width: 350,
                        margin: "0 auto",
                    }}>
                    <Stack alignItems={"center"} justifyContent="center">
                        <Avatar
                            sx={{
                                bgcolor: "#008000"
                            }}>
                            <AddCircleOutline />
                        </Avatar>
                        <Typography variant="h3" component={"h2"}>Sign Up   </Typography>
                        <Typography >Please fill this form to enter the website   </Typography>
                    </Stack>
                    <form onSubmit={formik.handleSubmit}>
                        <CustomTextField
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            id="name"
                            size='small'
                            name="name"
                            label="Username"
                            placeholder="Enter user name"
                            helperText={formik.touched.name && formik.errors.name}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            margin="dense"
                            fullWidth
                        />
                        <CustomTextField
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            id="email"
                            size='small'
                            name="email"
                            label="Email"
                            placeholder="Enter email"
                            type="email"
                            helperText={formik.touched.email && formik.errors.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            margin="dense"
                            fullWidth
                        />
                        <FormLabel id="gender-label">Gender</FormLabel>
                        <RadioGroup
                            id="gender"
                            name="gender"
                            row
                            onChange={formik.handleChange}
                            aria-labelledby="demo-radio-buttons-group-label"
                            // error={formik.touched.gender && Boolean(formik.errors.gender)}
                            value={formik.values.gender}

                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>

                        <CustomTextField
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            id="phone"
                            size='small'
                            name="phone"
                            label="Phone"
                            placeholder="Enter phone number"
                            type="phone"
                            helperText={formik.touched.phone && formik.errors.phone}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            margin="dense"
                            fullWidth
                        />
                        <TextField
                            fullWidth
                            id="password"
                            size='small'
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            margin="dense"
                        />
                        <TextField
                            id="passwordConfirmation"
                            size='small'
                            name="passwordConfirmation"
                            label="passwordConfirmation"
                            type="password"
                            value={formik.values.passwordConfirmation}
                            onChange={formik.handleChange}
                            error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                            helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                            margin="dense"
                            fullWidth
                        />
                        <Button type="submit" color="primary" variant="contained" fullWidth sx={{
                            margin: "8px 0"
                        }}>
                            Sign Up
                        </Button>

                        <FormControlLabel
                            label="Terms and conditions"
                            id="terms"
                            name="terms"

                            control={
                                <Checkbox
                                    name='Conditions'
                                />
                            }
                        />

                    </form>
                    <Typography>
                        Do you have an account ?
                        <Link href={''}>Sign In</Link>
                    </Typography>
                    <Typography>
                        Learn more about our team {' '}
                        <Link href='/about'>About Us</Link>
                    </Typography>
                </Paper>
            </Grid >  </>

    )
}

export default SignUp