import React from 'react'
import useSWR from 'swr';
import { ResponseType } from '../../../common/types/ResponseType';
import { getCourses } from './Courses.api';

function Courses() {
    React.useEffect(() => {
        getCourses();
        console.log(process.env.NEXT_PUBLIC_BACK);
    }, []);

    return (
        <div>Courses</div>
    )
}

export default Courses