import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../ui/components/Layouts/Layout'
import { NextPageWithLayout } from '../../_app'

const Course: NextPageWithLayout = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>{id}</div>
    )
}

Course.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <>{page}</>
        </Layout>
    )
}
export default Course