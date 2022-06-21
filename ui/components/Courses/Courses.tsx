import React from 'react'
import useSWR from 'swr';
import { ResponseType } from '../../../common/types/ResponseType';
import { store } from '../../../redux/store';
import { getCourses } from './Courses.api';
import { Provider } from 'react-redux';
import Button from '@mui/material/Button';

function Courses() {
    React.useEffect(() => {
        getCourses();
        console.log(process.env.NEXT_PUBLIC_BACK);
    }, []);

    return (
        <Provider store={store}>
            <div>Courses</div>
            <Button />
        </Provider>
    )
}

export default Courses