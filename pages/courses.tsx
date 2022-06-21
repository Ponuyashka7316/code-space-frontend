import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import dynamic from 'next/dynamic';
const Courses = dynamic(() => import('../ui/components/Courses/Courses'));

const CoursesPage = () => {
    React.useEffect(() => {
        console.log('Courses page rendered')

    });
    return (
        <>
            <Router basename="/courses">
                <div>
                    <ul>
                        <li>
                            <Link to="/list">Courses</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                    <Routes>
                        <Route path="/list" element={<Courses />}>

                        </Route>
                        <Route path="/" element={<h2>Home</h2>}>

                        </Route>
                    </Routes>
                </div>
            </Router>

        </>
    )
}

export default CoursesPage;