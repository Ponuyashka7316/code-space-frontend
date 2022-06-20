import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; import { Avatar, Button, Checkbox, FormControl, FormLabel, Grid, Link, Paper, Radio, RadioGroup, Stack, styled, TextField, TextFieldProps, Typography } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CustomTextField } from '../Login/Login';
import { AddCircleOutline } from '@mui/icons-material';

const validationSchema = yup.object({
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
    password: yup
        .string()
        .trim()
        .min(8, 'Password should be of minimum 8 characters length')
        .uppercase('Password should contain at least one uppercase letter')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character")
        .required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
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
    return (
        <> <Grid>
            <Paper elevation={10}
                sx={{
                    p: 3,
                    //height: '70vh',
                    width: 350,
                    margin: "20px auto",
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
                    <FormControl variant="standard" fullWidth>
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
                        />
                    </FormControl>
                    <FormControl fullWidth>
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

                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <FormLabel id="gender-label">Gender</FormLabel>
                        <RadioGroup
                            id="gender"
                            name="gender"
                            row
                            onChange={formik.handleChange}
                            aria-labelledby="demo-radio-buttons-group-label"
                            // error={formik.touched.password && Boolean(formik.errors.password)}
                            value={formik.values.gender}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <CustomTextField
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        id="phone"
                        size='small'
                        name="phone"
                        label="Phone"
                        placeholder="Enter phone number"
                        type="password"
                        helperText={formik.touched.phone && formik.errors.phone}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        margin="dense"
                        fullWidth
                    />
                    <CustomTextField
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        id="password"
                        size='small'
                        name="password"
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        margin="dense"
                        fullWidth
                    />
                    <CustomTextField
                        value={formik.values.passwordConfirmation}
                        onChange={formik.handleChange}
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        type="password"
                        helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                        error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
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
                        control={
                            <Checkbox
                                name='Conditions'
                            />
                        }
                    />
                    <Typography>
                        Do you have an account ?
                        <Link>Sign In</Link>
                    </Typography>
                </form>
            </Paper>
        </Grid >  </>

    )
}

export default SignUp