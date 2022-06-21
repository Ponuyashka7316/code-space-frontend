import React from 'react'
import SignInOutContainer from '../ui/components/Login/SignInOutContainer'
import NProgress from 'nprogress'; //nprogress module

export async function getServerSideProps() {
    // const response = await fetch('https://api.github.com/users/octocat')
    return {
        props: {
        }
    }
}

const Login = () => {
    //NProgress.start()
    return (
        <>
            <SignInOutContainer />

        </>

    )
}

export default Login;