import React from 'react'
import SignInOutContainer from '../ui/components/Login/SignInOutContainer'

export async function getServerSideProps() {
    // const response = await fetch('https://api.github.com/users/octocat')
    return {
        props: {
        }
    }
}

const Login = () => {
    return (
        <>
            <SignInOutContainer />

        </>

    )
}

export default Login;