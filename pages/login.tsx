import React from 'react'
import SignInOutContainer from '../ui/components/Login/SignInOutContainer'
import NProgress from 'nprogress'; //nprogress module
import Link from 'next/link';

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
            <Link href={"/courses"} >Courses</Link>
        </>

    )
}

export default Login;