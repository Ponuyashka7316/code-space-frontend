import React, { ReactElement } from 'react'
import useSWR from 'swr';
import { ResponseType } from '../../../common/types/ResponseType';
import { store } from '../../../redux/store';
import { getCourses } from './Courses.api';
import { Provider } from 'react-redux';
import Button from '@mui/material/Button';
import Layout from '../Layouts/Layout';
import { NextPageWithLayout } from '../../../pages/_app';

const Courses: NextPageWithLayout = () => {
    React.useEffect(() => {
        getCourses();
    }, []);

    return (
        <Provider store={store}>
            <div>Courses</div>
            <Button />
        </Provider>
    )
}

Courses.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <>{page}</>
        </Layout>
    )
}
export default Courses