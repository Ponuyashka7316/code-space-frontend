import React from 'react'
import Courses from '../ui/components/Courses/Courses';

const CoursesPage = () => {
    React.useEffect(() => {
        console.log('Courses page rendered')

    });
    return (
        <>
            <Courses />
        </>
    )
}

export default CoursesPage;